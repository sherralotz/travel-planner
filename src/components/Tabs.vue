<template>
  <div class="flex flex-col w-full relative">
    <!-- Dropdown menu -->
    <div v-if="dropdown.visible"
      class="dropdown-container absolute top-0 left-0 mt-1 w-32 bg-white shadow-lg rounded-md border border-gray-200 py-1 z-40" :style="{
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
                <input ref="editTabInput" v-model="editingTabName"
                  class="border px-1 py-0.5 text-sm focus:outline-none focus:ring-1 focus:ring-red-400 w-24"
                  @blur="saveTabName" @keyup.enter="saveTabName" @keyup.esc="cancelEditingTab" />
              </div>
              <span v-else>{{ tab.name }}</span>

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
          @click="addNewTab">
          <FontAwesomeIcon :icon="faPlus" class="me-1" />
        </button>
      </div>
    </div>

    <div class="bg-white flex-grow relative z-10 ">
      <div v-for="(tab, index) in tabs" :key="`content-${index}`">
        <div v-show="activeTabIndex === index" class="h-full">
          <template v-if="tab.variant === 'table'">
            <Grid :title="tab.name" :initialData="tab.tabData" :initialHeaders="tab.tableHeaders"
              @update:data="updateTableData(index, $event)" @update:headers="updateTableHeaders(index, $event)" />
          </template>
          <template v-else-if="tab.variant === 'checklist'">
            <!-- <div>This is the checklist variant for {{ tab.name }}</div> -->
            <Checklist />
          </template>
          <template v-else-if="tab.variant === 'notes'">
            <!-- <div>This is the notes variant for {{ tab.name }}</div> -->

            <Notes />
          </template> 
          <template v-else>
            {{ tab.content || `Content for ${tab.name}` }}
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref, reactive, nextTick, onMounted, onBeforeUnmount, onUnmounted } from 'vue';
import Checklist from './variants/Checklist.vue';
import Notes from './variants/Notes.vue'; 
import Grid from './variants/Grid.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPlus, faAngleDown } from '@fortawesome/free-solid-svg-icons';
  
// Component state
const tabs = ref([
{
    name: 'Notes',
    content: '',
    variant: 'notes' 
  },
{
    name: 'Check',
    content: '',
    variant: 'checklist' 
  }, 
  {
    name: 'Sheet',
    content: '',
    variant: 'table',
    tabData: [
      {
        type: 'title',
        value: [
          [{ cellType: 'date', value: 'Mon, Jan 22' }],
          [{ cellType: 'default', value: '' }],
          [{ cellType: 'note', value: '' }],
        ],
        style: 'bg-red-100',
      },
      {
        type: 'default',
        value: [
          [{ cellType: 'date', value: '8:00 AM' }],
          [{ cellType: 'default', value: 'Breakfast' }],
          [{ cellType: 'note', value: '' }],
        ],
        style: 'bg-red-100',
      },
    ],
    tableHeaders: [
      { value: 'Date', type: 'date' },
      { value: 'Activity', type: 'text' },
      { value: 'Notes', type: 'notes' },
    ],
  },
]);

const dropdown = reactive({
  visible: false,
  top: 0,
  left: 0,
  tabIndex: null
}); 
const activeTabIndex = ref(0);
const editingTabIndex = ref(null);
const editingTabName = ref('');
const editTabInput = ref(null);
const showVariantSubMenu = ref(false);
// Add these variables to your reactive state
const isTouch = ref(false);

// Default table headers
const defaultTableHeaders = [
  { value: 'Date', type: 'date' },
  { value: 'Activity', type: 'text' },
  { value: 'Notes', type: 'notes' },
];
// Default table data (single empty row)
const defaultTableData = [
  {
    type: 'title',
    value: [
      [{ cellType: 'date', value: '' }],
      [{ cellType: 'default', value: '' }],
      [{ cellType: 'note', value: '' }, { cellType: 'link', value: '' }],
    ],
    style: '',
  },
];

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

onMounted(() => {
  // Add event listeners for clicks outside and window resize
  document.addEventListener('click', handleClickOutside);
  window.addEventListener('resize', handleResize);
  
  // Detect if using a touch device
  if ('ontouchstart' in window) {
    isTouch.value = true;
  }
});

onBeforeUnmount(() => {
  // Remove event listeners
  document.removeEventListener('click', handleClickOutside);
  window.removeEventListener('resize', handleResize);
});

// Set active tab
const setActiveTab = (index) => {
  activeTabIndex.value = index;
  // Close dropdown when changing tabs
  dropdown.visible = false;
  showVariantSubMenu.value = false;
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
        tab.tabData = defaultTableData.map(item => ({...item}));
        tab.tableHeaders = [...defaultTableHeaders];
      }
    }
  } catch (error) {
    console.error('Error in setTabVariant:', error);
  }
};

// Add a new tab
const addNewTab = () => {
  const newTabIndex = tabs.value.length + 1;
  tabs.value.push({
    name: `Tab ${newTabIndex}`,
    variant: 'table', // Set the variant to 'table' by default
    content: '',
    tabData: defaultTableData.map(item => ({...item})), // Add default table data
    tableHeaders: [...defaultTableHeaders], // Add default table headers
  });

  // Set the new tab as active
  setActiveTab(tabs.value.length - 1);
};

// Start editing tab name
const startEditingTab = (index) => {
  if (index !== null) {
    editingTabIndex.value = index;
    editingTabName.value = tabs.value[index].name;
    dropdown.visible = false; // Close dropdown when starting to edit

    // Focus the input after rendering
    nextTick(() => {
      setTimeout(() => {
        if (editTabInput.value) {
          editTabInput.value.focus();
          editTabInput.value.select();
        }
      }, 50); // Small delay in milliseconds
    });
  }
};

// Save tab name after editing
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

// Duplicate a tab
const duplicateTab = (index) => {
  if (index !== null) {
    const originalTab = tabs.value[index];
    const newTabName = `${originalTab.name} (copy)`;

    // Deep copy the tabData and tableHeaders
    const newTableData = originalTab.tabData
      ? originalTab.tabData.map((item) => {
          if(item.value) {
            return {
              ...item,
              value: item.value.map((row) =>
                row.map((cell) => ({ ...cell }))
              ),
            };
          }
          return {...item}
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
</script>