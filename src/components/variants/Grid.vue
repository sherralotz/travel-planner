<template>
  <div class="flex flex-col w-full h-[calc(100dvh-150px)]">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-bold">{{ title }}</h2>

      <div class="flex border rounded-lg overflow-hidden">
        <button
          @click="viewMode = 'grid'"
          :class="[
            'px-4 py-2 flex items-center justify-center transition-colors',
            viewMode === 'grid'
              ? 'bg-red-500 text-white'
              : 'bg-gray-100 hover:bg-gray-200',
          ]"
        > 
        <FontAwesomeIcon :icon="faTable" class="me-1"/>
          Grid
        </button>
        <button
          @click="viewMode = 'list'"
          :class="[
            'px-4 py-2 flex items-center justify-center transition-colors',
            viewMode === 'list'
              ? 'bg-red-500 text-white'
              : 'bg-gray-100 hover:bg-gray-200',
          ]"
        > 
        <FontAwesomeIcon :icon="faListUl" class="me-1" />
          List
        </button>
      </div>
    </div>

    <div class="flex-grow overflow-auto">
      <div v-if="viewMode === 'grid'" class="w-full h-full">
        <!-- <p>Table Data (for inspection): {{ tableData }}</p> -->

        <table class="min-w-full border-collapse text-sm">
          <thead>
            <tr>
              <th
                v-for="(header, colIndex) in headers"
                :key="colIndex"
                class="px-4 py-2 bg-white"
              >
                {{ header.value }}
              </th>
              <th class="w-12 bg-white"> </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, rowIndex) in tableData" :key="rowIndex" :class="[
                row.type === 'title' ? 'bg-gray-100' : 'bg-white',
              ]">
              <td
                v-for="(cell, cellIndex) in row.value"
                :key="cellIndex"
                class="border p-2 border-gray-200"
              >     
              <!-- <p>CELL:{{ cellIndex }} | ROW:{{ rowIndex }} | #:{{ cell.length }}  </p> 
              <p> {{ cell }} </p> -->


                <div v-if="cell.length > 1"> 
                  <div v-for="(noteItem, noteIndex) in cell" :key="noteIndex"> 
                    <div v-if="noteItem.cellType === 'note'">
                      <div 
                        contenteditable="true"
                        class="outline-none focus:ring-1 focus:ring-red-400 p-1 flex flex-col gap-1"
                        @blur="updateCell(rowIndex, cellIndex, noteIndex, $event)"
                        @keydown="handleKeyDown($event, rowIndex, cellIndex)"
                        :ref="(el) => setCellRef(el, rowIndex, cellIndex)">
                        {{noteItem.value}}
                      </div>
                    </div>
                    <small v-else class="bg-gray-300 px-2 py-1 w-full rounded-xl text-[11px]">  
                      <a
                      :href="getLinkUrl(noteItem.value)"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-gray-600 hover:text-blue-800 "
                    >
 
                      <FontAwesomeIcon size="xs" v-if="isMapsLink(noteItem.value)" :icon="faLocationDot"  />
                      <FontAwesomeIcon v-else :icon="faArrowUpRightFromSquare" />
                       
                      {{ getLinkLabel(noteItem.value) }}
                    </a>
                    </small> 
                  </div>
                </div>

                <div v-else>  
                  <div v-for="(noteItem, noteIndex) in cell" :key="noteIndex">
                    <div 
                  contenteditable="true"
                  class="outline-none focus:ring-1 focus:ring-red-400 p-1 flex flex-col gap-1"
                  @blur="updateCell(rowIndex, cellIndex, noteIndex, $event)"
                  @keydown="handleKeyDown($event, rowIndex, cellIndex)"
                  :ref="(el) => setCellRef(el, rowIndex, cellIndex)"
                >
                    {{noteItem.value}}
                  </div>
                  </div>
                </div> 
              </td>

              
              <td class="border p-2 relative border-gray-200">
                <button
                  @click="toggleOptions(rowIndex)"
                  class="text-gray-500 hover:text-gray-800 focus:outline-none"
                >
                <FontAwesomeIcon :icon="faEllipsisVertical" />
                </button>
                <div
                  v-if="openOptionsIndex === rowIndex"
                  class="absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                >
                  <div
                    class="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu-button"
                  >
                    <button
                      @click="addRow(rowIndex)"
                      class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Add Row Below
                    </button>
                    <button
                      @click="addTitleRow(rowIndex)"
                      class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Add Title Row Below
                    </button>
                    <button
                      @click="openLinkModal(rowIndex)"
                      class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Add Link
                    </button>
                    <button
                      @click="deleteRow(rowIndex)"
                      class="block w-full text-left px-4 py-2 text-sm text-red-700 hover:bg-red-100"
                      role="menuitem"
                    >
                      Delete Row
                    </button>
                    <button
                      @click="toggleRowType(rowIndex)"
                      class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      {{
                        tableData[rowIndex].type === 'title'
                          ? 'Set to Default'
                          : 'Set to Title'
                      }}
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td
                :colspan="headers.length + 1"
                class="py-2 bg-gray-100 border-t text-right space-x-2 px-4"
              >
                <button
                  @click="addRow(tableData.length - 1)"
                  class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none"
                >
                  Add New Row
                </button>
                <button
                  @click="addTitleRow(tableData.length - 1)"
                  class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                >
                  Add New Title Row
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div v-else class="h-full w-full">
        <ListView :data="tableData" :headers="headers" />
      </div>
    </div>

    <LinkModal
      :is-visible="isLinkModalVisible"
      title="Add Link"
      @save="saveLinkToNotes"
      @close="isLinkModalVisible = false"
    />
  </div>
</template>

<script setup>
import { ref, watch, onMounted, nextTick } from 'vue';
import ListView from './ListView.vue';
import LinkModal from '../common/LinkModal.vue';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEllipsisVertical, faTable, faListUl, faLocationDot, faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
const props = defineProps({
  title: {
    type: String,
    default: 'Data Grid',
  },
  initialData: {
    type: Array,
    default: () => [],
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
const tableData = ref([...props.initialData]);
const headers = ref([...props.initialHeaders]);
const openOptionsIndex = ref(null);
const cellRefs = ref({}); // To store refs to cells
const isLinkModalVisible = ref(false);
const currentLinkRowIndex = ref(null);

const openLinkModal = (clickedRowIndex) => {
  currentLinkRowIndex.value = clickedRowIndex;
  isLinkModalVisible.value = true; // Fix: use .value
  openOptionsIndex.value = null;
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
  tableData,
  (newData) => { 
    // console.log('Changed:', JSON.parse(JSON.stringify(newData))) 
    emit('update:data', newData);
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

// Function to update cell content
const updateCell = (rowIndex, columnIndex, noteIndex, event) => {
  const latestTextValue = event.target.innerText;
  const clonedOriginalData = [...tableData.value]; 
  const modifiedCell = clonedOriginalData[rowIndex].value[columnIndex][noteIndex];
  modifiedCell.value = latestTextValue; 
};

// Function to toggle the options dropdown
const toggleOptions = (index) => {
  openOptionsIndex.value = openOptionsIndex.value === index ? null : index;
};

// Add a new row after the specified index
const addRow = (afterIndex) => {
  const newRegularRow = {
    type: 'default',
    value: [
            [{ cellType: 'date', value: 'Day 2' }],
            [{ cellType: 'default', value: 'Rest Day' }],
            [{ cellType: 'note', value: 'Note test 2' },
            { cellType: "link", value: "[Hotel California](https://maps.app.goo.gl/xdvwc5kk9BQ48tge7})" }] 
          ]
  }; 
  const newTableData = [...tableData.value];
  newTableData.splice(afterIndex + 1, 0, newRegularRow); 
  tableData.value = newTableData;
  openOptionsIndex.value = null;
  nextTick(() => {
    if (cellRefs.value[afterIndex + 1] && cellRefs.value[afterIndex + 1][0]) {
      cellRefs.value[afterIndex + 1][0].focus();
    }
  });
};

// Add a title row after the specified index
const addTitleRow = (afterIndex) => {
  const newTitleRow = {
    type: 'title', 
    value: [
            [{ cellType: 'date', value: 'Day 2' }],
            [{ cellType: 'default', value: 'Rest Day' }],
            [{ cellType: 'note', value: 'Note test 2' },
            { cellType: "link", value: "[Hotel California](https://maps.app.goo.gl/xdvwc5kk9BQ48tge7})" }
            ] 
          ]
  };
  const newTableData = [...tableData.value];
  newTableData.splice(afterIndex + 1, 0, newTitleRow);
  console.log('title:', JSON.parse(JSON.stringify(newTableData)))
  tableData.value = newTableData;
  openOptionsIndex.value = null;
  nextTick(() => {
    if (cellRefs.value[afterIndex + 1] && cellRefs.value[afterIndex + 1][0]) {
      cellRefs.value[afterIndex + 1][0].focus();
    }
  });
};

// Delete row at the specified index
const deleteRow = (index) => {
  const newTableData = [...tableData.value];
  newTableData.splice(index, 1);
  tableData.value = newTableData;
  openOptionsIndex.value = null;
};

const toggleRowType = (rowIndex) => {
  const newTableData = [...tableData.value];
  const currentRow = newTableData[rowIndex];

   if (currentRow.type === 'title') {
    const newRow = currentRow.value.map(cell => cell.value);
    newTableData[rowIndex] = newRow;
  } else {
     const newTitleRow = {
      type: 'title',
      value: currentRow.map(cell => ({ cellType: 'default', value: cell })),
    };
    newTableData[rowIndex] = newTitleRow;
  }

  tableData.value = newTableData;
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
    const linkText = `[${linkData.label}](${linkData.url})`;
    const rowIndex = currentLinkRowIndex.value;
    const notesColumnIndex = headers.value.findIndex(
      (header) => header.value === 'Notes'
    );

    if (notesColumnIndex !== -1) {
      const newTableData = [...tableData.value];

      if (newTableData[rowIndex].type === 'title') {
        const newValues = [...newTableData[rowIndex].value];
        // Check if the cell already contains an array of values
        if (Array.isArray(newValues[notesColumnIndex])) {
          // Check for existing link and label, and update instead of pushing.
          let linkIndex = newValues[notesColumnIndex].findIndex(item => item.cellType === 'link');
          // let labelIndex = newValues[notesColumnIndex].findIndex(item => item.cellType === 'label');

          if (linkIndex > -1) {
            newValues[notesColumnIndex][linkIndex].value = linkText;
          } else {
            newValues[notesColumnIndex].push({ cellType: 'link', value: linkText });
          } 

        } else {
          // If it's not an array, create a new array with the existing value and the new link data
          newValues[notesColumnIndex] = [
            { cellType: 'default', value: newValues[notesColumnIndex] }, //keep previous value
            { cellType: 'link', value: linkText }, 
          ];
        }
        newTableData[rowIndex] = {
          ...newTableData[rowIndex],
          value: newValues,
        };
      } else {
        const newRow = [...newTableData[rowIndex]];
        // Check if the cell already contains an array of values
         if (Array.isArray(newRow[notesColumnIndex])) {
            let linkIndex = newRow[notesColumnIndex].findIndex(item => item.cellType === 'link');
            // let labelIndex = newRow[notesColumnIndex].findIndex(item => item.cellType === 'label');

            if (linkIndex > -1) {
              newRow[notesColumnIndex][linkIndex].value = linkText;
            } else {
              newRow[notesColumnIndex].push({ cellType: 'link', value: linkText });
            }
             
        } else {
          // If it's not an array, create a new array with the existing value and the new link data
          newRow[notesColumnIndex] = [
             { cellType: 'default', value: newRow[notesColumnIndex] }, //keep previous value
            { cellType: 'link', value: linkData.url } 
          ];
        }
        newTableData[rowIndex] = newRow;
      }

      tableData.value = newTableData;
    } else {
      console.warn('The "Notes" column was not found.');
    }
    currentLinkRowIndex.value = null;
  }
  isLinkModalVisible.value = false;
};

// Initialize with default data if empty
onMounted(() => {
  //console.log('onMounted', tableData.value);
  // if (tableData.value.length === 0) {
  //   tableData.value = [
  //     {
  //       type: 'title',
  //       value: Array(headers.value.length).fill({
  //         cellType: 'default',
  //         value: '',
  //       }),
  //     },
  //   ];
  // }
});
</script>

<style scoped>
/* Add any scoped styles here */
</style>
