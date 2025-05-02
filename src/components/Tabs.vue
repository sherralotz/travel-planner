<template>
    <div class="flex flex-col w-full relative">
<!-- //here -->
<div
        v-if="openTabMenuIndex !== null"
        class="absolute top-0 left-0 mt-1 w-32 bg-white shadow-lg rounded-md border border-gray-200 py-1 z-40"
        :style="{
          left: dropdownPosition.x + 'px',
          top: dropdownPosition.y + 'px',
        }"
      >
        <button
          class="block w-full text-left px-4 py-1 text-sm text-gray-700 hover:bg-gray-100"
          @click.stop="startEditingTab(index)"
        >
          Rename
        </button>
        <button
          class="block w-full text-left px-4 py-1 text-sm text-gray-700 hover:bg-gray-100"
          @click.stop="duplicateTab(index)"
        >
          Duplicate
        </button>
  
        <div class="relative">
          <button
            class="block w-full text-left px-4 py-1 text-sm text-gray-700 hover:bg-gray-100"
            @click.stop="toggleVariantSubMenu"
          >
            Variant
            <span class="float-right text-xs">▶</span>
          </button>
  
          <div
            v-if="showVariantSubMenu"
            class="absolute left-full top-0 ml-[-1px] w-32 bg-white shadow-lg rounded-md border border-gray-200 py-1 z-50"
            @click.stop
          >
            <button
              class="block w-full text-left px-4 py-1 text-sm text-gray-700 hover:bg-gray-100"
              @click="setTabVariant('table')"
            >
              Table
            </button>
            <button
              class="block w-full text-left px-4 py-1 text-sm text-gray-700 hover:bg-gray-100"
              @click="setTabVariant('checklist')"
            >
              Checklist
            </button>
            <button
              class="block w-full text-left px-4 py-1 text-sm text-gray-700 hover:bg-gray-100"
              @click="setTabVariant('notes')"
            >
              Notes
            </button>
          </div>
        </div>
  
        <button
          v-if="tabs.length > 1"
          class="block w-full text-left px-4 py-1 text-sm text-red-600 hover:bg-gray-100"
          @click.stop="deleteTab(index)"
        >
          Delete
        </button>
      </div>


      <div class="flex border-b border-gray-200 bg-gray-50 relative z-20">
        <div class="flex items-center overflow-x-auto flex-grow">
          <div
            v-for="(tab, index) in tabs"
            :key="index"
            class="flex items-center whitespace-nowrap relative"
          >
            <div
              :class="[
                'flex items-center px-4 pt-1.5 pb-2 border-r text-sm  cursor-pointer rounded-tr-xl rounded-tl-sm',
                activeTabIndex === index
                  ? 'bg-white border-t-3  font-bold border-t-red-400 border-r-gray-200'
                  : 'hover:bg-gray-100 font-medium border-t-2 border-gray-200',
              ]"
              @click="setActiveTab(index)"
            >
              <div class="flex items-center space-x-2">
                <div v-if="editingTabIndex === index">
                  <input
                    ref="editTabInput"
                    v-model="editingTabName"
                    class="border px-1 py-0.5 text-sm focus:outline-none focus:ring-1 focus:ring-red-400 w-24"
                    @blur="saveTabName"
                    @keyup.enter="saveTabName"
                    @keyup.esc="cancelEditingTab"
                  />
                </div>
                <span v-else>{{ tab.name }}</span>
  
                <div class="relative">
                  <button
                    class="text-gray-500 hover:text-gray-800 focus:outline-none cursor-pointer pl-1 pt-1.5"
                    @click.stop="toggleTabMenu(index, $event)" 
                  >
                  <FontAwesomeIcon :icon="faAngleDown" class="me-1"/> 
                  </button>
                </div>
              </div>
            </div>
          </div>
  
          <button
            class="flex items-center justify-center h-9 w-9 text-gray-500 hover:text-gray-700 hover:bg-gray-100"
            @click="addNewTab"
          >
          <FontAwesomeIcon :icon="faPlus" class="me-1"/> 
          </button>
        </div>
      </div>
  
      <div class="p-4 bg-white flex-grow relative z-10 ">
        <div v-for="(tab, index) in tabs" :key="`content-${index}`">
          <div v-show="activeTabIndex === index" class="h-full">
            <template v-if="tab.variant === 'table'">
              <Grid
                :title="tab.name"
                :initialData="tab.tableData"
                :initialHeaders="tab.tableHeaders"
                @update:data="updateTableData(index, $event)"
                @update:headers="updateTableHeaders(index, $event)"
              />
            </template>
            <template v-else-if="tab.variant === 'checklist'">
              <div>This is the checklist variant for {{ tab.name }}</div>
              <Checklist />
            </template>
            <template v-else-if="tab.variant === 'notes'">
              <div>This is the notes variant for {{ tab.name }}</div>
  
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
  import { ref, nextTick, onMounted, onBeforeUnmount, onUnmounted } from 'vue';
  import Checklist from './variants/Checklist.vue';
  import Notes from './variants/Notes.vue';
  import Grid from './variants/Grid.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPlus, faAngleDown } from '@fortawesome/free-solid-svg-icons';
  
  // Component state
  const tabs = ref([
    {
      name: 'Tab 1',
      content: '',
      variant: 'table',
      tableData: [
        {
          type: 'title',
          value: [
            [{ cellType: 'date', value: 'Day 1' }],
            [{ cellType: 'default', value: 'Travel Day' }],
            [{ cellType: 'note', value: 'Note test' },  
            { cellType: "link", value: "[Hotel California](https://maps.app.goo.gl/xdvwc5kk9BQ48tge7})" }
            ],
          ],
          style: 'bg-red-100',
        },
      ],
      tableHeaders: [
        { value: 'Date', type: 'date' },
        { value: 'Activity', type: 'text' },
        { value: 'Notes', type: 'text' },
      ],
    },
  ]);
  const activeTabIndex = ref(0);
  const openTabMenuIndex = ref(null);
  const editingTabIndex = ref(null);
  const editingTabName = ref('');
  const editTabInput = ref(null);
  const dropdownPosition = ref({ x: 0, y: 0 });
  const showVariantSubMenu = ref(false);
  // Add these variables to your reactive state
  const isTouch = ref(false);
  const justClosed = ref(false);
  
  // Default table headers
  const defaultTableHeaders = [
    { value: 'Date', type: 'date' },
    { value: 'Activity', type: 'text' },
    { value: 'Notes', type: 'text' },
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
  
  const toggleVariantSubMenu = (event) => {
    if (event) event.stopPropagation();
    showVariantSubMenu.value = !showVariantSubMenu.value;
  };
  
  const clickOutsideHandler = (event) => {
    if (openTabMenuIndex.value !== null) {
      openTabMenuIndex.value = null;
    }
  
    if (showVariantSubMenu.value) {
      showVariantSubMenu.value = false;
    }
  };
  
  onMounted(() => {
    document.addEventListener('click', clickOutsideHandler);
    // Detect if using a touch device
    if ('ontouchstart' in window) {
      isTouch.value = true;
    }
  });
  
  onBeforeUnmount(() => {
    document.removeEventListener('click', clickOutsideHandler);
  });
  
  onUnmounted(() => {
    document.removeEventListener('click', closeTabMenu);
  });
  
  // Set active tab
  const setActiveTab = (index) => {
    activeTabIndex.value = index;
  };
  
  // Toggle tab menu dropdown
  const toggleTabMenu = (index, event) => {
    openTabMenuIndex.value = index;
    const rect = event.target.getBoundingClientRect(); 
    dropdownPosition.value.x = rect.left - 15;
    dropdownPosition.value.y = rect.height + 12;
    showVariantSubMenu.value = false; // Close submenu when main menu opens
  };
  
  const closeTabMenu = () => {
    openTabMenuIndex.value = null;
  };
  
  const setTabVariant = (variant) => {
    try {
      if (openTabMenuIndex.value !== null) {
        const tab = tabs.value[openTabMenuIndex.value];
        tab.variant = variant;
  
        // Close all menus
        openTabMenuIndex.value = null;
        showVariantSubMenu.value = false;
  
        // The rest of your function remains the same
        if (variant !== 'table') {
          delete tab.tableData;
          delete tab.tableHeaders;
          tab.content = '';
        } else if (variant === 'table' && !tab.tableData) {
          tab.tableData = defaultTableData.map(item => ({...item}));
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
      tableData: defaultTableData.map(item => ({...item})), // Add default table data
      tableHeaders: [...defaultTableHeaders], // Add default table headers
    });
  
    // Set the new tab as active
    setActiveTab(tabs.value.length - 1);
  };
  
  // Start editing tab name
  const startEditingTab = () => {
    if (openTabMenuIndex.value !== null) {
      editingTabIndex.value = openTabMenuIndex.value;
      editingTabName.value = tabs.value[openTabMenuIndex.value].name;
      openTabMenuIndex.value = null;
  
      // Focus the input after rendering (access the first element of the ref array)
      nextTick(() => {
        setTimeout(() => {
          console.log('value', editTabInput.value);
          if (editTabInput.value && editTabInput.value.length > 0) {
            editTabInput.value[0].focus();
            editTabInput.value[0].select();
          } else {
            console.warn(
              'editTabInput ref is null or empty after nextTick and timeout.'
            );
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
  const duplicateTab = () => {
    if (openTabMenuIndex.value !== null) {
      const index = openTabMenuIndex.value;
      const originalTab = tabs.value[index];
      const newTabName = `${originalTab.name} (copy)`;
  
      // Deep copy the tableData and tableHeaders
      const newTableData = originalTab.tableData
        ? originalTab.tableData.map((item) => {
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
        tableData: newTableData, // Use the deep copied data
        tableHeaders: newTableHeaders, // Use the deep copied headers
      });
  
      // Set the new tab as active
      setActiveTab(index + 1);
      openTabMenuIndex.value = null;
    }
  };
  
  // Delete a tab
  const deleteTab = () => {
    if (openTabMenuIndex.value !== null) {
      const index = openTabMenuIndex.value;
      tabs.value.splice(index, 1);
  
      // If deleting the active tab or a tab before it, adjust activeTabIndex
      if (index <= activeTabIndex.value) {
        activeTabIndex.value = Math.max(0, activeTabIndex.value - 1);
      }
  
      openTabMenuIndex.value = null;
    }
  };
  
  // Update table data for a specific tab
  const updateTableData = (index, newData) => {
    if (tabs.value[index] && tabs.value[index].variant === 'table') {
      tabs.value[index].tableData = newData;
    }
  };
  
  // Update table headers for a specific tab
  const updateTableHeaders = (index, newHeaders) => {
    if (tabs.value[index] && tabs.value[index].variant === 'table') {
      tabs.value[index].tableHeaders = newHeaders;
    }
  };
  </script>
  