<template>
    <div class="list-view px-2 sm:px-4 overflow-y-scroll w-full max-h-[calc(100dvh-200px)]">  
      <div v-for="(dayGroup, index) in groupedByDay" :key="index" class="mb-4 border border-gray-200  shadow-sm"> 
        <div class="flex flex-row w-full" > 
            <div class="font-bold bg-gray-200 p-2"> {{ dayGroup.titleRow.date }} </div> 
            <div class="font-bold bg-gray-200 flex-col flex-grow-1 pt-2 pb-2"> 
              <span class="ms-2 " v-if="dayGroup.titleRow.titleLabel"> {{ dayGroup.titleRow.titleLabel }}</span>  

              <div v-for="(noteItem, noteIndex) in dayGroup.titleRow.notes" :key="noteIndex" class="ms-2"> 
                <span v-if="noteItem.cellType === 'link' && noteItem.value">
                  <a
                      :href="getLinkUrl(noteItem.value)"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="bg-gray-300 px-2 py-1 w-full rounded-xl text-[11px]"
                    >
 
                      <FontAwesomeIcon v-if="isMapsLink(noteItem.value)" :icon="faLocationDot" class="me-1"/>
                      <FontAwesomeIcon v-else :icon="faArrowUpRightFromSquare" class="me-1"/>
                       
                      {{ getLinkLabel(noteItem.value) }}
                    </a>
                </span>
                <span v-else>{{ noteItem.value }}</span>
              </div>
            </div> 
          </div>  
        <div class="flex flex-col" v-for="(item, itemIndex) in dayGroup.rowsUnderGroup">
        
          <div class="flex flex-row w-full bg-white p-2"> 
            <div class="text-end w-22">{{ item.date }}</div>

            <div class="ms-2 ps-2">
              <div class="">{{ item.activity }}  </div>
              <div v-for="(noteItem, noteIndex) in item.notes" :key="noteIndex" class=" "> 
                <span v-if="noteItem.cellType === 'link' && noteItem.value" >
                  <a
                      :href="getLinkUrl(noteItem.value)"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="bg-gray-300 px-2 py-1 w-full rounded-xl text-[11px]"
                    >
 
                      <FontAwesomeIcon v-if="isMapsLink(noteItem.value)" :icon="faLocationDot" class="me-1"/>
                      <FontAwesomeIcon v-else :icon="faArrowUpRightFromSquare" class="me-1"/>
                       
                      {{ getLinkLabel(noteItem.value) }}
                    </a>
                </span>
                <span class="text-gray-500 text-sm" v-else>{{ noteItem.value }}</span>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
 import { computed } from 'vue'; 
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { faLocationDot, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
  
  const props = defineProps({
    data: {
      type: Array,
      required: true
    },
    headers: {
      type: Array,
      required: true
    }
  });
  
  // Group data by day (title rows and their associated items)
  const groupedByDay = computed(() => {
    const groups = [];
    let currentGroup = null; 
    props.data.forEach(row => {
      // Check if this is a title row
      if (row.type === 'title') { 
        if (currentGroup) {
          groups.push(currentGroup);
        } 
        const dateValue = row.value[0][0].value;
        const activityValue = row.value[1][0].value;
        const noteValues = row.value[2]; 
        currentGroup = {
          titleRow: { 
            date: dateValue,
            titleLabel: activityValue,
            notes: noteValues
          }, 
          rowsUnderGroup: []
        };
      } 
      // If this is not a title row and we have a current group, add it to the items
      else if (currentGroup) {
        // console.log('row', JSON.parse(JSON.stringify(row)))
        const dateValue = row.value[0][0].value;
        const activityValue = row.value[1][0].value;
        const noteValues = row.value[2]; 

        currentGroup.rowsUnderGroup.push({
          date: row.value[0][0].value || '',
          activity: row.value[1][0].value || '',
          notes: row.value[2] || ''
        }); 
      }
    });
  
    // Don't forget to add the last group
    if (currentGroup) {
      groups.push(currentGroup);
    }
  
    console.log('groups', JSON.parse(JSON.stringify(groups)))
    return groups;
  });
  
  // Simple date formatter function
  const formatDate = (dateString) => {
    if (!dateString) return '';
    
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return dateString;
      
      return date.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short', 
        day: 'numeric'
      });
    } catch (e) {
      return dateString;
    }
  };

  const isLink = (value) => {
  return typeof value === 'string' &&
    (value.startsWith('http://') || 
     value.startsWith('https://') || 
     value.startsWith('maps:') ||
     /\[.*?\]\(.*?\)/.test(value)); // detect [label](url)
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
  return typeof value === 'string' && value.startsWith('maps');
};

  </script>