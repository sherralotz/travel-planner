<template>
  <div class="grid-view flex flex-col w-full h-[calc(100dvh-140px)]">
    <div class="flex justify-between items-center mb-1 px-2 py-2 ">
      <h2 class="text-xl font-bold"> </h2>

      <div class="flex  overflow-hidden text-sm ">
        <button @click="changeViewMode('grid')" :class="[
          'px-2 py-1 flex items-center w-16 justify-center transition-colors h-7 ',
          viewMode === 'grid'
            ? 'bg-red-500 text-white border border-red-700  rounded-tl-lg rounded-bl-lg'
            : 'bg-gray-100 hover:bg-gray-200 border border-gray-400 rounded-tl-lg rounded-bl-lg',
        ]">
          <FontAwesomeIcon :icon="faTable" class="me-1" />
          Grid
        </button>
        <button @click="changeViewMode('list')" :class="[
          'px-4 py-2 flex items-center w-16 justify-center transition-colors h-7',
          viewMode === 'list'
            ? 'bg-red-500 text-white border border-red-700 rounded-tr-lg rounded-br-lg'
            : 'bg-gray-100 hover:bg-gray-200 border border-gray-400 rounded-tr-lg rounded-br-lg',
        ]">
          <FontAwesomeIcon :icon="faListUl" class="me-1" />
          List
        </button>
      </div>
    </div>

    <div class="flex-grow overflow-hidden">
      <div v-if="viewMode === 'grid'" class="overflow-hidden w-[102%] sm:w-[101%]">

        <div class="w-full overflow-hidden flex flex-col">
          <!-- Table header -->
          <div class=" me-2">
            <table class="min-w-full border-collapse text-sm w-full table-fixed">
              <thead class="bg-white">
                <tr>
                  <th v-for="(header, colIndex) in headers" :key="colIndex" class="  text-start"
                    :class="{ 'w-1/4': colIndex == 0, ' w-1/4': colIndex === 2 }">
                    <div class="mx-2 my-2"> {{ header.value }}</div>
                  </th>
                  <th class="w-8 min-w-8 extra-header"> </th>
                </tr>
              </thead>
            </table>
          </div>
          <!-- Scrollable tbody with auto height until max -->
          <div class="row-body overflow-y-scroll w-full max-h-[calc(100dvh-260px)]" ref="gridBody">
            <table class="min-w-full border-collapse text-sm w-full table-fixed">
              <tbody>
                <tr v-for="(row, rowIndex) in tabData" :key="rowIndex" class=" w-full" :class="[
                      row.type === 'title' ? 'bg-gray-100' : 'bg-white',
                    ]"> 
                  <template v-for="(cell, columnIndex) in row.value" :key="columnIndex"> 
                    <td class="border border-gray-200  row-item h-auto data-row"
                      :class=" { 'w-1/4': columnIndex === 0,' w-1/4': columnIndex === 2 }"> 
                      
                      <!------------------------ COLUMN: DATE --------------------------->
                      <template v-if="(cell.cellType === 'date')">
                        <div class="item-container">
                          <div contenteditable="true"
                            class="outline-none focus:ring-1 focus:ring-gray-300 p-1 flex flex-col gap-1 h-full w-full min-h-10"
                            @blur="updateCell(rowIndex, columnIndex, $event)"
                            @keydown="handleKeyDown($event, rowIndex, columnIndex)"
                            :ref="(el) => setCellRef(el, rowIndex, columnIndex)"
                            @paste="handlePaste($event, rowIndex, columnIndex)"
                            :class="{'font-bold':row.type === 'title', 'text-right':row.type !== 'title'}"> 
                            <!-- COLUMN: DATE  -->
                            {{ cell.value }} 
                          </div>
                        </div>
                      </template>

                       <!------------------------ COLUMN: ACTIVITY --------------------------->
                       <template v-else-if="(cell.cellType === 'default')">
                          <div class="item-container"> 
                          <div contenteditable="true"
                            class="outline-none focus:ring-1 focus:ring-gray-300 p-1 flex flex-col gap-1 h-full w-full px-2 min-h-10"
                            @blur="updateCell(rowIndex, columnIndex, $event)"
                            @keydown="handleKeyDown($event, rowIndex, columnIndex)"
                            :ref="(el) => setCellRef(el, rowIndex, columnIndex)"> 
                               {{ cell.value }}  
                          </div>
                          </div>
                        </template>

                         <!------------------------ COLUMN: NOTES --------------------------->
                         <template v-else-if="(cell.cellType === 'note' )"> 
                          <div class="item-container"> 
                            <div contenteditable="true"
                              class="test outline-none focus:ring-1 focus:ring-gray-300 p-1 flex flex-col gap-1 w-full "
                              @blur="updateCell(rowIndex, columnIndex, $event)"
                              @keydown="handleKeyDown($event, rowIndex, columnIndex)"
                              :ref="(el) => setCellRef(el, rowIndex, columnIndex)"
                              :class="{'min-h-[10px]': typeof cell.value === 'object' && cell.value.links.length > 0, 'min-h-10': (typeof cell.value === 'string' || (typeof cell.value === 'object' && cell.value.links.length === 0))}"
                              >
                              <!-- COLUMN: NOTES | ROW: TITLE --> 
                                {{ cell.value?.text }} 
                            </div>
                          </div>

                          <div class="m-1" v-if="cell.value && cell.value.links"> 
                            <template v-for="(linkItem, linkIndex) in cell.value.links" :key="linkIndex">
                              <span class="bg-gray-300 px-2 py-1 me-1 w-full rounded-xl text-[11px] ">
                                <a :href="linkItem.url" target="_blank" rel="noopener noreferrer"
                                  class="text-gray-600 hover:text-blue-800 ">
                                  <!-- COLUMN: NOTES | ROW: TITLE | CELLTYPE !== NOTE -->
                                  <FontAwesomeIcon size="xs" v-if="isMapsLink(linkItem.url)" :icon="faLocationDot" />
                                  <FontAwesomeIcon v-else :icon="faArrowUpRightFromSquare" />
                                   {{linkItem.label}}
                                </a>
                              </span>
                            </template> 
                            </div>
                        </template> 

                      <template v-else>
                        <pre> {{ cell }}</pre>
                      </template> 
                    </td>
                  </template>

                  <!------------------------ COLUMN: OPTIONS --------------------------->
                  <td class="border p-2 relative border-gray-200 row-item h-auto w-8 min-w-8">
                    <div class="flex">
                      <button @click="toggleOptions(rowIndex, $event)"
                        class="text-gray-500 hover:text-gray-800 focus:outline-none w-5">
                        <FontAwesomeIcon :icon="faEllipsisVertical" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Table footer -->

          <div class="me-2">
            <table class="min-w-full border-collapse text-sm w-full table-fixed border border-gray-200 border-t-0">
              <tfoot>
                <tr>
                  <td :colspan="headers.length + 1" class="py-2 bg-gray-100 space-x-2 px-4 row-item h-auto">
                    <button class="bg-gray-100 text-[11px] text-gray-600 focus:outline-none"
                      @click="addRow(tabData.length - 1)">
                      <FontAwesomeIcon :icon="faPlus" class="me-1" />
                      Add New Row
                    </button>

                    <button class="bg-gray-100 text-[11px] text-gray-600 focus:outline-none"
                      @click="addTitleRow(tabData.length - 1)">
                      <FontAwesomeIcon :icon="faPlus" class="me-1" />
                      Add New Title Row
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>


      </div>

      <div v-else class="h-full w-full">
        <ListView :data="tabData" :headers="headers" />
      </div>
    </div>

    <!-- Detached Dropdown -->
    <div v-if="dropdown.visible" :style="{
        position: 'fixed',
        top: dropdown.top + 'px',
        left: dropdown.left + 'px',
        zIndex: 1000
      }"
      class="dropdown-container w-32 rounded-md shadow-lg bg-white ring-1 ring-gray-300 ring-opacity-5 focus:outline-none py-1 text-[11px]"
      role="menu" aria-orientation="vertical">
      <button @click="addRow(dropdown.rowIndex)"
        class="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">
        Add Row Below
      </button>
      <button @click="addTitleRow(dropdown.rowIndex)"
        class="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">
        Add Title Row Below
      </button>
      <button @click="openLinkModal(dropdown.rowIndex)"
        class="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">
        Add Link
      </button>
      <button @click="toggleRowType(dropdown.rowIndex)"
        class="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">
        {{ tabData[dropdown.rowIndex]?.type === 'title' ? 'Set to Default' : 'Set to Title' }}
      </button>
      <button @click="deleteRow(dropdown.rowIndex)"
        class="block w-full text-left px-4 py-2 text-red-700 hover:bg-red-100" role="menuitem">
        Delete Row
      </button>
    </div>

    <LinkModal :is-visible="isLinkModalVisible" title="Add Link" @save="saveLinkToNotes"
      @close="isLinkModalVisible = false" />
  </div>
</template>

<script setup>
import { ref, reactive, watch, onMounted, onUnmounted, nextTick } from 'vue';
import ListView from './ListView.vue';
import LinkModal from '../common/LinkModal.vue';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPlus, faEllipsisVertical, faTable, faListUl, faLocationDot, faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';


const props = defineProps({
  title: {
    type: String,
    default: 'Data Grid',
  },
  initialData: {
    type: Array,
    default: () => [],
  },
  tabKey: {
    type: String,
    required: true,
    default: '',
  },
  initialHeaders: {
    type: Array,
    default: () => [
      { value: 'Date', type: 'date' },
      { value: 'Activity', type: 'text' },
      { value: 'Notes', type: 'text' },
    ],
  },
});

const emit = defineEmits(['update:data', 'update:headers']);

// Component state
const viewMode = ref('grid');
const tabData = ref([...props.initialData]);
const headers = ref([...props.initialHeaders]);
const openOptionsIndex = ref(null);
const cellRefs = ref({}); // To store refs to cells
const isLinkModalVisible = ref(false);
const currentLinkRowIndex = ref(null);
const gridBody = ref(null);
const dropdown = reactive({
  visible: false,
  top: 0,
  left: 0,
  rowIndex: null
});

const openLinkModal = (clickedRowIndex) => {
  currentLinkRowIndex.value = clickedRowIndex;
  isLinkModalVisible.value = true; // Fix: use .value
  openOptionsIndex.value = null;
  dropdown.visible = false;
};

const emitChange = (newData) => {  
   const dataPath = `tabs.${props.tabKey}.value.tableData`;  
   emit('update:data', { dataPath, updatedData: newData }); 
};

// Watch for changes in data props
watch(
  () => props.initialHeaders,
  (newHeaders) => {
    headers.value = [...newHeaders];
  },
  { deep: true }
);

// Watch for changes in our local data and emit updates
watch(
  tabData,
  (newData) => { 
    emitChange(newData);
  },
  { deep: true }
);

watch(
  headers,
  (newHeaders) => {
    emit('update:headers', newHeaders);
  },
  { deep: true }
);

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
  // Close the dropdown if clicking outside
  if (dropdown.visible) {
    // Check if click is outside the dropdown
    const dropdownElement = document.querySelector('.dropdown-container');
    if (dropdownElement && !dropdownElement.contains(event.target)) {
      dropdown.visible = false; 
    }
  }
};

// Close dropdown when resizing the window
const handleResize = () => {
  if (dropdown.visible) {
    dropdown.visible = false; 
  }
};
 
// Function to update cell data when edited
const updateCell = (rowIndex, columnIndex, event) => {
  // console.log('updateCell', columnIndex)
  // Get the new value from the contenteditable element
  const newValue = event.target.textContent.trim();
  // console.log('newValue', newValue)
  // Create a copy of the current data to maintain reactivity
  const newTableData = [...tabData.value];
  const row = newTableData[rowIndex];
  
  // Handle different row types (title row vs regular row)
  if (row.type === 'title') {
    // Update title row
    row.value[columnIndex].value = newValue; 
  } else {
    // console.log('hello', columnIndex)
    // For regular rows, check if we need to update specific cellType properties
    if (columnIndex === 2) { // Notes column
      // If the cell has a link structure
      if (typeof row.value[columnIndex].value === "string" && row.value[columnIndex].value.trim().length === 0){
        //RESET
        row.value[columnIndex].value = {};
        row.value[columnIndex].value.text = newValue;
        row.value[columnIndex].value.links = [];  
      } else if (typeof row.value[columnIndex].value === "object"){
        row.value[columnIndex].value.text = newValue; 
      }
    } else {
      // For regular cells
      row.value[columnIndex].value = newValue;
    }
  }
  
  // Update the reference to trigger reactivity
  tabData.value = newTableData;
};

const handlePaste = (event, rowIndex, columnIndex) => {
  event.preventDefault();
  const text = (event.clipboardData || window.clipboardData).getData('text');

  // Create a synthetic event object that mimics the structure
  // expected by your updateCell function (specifically, the 'target' property
  // with a 'textContent' property).
  const syntheticEvent = {
    target: {
      textContent: text,
    },
  };

  // Call the existing updateCell function with the synthetic event
  updateCell(rowIndex, columnIndex, syntheticEvent);
};

// Function to add a new default row at the specified index
const addRow = (index) => {
  // Create new row with default empty values
  const newRow = {
    type: "default",
    value: headers.value.map(header => {
      // Create appropriate cell type based on header
      if (header.type === 'date') {
        return {
          cellType: "date",
          value: ""
        };
      } else if (header.value === 'Notes') {
        return {
          cellType: "note",
          value: ""
        };
      } else {
        return {
          cellType: "default",
          value: ""
        };
      }
    })
  };
  
  // Create a copy of the data and insert the new row
  const newTableData = [...tabData.value];
  newTableData.splice(index + 1, 0, newRow);
  tabData.value = newTableData;
  
  // Focus on the first cell of the new row after rendering
  nextTick(() => {
    if (cellRefs.value[index + 1] && cellRefs.value[index + 1][0]) {
      cellRefs.value[index + 1][0].focus();
    }
  });
  
  // Hide dropdown if it was open
  dropdown.visible = false;
};

// Function to add a new title row at the specified index
const addTitleRow = (index) => {
  // Create new title row with empty values
  const newTitleRow = {
    type: "title",
    value: headers.value.map(header => {
      // Create appropriate cell type based on header
      if (header.type === 'date') {
        return {
          cellType: "date",
          value: ""
        };
      } else if (header.value === 'Notes') {
        return {
          cellType: "note",
          value: ""
        };
      } else {
        return {
          cellType: "default",
          value: ""
        };
      }
    })
  };
  
  // Create a copy of the data and insert the new title row
  const newTableData = [...tabData.value];
  newTableData.splice(index + 1, 0, newTitleRow);
  tabData.value = newTableData;
  
  // Focus on the first cell of the new row after rendering
  nextTick(() => {
    if (cellRefs.value[index + 1] && cellRefs.value[index + 1][0]) {
      cellRefs.value[index + 1][0].focus();
    }
  });
  
  // Hide dropdown if it was open
  dropdown.visible = false;
};

const toggleOptions = (rowIndex, event) => {
  event.stopPropagation();
  const buttonRect = event.target.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const dropdownHeight = 187;  
  const verticalOffset = 4;

  if (dropdown.visible && dropdown.rowIndex === rowIndex) {
    dropdown.visible = false;
  } else {
    dropdown.visible = true;
    dropdown.rowIndex = rowIndex;

    let idealTop = buttonRect.bottom + verticalOffset;
    const idealLeft = buttonRect.left - 120; // Keep your existing left calculation

    // Adjust vertical position if it overflows the bottom edge
    if (idealTop + dropdownHeight > viewportHeight) {
      idealTop = buttonRect.top - dropdownHeight - verticalOffset;
      if (idealTop < 0) {
        idealTop = verticalOffset; // Fallback to top if still overflowing
      }
    }

    dropdown.left = idealLeft;
    dropdown.top = idealTop;
  }
};

// Delete row at the specified index
const deleteRow = (index) => {
  const newTableData = [...tabData.value];
  newTableData.splice(index, 1);
  tabData.value = newTableData;
  openOptionsIndex.value = null;
  dropdown.visible = false;
};

const toggleRowType = (rowIndex) => {
  const newTableData = [...tabData.value];
  const currentRow = newTableData[rowIndex]; 

   if (currentRow.type === 'title') {
    currentRow.type = 'default'; 
  } else { 
    currentRow.type = 'title'; 
  }

  tabData.value = newTableData;
  openOptionsIndex.value = null;
};

const handleKeyDown = (event, rowIndex, cellIndex) => {
  if (event.key === 'Tab' && cellIndex === headers.value.length - 1) {
    event.preventDefault();
    addRow(rowIndex);
  }
};

const setCellRef = (el, rowIndex, cellIndex) => {
  if (!cellRefs.value[rowIndex]) { 
    cellRefs.value[rowIndex] = []; 
  } 
  cellRefs.value[rowIndex][cellIndex] = el;
};

// Function to format cell value based on its type
const formatCellValue = (value, type) => {
  if (type === 'date') {
    return formatDate(value);
  } else {
    return value;
  }
};

// Function to format date
const formatDate = (dateString) => {
  if (!dateString) return '';
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return dateString; // Return original if invalid
    }
    return format(date, 'Mon, Jan dd');
  } catch {
    return dateString;
  }
};

// Function to determine if a cell value is a link
const isLink = (value) => {
  return (
    typeof value === 'string' &&
    (value.startsWith('http://') ||
      value.startsWith('https://') ||
      value.startsWith('maps:') ||
      /\[.*?\]\(.*?\)/.test(value)) // detect [label](url)
  );
};

// Function to extract the URL from the cell value
const getLinkUrl = (value) => {
  if (typeof value === 'string') {
    if (value.startsWith('maps:')) {
      return value;
    }
    const match = value.match(/\[(.*?)\]\((.*?)\)/);
    if (match) {
      return match[2];
    }
    // If it looks like a URL, return as is
    if (value.startsWith('http://') || value.startsWith('https://')) {
      return value;
    }
  }
  return '';
};

// Function to extract the label from the cell value
const getLinkLabel = (value) => { 
  if (typeof value === 'string') {
    if (value.startsWith('maps:')) {
      return 'Location';
    }
    const match = value.match(/\[(.*?)\]\((.*?)\)/);
    if (match) {
      return match[1];
    }
    if (value.startsWith('http://') || value.startsWith('https://')) {
      try {
        return new URL(value).hostname; // show domain
      } catch {
        return value;
      }
    }
  }
  return '';
};

// Function to determine if it is a maps link
const isMapsLink = (value) => {
  return typeof value === 'string' && value.includes('maps');
};

const saveLinkToNotes = (linkData) => {  
  if (currentLinkRowIndex.value !== null) {
    // const linkText = `[${linkData.label}](${linkData.url})`;
    const linkObject = {label: linkData.label, url: linkData.url}
    const rowIndex = currentLinkRowIndex.value;
    const notesColumnIndex = headers.value.findIndex(
      (header) => header.value === 'Notes'
    );

    if (notesColumnIndex !== -1) {
      const newTableData = [...tabData.value];  
      if (newTableData[rowIndex].value.length){
        const notesColumn = newTableData[rowIndex].value[2]; 
        if (typeof notesColumn.value === 'string' && notesColumn.value.trim().length === 0){
          notesColumn.value = {};
          notesColumn.value.text = ""; 
          notesColumn.value.links = [linkObject];  
        } else if (typeof notesColumn.value === "object" && (typeof notesColumn.value.links === "object" || typeof notesColumn.value.links === "array") ){ 
       
          notesColumn.value.links.push(linkObject); 
        } 
        
      } 
    } else {
      console.warn('The "Notes" column was not found.');
    }
    currentLinkRowIndex.value = null;
  }
  isLinkModalVisible.value = false;
};

const changeViewMode = (type) =>{
  viewMode.value = type;
  handleClickOutside();
}

// Initialize with default data if empty
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
  window.addEventListener('resize', handleResize); 
  if (gridBody.value) {
    gridBody.value.addEventListener('scroll', handleScroll);
  }
});

onUnmounted(() => {
  if (gridBody.value) {
    gridBody.value.removeEventListener('scroll', handleScroll);
  }
});

const handleScroll = () => { 
  dropdown.visible = false;
};
</script>

<style scoped>
.row-body::-webkit-scrollbar {
  width: calc(var(--spacing) * 2); /* Or any other size you prefer */
} 
 
.row-body:-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.5); /* Or any color */
  border-radius: 20px; /* Optional: rounded corners */
  border: transparent;
}  
</style>
