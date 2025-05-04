<template>
  <div>
    <button @click="goHome" class="back-button">Back to Home</button>
    <h1>Travel Plan Details</h1>
    <div v-if="loading">Loading plan details...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else-if="travelPlan">
      <h2>{{ travelPlan.title }}</h2>

      <div class="flex flex-col w-full relative">
        <div class="flex border-b border-gray-200 bg-gray-50 relative ">
          <div class="flex items-center overflow-x-auto flex-grow">
            <div v-for="(tab, index) in tabs" :key="index"
              class="flex items-center whitespace-nowrap relative">

              <div :class="[
                'flex items-center px-4 pt-1.5 pb-2 border-r text-sm  cursor-pointer rounded-tr-xl rounded-tl-sm',
                activeTabIndex === index
                  ? 'bg-white border-t-3  font-bold border-t-red-400 border-r-gray-200'
                  : 'hover:bg-gray-100 font-medium border-t-2 border-gray-200',
              ]" @click="setActiveTab(index)">
                <div class="flex items-center space-x-2">
                  <div v-if="editingTabIndex === index">
                    index:{{index}}
                    <input :ref="(el) => editTabInputs[index] = el"  v-model="editingTabName"
                      class="border px-1 py-0.5 text-sm focus:outline-none focus:ring-1 focus:ring-red-400 w-24"
                      @blur="saveTabName" @keyup.enter="saveTabName" @keyup.esc="cancelEditingTab" />
                  </div>
                  <span class=" select-none" v-else>{{ tab.title }}</span>

                  <div class="relative">
                    <button class="text-gray-500 hover:text-gray-800 focus:outline-none cursor-pointer pl-1 pt-1.5"
                      @click.stop="toggleTabMenu(index, $event)">
                      <FontAwesomeIcon :icon="faAngleDown" class="me-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button class="flex items-center justify-center h-9 w-9 text-gray-500 hover:text-gray-700 hover:bg-gray-100"
          @click="addNewTab('table')">
          <FontAwesomeIcon :icon="faPlus" class="me-1" />
        </button>
          </div>
        </div>

        <div class="bg-white flex-grow relative z-10 ">
          <div v-for="(tab, index) in tabs" :key="`content-${index}`">
            <div v-show="activeTabIndex === index" class="h-full">
              <template v-if="tab.type === 'table'">
                <Grid :initialHeaders="tab.value.headers" :initialData="tab.value.tableData" />
              </template>
              <template v-else-if="tab.type === 'checklist'">
                <Checklist :initialItems="tab.value.items" :initialTitle="tab.value.title" />
              </template>
              <template v-else-if="tab.type === 'notes'">
                <Notes :initialNotes="tab.value.notesList" />
              </template>
            </div>
          </div>
        </div>

        <!-- Dropdown menu -->
        <div v-if="dropdown.visible"
          class="dropdown-container absolute top-0 left-0 mt-1 w-32 bg-white shadow-lg rounded-md border border-gray-200 py-1 z-40"
          :style="{
            position: 'fixed',
            top: dropdown.top + 'px',
            left: dropdown.left + 'px',
            zIndex: 1000
          }">
          <button class="block w-full text-left px-4 py-1 text-sm text-gray-700 hover:bg-gray-100"
            @click.stop="startEditingTab(dropdown.tabIndex)">
            Rename
          </button>
          <button class="block w-full text-left px-4 py-1 text-sm text-gray-700 hover:bg-gray-100"
            @click.stop="duplicateTab(dropdown.tabIndex)">
            Duplicate
          </button>

          <div class="relative">
            <button class="block w-full text-left px-4 py-1 text-sm text-gray-700 hover:bg-gray-100"
              @click.stop="toggleVariantSubMenu">
              Variant
              <span class="float-right text-xs">▶</span>
            </button>

            <div v-if="showVariantSubMenu"
              class="absolute left-full top-0 ml-[-1px] w-32 bg-white shadow-lg rounded-md border border-gray-200 py-1 z-50"
              @click.stop>
              <button class="block w-full text-left px-4 py-1 text-sm text-gray-700 hover:bg-gray-100"
                @click="setTabVariant('table', dropdown.tabIndex)">
                Table
              </button>
              <button class="block w-full text-left px-4 py-1 text-sm text-gray-700 hover:bg-gray-100"
                @click="setTabVariant('checklist', dropdown.tabIndex)">
                Checklist
              </button>
              <button class="block w-full text-left px-4 py-1 text-sm text-gray-700 hover:bg-gray-100"
                @click="setTabVariant('notes', dropdown.tabIndex)">
                Notes
              </button>
            </div>
          </div>

          <button v-if="tabs.length > 1" class="block w-full text-left px-4 py-1 text-sm text-red-600 hover:bg-gray-100"
            @click.stop="deleteTab(dropdown.tabIndex)">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, nextTick, onMounted, onBeforeUnmount, onUnmounted } from 'vue';
import { db } from '@/config/firebase-config';
import { doc, getDoc } from 'firebase/firestore';
import { useRoute, useRouter } from 'vue-router'; // Import useRouter
import { inject } from 'vue';
import Checklist from './variants/Checklist.vue';
import Notes from './variants/Notes.vue';
import Grid from './variants/Grid.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPlus, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const route = useRoute();
const router = useRouter(); // Get the router instance
const currentUser = inject('currentUser');
const travelPlanId = ref(route.params.travelPlanId);
const travelPlan = ref(null);
const loading = ref(true);
const error = ref(null);

const activeTabIndex = ref(0);
const editingTabIndex = ref(null);
const editingTabName = ref('');
const editTabInputs = ref([]); // Array to hold input refs
const showVariantSubMenu = ref(false);

const dropdown = reactive({
  visible: false,
  top: 0,
  left: 0,
  tabIndex: null
});
 
// Define your default table headers
const defaultTableHeaders = ref([
  { value: 'Date', type: 'date', position: 1 },
  { value: 'Activity', type: 'text', position: 2 },
  { value: 'Notes', type: 'notes', position: 3 },
]);

// Define your default table data structure
const defaultTableData = ref([
  {
    type: 'title',
    value: [
      { value: '', cellType: 'date' },
      { value: '', cellType: 'default' },
      { value: '', cellType: 'note' },
    ],
  },
  {
    type: 'default',
    value: [
      { value: '', cellType: 'date' },
      { value: '', cellType: 'default' },
      { value: '', cellType: 'note' },
    ],
  },
]);
// =========== MAIN FUNCTIONS START =============

const tabs = computed(() => {
  if (travelPlan.value && travelPlan.value.tabs) {
    return Object.values(travelPlan.value.tabs).sort((a, b) => a.tabPosition - b.tabPosition);
  }
  return [];
});

const goHome = () => {
  router.push('/'); // Programmatically navigate to the home path
};

onMounted(async () => {
  try {
    const userId = currentUser.value?.uid;
    if (!userId) {
      error.value = 'User not authenticated.';
      loading.value = false;
      return;
    }
 
    console.log(`user: ${userId}`)
    const docRef = doc(db, `users/${userId}/travelPlans`, travelPlanId.value);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      travelPlan.value = { id: docSnap.id, ...docSnap.data() };
      console.log('plan:', JSON.parse(JSON.stringify(travelPlan.value)))
    } else {
      error.value = 'Travel plan not found.';
    }
  } catch (err) {
    console.error('Error fetching travel plan: ', err);
    error.value = 'Failed to fetch travel plan.';
  } finally {
    loading.value = false;
  }

  // Add event listeners for clicks outside and window resize
  document.addEventListener('click', handleClickOutside);
  window.addEventListener('resize', handleResize);

  // Detect if using a touch device
  if ('ontouchstart' in window) {
    isTouch.value = true;
  }
});

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
  // Close the dropdown if clicking outside
  if (dropdown.visible) {
    // Check if click is outside the dropdown
    const dropdownElement = document.querySelector('.dropdown-container');
    if (dropdownElement && !dropdownElement.contains(event.target)) {
      dropdown.visible = false;
      showVariantSubMenu.value = false;
    }
  }
};

// Close dropdown when resizing the window
const handleResize = () => {
  if (dropdown.visible) {
    dropdown.visible = false;
    showVariantSubMenu.value = false;
  }
};
// Toggle variant submenu
const toggleVariantSubMenu = (event) => {
  if (event) event.stopPropagation();
  showVariantSubMenu.value = !showVariantSubMenu.value;
};


// =========== MAIN FUNCTIONS END =============


// =========== TAB FUNCTIONS START =============
// Set active tab
const setActiveTab = (index) => {
  activeTabIndex.value = index;
  // Close dropdown when changing tabs
  dropdown.visible = false;
  showVariantSubMenu.value = false;
};

const saveTabName = () => {
  if (editingTabIndex.value !== null) {
    if (editingTabName.value.trim()) {
      tabs.value[editingTabIndex.value].name = editingTabName.value.trim();
    }
    editingTabIndex.value = null;
  }
};

// Cancel editing tab name
const cancelEditingTab = () => {
  editingTabIndex.value = null;
};

// Updated toggle tab menu function
const toggleTabMenu = (index, event) => {
  // Stop event propagation to prevent immediate closing
  event.stopPropagation();
  const rect = event.target.getBoundingClientRect();

  // If clicking on the same tab menu button that's already open, close it
  if (dropdown.visible && dropdown.tabIndex === index) {
    dropdown.visible = false;
  } else {
    // Otherwise, open this tab's menu
    dropdown.visible = true;
    dropdown.tabIndex = index;
    dropdown.top = rect.bottom + 4;
    dropdown.left = rect.left;
    showVariantSubMenu.value = false; // Close variant submenu when opening main menu
  }
};

// Start editing tab name
const startEditingTab = (index) => {
  if (index !== null) {
    editingTabIndex.value = index; 
    console.log('editingTabIndex', index)
    editingTabName.value = tabs.value[index].title;
    dropdown.visible = false; 

    nextTick(() => {
      if (editTabInputs.value[index]) {
        editTabInputs.value[index].focus();
        editTabInputs.value[index].select();
      } else {
        console.warn(`Input at index ${index} not found.`);
      }
    });
  }
};

const generateUniqueTabKey = (type) => {
  // console.log('tabs', JSON.parse(JSON.stringify(travelPlan.value.tabs)))
  const existingKeysOfType = Object.keys(travelPlan.value.tabs).filter(key => key.startsWith(`${type}_`));
  const maxCounter = existingKeysOfType.reduce((max, key) => {
    const parts = key.split('_');
    if (parts.length === 2 && parts[0] === type) {
      const counter = parseInt(parts[1], 10);
      return isNaN(counter) ? max : Math.max(max, counter);
    }
    return max;
  }, 0);
  return `${type}_${maxCounter + 1}`;
};


// Add a new tab
const addNewTab = (type = 'table') => {
  const newTabKey = generateUniqueTabKey(type);
  const newTabPosition = Object.keys(tabs.value).length + 1;
  let newValue;
  let newTitle;

  switch (type) {
    case 'table':
      newTitle = 'New Table';
      newValue = {
        headers: defaultTableHeaders.value.map(header => ({ ...header })),
        tableData: defaultTableData.value.map(row => ({ ...row })),
      };
      break;
    case 'checklist':
      newTitle = 'New Checklist';
      newValue = {
        title: '',
        items: [],
      };
      break;
    case 'notes':
      newTitle = 'New Notes';
      newValue = {
        notesList: [],
      };
      break;
    default:
      console.error(`Unknown tab type: ${type}`);
      return;
  }
  const newTabContent = {
    tabPosition: newTabPosition,
    type: type,
    title: newTitle,
    tabId: newTabPosition, // Using position as a simple initial ID
    value: newValue,
  } 
  travelPlan.value.tabs[newTabKey] = newTabContent;  
};

const setTabVariant = (variant, index) => {
  try {
    if (index !== null) {
      const tab = tabs.value[index];
      tab.variant = variant;

      // Close all menus
      dropdown.visible = false;
      showVariantSubMenu.value = false;

      // Set up appropriate data for the selected variant
      if (variant !== 'table') {
        delete tab.tabData;
        delete tab.tableHeaders;
        tab.content = '';
      } else if (variant === 'table' && !tab.tabData) {
        tab.tabData = defaultTableData.map(item => ({ ...item }));
        tab.tableHeaders = [...defaultTableHeaders];
      }
    }
  } catch (error) {
    console.error('Error in setTabVariant:', error);
  }
};


// Duplicate a tab
const duplicateTab = (index) => {
  if (index !== null) {
    const originalTab = tabs.value[index];
    const newTabName = `${originalTab.name} (copy)`;

    // Deep copy the tabData and tableHeaders
    const newTableData = originalTab.tabData
      ? originalTab.tabData.map((item) => {
        if (item.value) {
          return {
            ...item,
            value: item.value.map((row) =>
              row.map((cell) => ({ ...cell }))
            ),
          };
        }
        return { ...item }
      })
      : undefined;
    const newTableHeaders = originalTab.tableHeaders
      ? originalTab.tableHeaders.map((header) => ({ ...header }))
      : undefined;

    tabs.value.splice(index + 1, 0, {
      name: newTabName,
      content: originalTab.content,
      variant: originalTab.variant,
      tabData: newTableData, // Use the deep copied data
      tableHeaders: newTableHeaders, // Use the deep copied headers
    });

    // Set the new tab as active
    setActiveTab(index + 1);
    dropdown.visible = false; // Close dropdown after duplicating
  }
};

// Delete a tab
const deleteTab = (index) => {
  if (index !== null) {
    tabs.value.splice(index, 1);

    // If deleting the active tab or a tab before it, adjust activeTabIndex
    if (index <= activeTabIndex.value) {
      activeTabIndex.value = Math.max(0, activeTabIndex.value - 1);
    }

    dropdown.visible = false; // Close dropdown after deleting
  }
};

// Update table data for a specific tab
const updateTableData = (index, newData) => {
  if (tabs.value[index] && tabs.value[index].variant === 'table') {
    tabs.value[index].tabData = newData;
  }
};

// Update table headers for a specific tab
const updateTableHeaders = (index, newHeaders) => {
  if (tabs.value[index] && tabs.value[index].variant === 'table') {
    tabs.value[index].tableHeaders = newHeaders;
  }
};
// =========== TAB FUNCTIONS END =============

</script>