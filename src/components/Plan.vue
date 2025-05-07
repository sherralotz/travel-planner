<template>
  <div>

    <div v-if="loading">Loading plan details...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else-if="travelPlan">
      <div class="flex">
        <div class="flex w-full">
          <button @click="goHome"
            class="my-2 ms-1 sm:ms-0 me-2 px-2 py-1 border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50 transition-colors">
            <FontAwesomeIcon :icon="faAngleLeft" />
          </button>

          <div class="w-full">
      <h2
        v-if="!isEditingTitle"
        @click="startEditingTitle"
        class="text-lg font-semibold cursor-text truncate mt-2 sm:w-[45%] w-[80%] 
       " 
      >
        {{ travelPlan.title  }}
      </h2>
      <input
        v-else
        type="text" 
        ref="titleText"
        @keyup.enter="finishEditingTitle"
        @blur="finishEditingTitle"
        @keyup.esc="cancelEditingTitle"
        class="mt-2 text-lg h-8 font-semibold sm:w-[45%] w-[80%] rounded-md focus:outline-none   p-1"
        
      />
    </div>

 
        </div>
        <div class="ml-auto">
          <button
            class="note-menu-button relative top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none p-2"
            @click="showPlanMenu = !showPlanMenu">
            <FontAwesomeIcon :icon="faEllipsisVertical" />

            <!-- Dropdown menu -->
            <div v-if="showPlanMenu"
              class="dropdown-container absolute top-7 left-[-115px] mt-1 w-33 bg-white shadow-lg rounded-md border border-gray-200 py-1 z-40">
            <button @click.stop="deleteTravelPlan()"
            class="block px-4 w-full text-left text-red-600 hover:bg-gray-100">Delete Plan</button>
            </div>
          </button>


        </div>
      </div>

      <div class="flex flex-col w-full relative">
        <div class="flex border-b border-gray-200 bg-gray-50 relative ">
          <div class="flex items-center overflow-x-auto flex-grow">
            <div v-for="(tab, index) in tabs" :key="index" class="flex items-center whitespace-nowrap relative">

              <div :class="[
                'flex items-center px-4 pt-1.5 pb-2 border-r text-sm  cursor-pointer rounded-tr-xl rounded-tl-sm',
                activeTabIndex === index
                  ? 'bg-white border-t-3  font-bold border-t-red-400 border-r-gray-200'
                  : 'hover:bg-gray-100 font-medium border-t-2 border-gray-200',
              ]" @click="setActiveTab(index)">
                <div class="flex items-center space-x-2">
                  <div v-if="editingTabIndex === index">
                    <input :ref="(el) => editTabInputs[index] = el" v-model="editingTabName"
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
              <FontAwesomeIcon :icon="faPlus" class="me-2 ms-1" />
            </button>
          </div>
        </div>
        <div class="bg-white flex-grow relative z-10 ">
          <div v-for="(tab, index) in tabs" :key="`content-${index}`">
            <div v-show="activeTabIndex === index" class="h-full">
              <template v-if="tab.type === 'table'">
                <Grid :initialHeaders="tab.value.headers" :initialData="tab.value.tableData" :tabKey="tab.key"
                  @update:data="handleUpdatePlanItem" />
              </template>
              <template v-else-if="tab.type === 'checklist'">
                <Checklist :initialItems="tab.value?.items || []" :initialTitle="tab.value?.title || '' "
                  :travelPlanId="travelPlanId" :tabKey="tab.key" @update-checklist="handleUpdatePlanItem" />
              </template>
              <template v-else-if="tab.type === 'notes'">
                <Notes :initialNotes="tab.value" :tabKey="tab.key" @update-note="handleUpdatePlanItem" />
              </template>
            </div>
          </div>
        </div>

        <!-- Dropdown menu -->
        <div v-if="dropdown.visible"
          class="dropdown-container absolute top-0 left-0 mt-1 w-33 bg-white shadow-lg rounded-md border border-gray-200 py-1 z-40"
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
          <!-- <button class="block w-full text-left px-4 py-1 text-sm text-gray-700 hover:bg-gray-100"
            @click.stop="duplicateTab(dropdown.tabIndex)">
            Duplicate
          </button> -->

          <div class="relative">
            <button class="block w-full text-left px-4 py-1 text-sm text-gray-700 hover:bg-gray-100"
              @click.stop="toggleVariantSubMenu">
              Change Type <span>
                <FontAwesomeIcon :icon="faAngleRight" />
              </span>



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
import { faPlus, faAngleDown, faAngleLeft, faAngleRight,faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import useDataUpdater from '@/composables/useDataUpdater';

const route = useRoute();
const router = useRouter(); // Get the router instance
const currentUser = inject('currentUser');
const userId = currentUser.value.uid;
const travelPlanId = ref(route.params.travelPlanId);
const travelPlan = ref(null);
const loading = ref(true);
const showPlanMenu = ref(false);
const isEditingTitle = ref(false);
const titleText = ref(null);
// const error = ref(null);

const activeTabIndex = ref(0);
const editingTabIndex = ref(null);
const editingTabName = ref('');
const editingTabKey = ref('');
const editTabInputs = ref([]); // Array to hold input refs
const showVariantSubMenu = ref(false);
const {
  data,
  updateData,
  isLoading,
  error,
  deletePlan,
  unsubscribe
} = useDataUpdater({ userId, travelPlanId });

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
    const tabsArray = Object.entries(travelPlan.value.tabs); 
    // Sort the array based on the tabPosition in the value
    tabsArray.sort(([, a], [, b]) => a.tabPosition - b.tabPosition); 
    // Now, map this array to an array of objects, where each object has the key and the value
    const tabsParsedWithKey =  tabsArray.map(([key, value]) => ({ key, ...value })); 
    return tabsParsedWithKey;
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
 
    // console.log(`user: ${userId}`)
    const docRef = doc(db, `users/${userId}/travelPlans`, travelPlanId.value);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
    console.log('docSnap.data():', JSON.parse(JSON.stringify(docSnap.data())))
     travelPlan.value = { id: docSnap.id, ...docSnap.data() };
    console.log('PLAN:', JSON.parse(JSON.stringify(travelPlan.value)))
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

function handleUpdatePlanItem({ dataPath, updatedData }) { 
  updateData(updatedData, dataPath);
}
async function deleteTravelPlan() { 
  await deletePlan();
  router.push('/');
}

// Title editing functions
const startEditingTitle = () => {
  isEditingTitle.value = true; // Set this first to trigger the input's rendering
 

  nextTick(() => {
    if (titleText.value) { // Now titleText.value will be the DOM element
      
      console.log('title', travelPlan.value.title) 
      titleText.value.value = travelPlan.value.title; // Set the input's value
      titleText.value.focus();
    }
  });
};

const finishEditingTitle = () => {  
  const newValue = titleText.value?.value.trim();
  if (travelPlan.value.title != newValue){
    travelPlan.value.title = newValue;
    handleUpdatePlanItem({dataPath: `title`, updatedData: newValue});
  }
  isEditingTitle.value = false;
};
const cancelEditingTitle = () => {
  isEditingTitle.value = false;
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
    const newTabName = editingTabName.value.trim();
    if (newTabName) {
      tabs.value[editingTabIndex.value].title = newTabName;
      handleUpdatePlanItem({dataPath: `tabs.${editingTabKey.value}`, updatedData: tabs.value[editingTabIndex.value]})
    }
    editingTabIndex.value = null; 
    editingTabKey.value = ''; 
  }
};

// Cancel editing tab name
const cancelEditingTab = () => {
  editingTabIndex.value = null; 
  editingTabKey.value = ''; 
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
    editingTabName.value = tabs.value[index].title;
    editingTabKey.value = tabs.value[index].key; 

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
   const existingKeys = new Set(Object.keys(travelPlan.value.tabs || {})); // Pass in travelPlan.value.tabs
  // if (travelPlan.value){
  // // travelPlan.value.tabs.forEach(tab => {
  // //   if (tab.key) {
  // //     existingKeys.add(tab.key);
  // //   }
  // // });
  // consolee.log('travelPlan', )

  // }
  console.log('key', existingKeys) 
  let newTabKey;
  let counter = 1;

  while (true) {
    newTabKey = `${type}_${counter}`;
    if (!existingKeys.has(newTabKey)) {
      break; // Found a unique key
    }
    counter++;
  }
  return newTabKey;
};


// Add a new tab
const addNewTab = (type = 'table') => {
  const newTabKey = generateUniqueTabKey(type);
  const newTabPosition = Object.values(tabs.value).reduce((maxPosition, tab) => {
  return Math.max(maxPosition, tab.tabPosition || 0); // Handle cases where tab.position might be undefined or 0
}, 0) + 1;
  let newValue;
  let newTitle;

  switch (type) {
    case 'table':
      newTitle = `Table ${newTabPosition}`;
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
      newValue = [];
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
  console.log('tab:', JSON.parse(JSON.stringify({dataPath: `tabs.${newTabKey}`, updatedData: newTabContent})))

  handleUpdatePlanItem({dataPath: `tabs.${newTabKey}`, updatedData: newTabContent})

};

const setTabVariant = (variant, index) => {
  try {
    if (index !== null) {
      const tab = tabs.value[index]; 
      tab.type = variant;

      // Close all menus
      dropdown.visible = false;
      showVariantSubMenu.value = false;
  
      if (variant !== 'table') { 
        tab.value = null;
      } else if (variant === 'table' && !tab.tabData) { 
        tab.value = {};
        tab.value.tableData = defaultTableData.value.map(item => ({ ...item }));
        tab.value.headers = [...defaultTableHeaders.value];
      }  
      console.log('tab', tab)
      handleUpdatePlanItem({dataPath: `tabs.${tabs.value[index].key}`, updatedData: tab}) 
    }
  } catch (error) {
    console.error('Error in setTabVariant:', error);
  }
};
 

// Delete a tab
const deleteTab = (index) => {
  const activeTab = tabs.value[index]; 
  const newTabs = {}, existingTabs = travelPlan.value.tabs;
  for (const key in travelPlan.value.tabs) {
    if (existingTabs.hasOwnProperty(key) && key !== activeTab.key) {
      newTabs[key] = existingTabs[key];
    }
  }
 
  console.log('tab', newTabs) 
  if (index !== null) {
    tabs.value.splice(index, 1);

    // If deleting the active tab or a tab before it, adjust activeTabIndex
    if (index <= activeTabIndex.value) {
      activeTabIndex.value = Math.max(0, activeTabIndex.value - 1);
    }
  }
    dropdown.visible = false; // Close dropdown after deleting 
  // console.log( 'aaa', JSON.parse(JSON.stringify({dataPath: `tabs`, updatedData: newTabs})))
  handleUpdatePlanItem({dataPath: `tabs`, updatedData: newTabs});
  // }
};
 
// =========== TAB FUNCTIONS END =============

</script>