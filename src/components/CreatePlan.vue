<template>
  <div class="bg-white rounded-xl p-4 max-w-2xl mx-auto overflow-y-auto h-11/12 mt-2">
    <div class="flex items-center justify-between">  
    </div>

    <form @submit.prevent="createTravelPlan" class="space-y-3">
      <div>
        <label for="title" class="block font-bold text-md text-gray-700 mb-1">Plan Title:</label>
        <input 
          type="text" 
          id="title" 
          v-model="title" 
          required 
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
          placeholder="e.g., Summer Europe Trip 2025"
        />
      </div>

      <!-- Trip Duration Section -->
      <div class="bg-gray-50 rounded-lg p-4">
        <h3 class="text-md font-bold text-gray-700 mb-3">Trip Duration:</h3>
        
        <div class="space-y-3">
          <div class="flex items-center gap-3">
            <input 
              type="radio" 
              id="numDays" 
              value="numDays"
              v-model="durationOption"
              class="w-5 h-5 text-red-500 border-gray-300 focus:outline-none" 
            />
            <label for="numDays" class="flex items-center gap-2 text-gray-700">
              <FontAwesomeIcon :icon="faHashtag" class="text-red-500" /> 
              Number of Days
            </label>
          </div>
          
          <!-- Number of Days Input start-->
          <div v-if="durationOption === 'numDays'" class="ml-8">
            <div class="w-1/2">
              <label for="numberOfDays" class="block text-sm text-gray-600 mb-1">Number of Days:</label>
              <input 
                type="number" 
                id="numberOfDays" 
                v-model="numberOfDays" 
                min="1"
                max="30"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
              />
            </div>
          </div>
          <!-- Number of Days Input end-->

          <div class="flex items-center gap-3">
            <input 
              type="radio" 
              id="dateRange" 
              value="dateRange"
              v-model="durationOption"
              class="w-5 h-5 text-red-500 focus:outline-none" 
            />
            <label for="dateRange" class="flex items-center gap-2 text-gray-700">
              <FontAwesomeIcon :icon="faCalendarDays" class="text-red-500" /> 
              Date Range
            </label>
          </div>
          
          <!-- Date Range Inputs start-->
          <div v-if="durationOption === 'dateRange'" class="ml-8 space-y-2">
            <div class="flex gap-3">
              <div class="w-1/2">
                <label for="startDate" class="block text-sm text-gray-600 mb-1">Start Date:</label>
                <input 
                  type="date" 
                  id="startDate" 
                  v-model="startDate" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                />
              </div>
              <div class="w-1/2">
                <label for="endDate" class="block text-sm text-gray-600 mb-1">End Date:</label>
                <input 
                  type="date" 
                  id="endDate" 
                  v-model="endDate" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                />
              </div>
            </div>
          </div>
          <!-- Date Range Inputs end-->
          
      


        </div>
      </div>

      <div class="bg-gray-50 rounded-lg p-4">
        <h3 class="text-md font-bold text-gray-700 mb-3">Include in your plan:</h3>
        
        <div class="space-y-3">
          <div class="flex items-center gap-3">
            <input 
              type="checkbox" 
              id="itinerary" 
              v-model="includeItinerary"
              class="w-5 h-5 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500" 
            />
            <label for="itinerary" class="flex items-center gap-2 text-gray-700">
              <FontAwesomeIcon :icon="faCalendarWeek"  class="text-red-500" /> 
              Itinerary (Table)
            </label>
          </div>
          
          <div class="flex items-center gap-3">
            <input 
              type="checkbox" 
              id="notes" 
              v-model="includeNotes"
              class="w-5 h-5 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500" 
            />
            <label for="notes" class="flex items-center gap-2 text-gray-700">
             
              <FontAwesomeIcon :icon="faNoteSticky"  class="text-red-500" /> 
              Notes
            </label>
          </div>
          
          <div class="flex items-center gap-3">
            <input 
              type="checkbox" 
              id="thingsToBring" 
              v-model="includeThingsToBring"
              class="w-5 h-5 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500" 
            />
            <label for="thingsToBring" class="flex items-center gap-2 text-gray-700">
            
              <FontAwesomeIcon :icon="faSuitcaseRolling" class="text-red-500"  /> 
              Things to Bring (Checklist)
            </label>
          </div> 
        </div>
      </div>

      <div class="flex gap-2 justify-end pt-4">
        <button 
          type="submit"
          class="px-5 py-2 bg-red-500 hover:bg-red-400 text-white font-medium rounded-lg  transition-colors  flex items-center"
        >
          Save
        </button>
        <button 
          type="button" 
          @click="$emit('close')"
          class="px-5 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue';
import { db } from '@/config/firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import { useRouter } from 'vue-router';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { 
  faSuitcaseRolling, 
  faListCheck, 
  faCalendarWeek, 
  faNoteSticky,
  faCalendarDays,
  faHashtag
} from '@fortawesome/free-solid-svg-icons';

const currentUser = inject('currentUser');
const title = ref('');
const includeItinerary = ref(true);
const includeNotes = ref(true);
const includeThingsToBring = ref(true); 
const router = useRouter();

// Trip duration options
const durationOption = ref('numDays'); // Default option
const startDate = ref('');
const endDate = ref('');
const numberOfDays = ref(3); // Default number of days

// Function to format date as "Day, Month DD" (e.g., "Mon, Jan 22")
function formatDate(date) {
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options);
}

// Function to generate table rows based on date range
function generateDateRangeRows(startDateStr, endDateStr) {
  const tableData = [];
  const start = new Date(startDateStr);
  const end = new Date(endDateStr);
  
  // Validate dates
  if (isNaN(start.getTime()) || isNaN(end.getTime()) || start > end) {
    alert('Please enter a valid date range.'); 
    return ;
  }
  
  // Loop through each day in the range
  let currentDate = new Date(start);
  while (currentDate <= end) {
    // Add title row for the day
    tableData.push({
      "type": "title",
      "value": [
        {
          "cellType": "date",
          "value": formatDate(currentDate)
        },
        {
          "cellType": "default",
          "value": ""
        },
        {
          "cellType": "note",
          "value": ""
        }
      ]
    });
    
    // Add three default rows for each day
    for (let i = 0; i < 3; i++) {
      tableData.push({
        "type": "default",
        "value": [
          {
            "cellType": "date",
            "value": ""
          },
          {
            "cellType": "default",
            "value": ""
          },
          {
            "cellType": "note",
            "value": ""
          }
        ]
      });
    }
    
    // Move to next day
    currentDate.setDate(currentDate.getDate() + 1);
  }
  
  return tableData;
}

// Function to generate table rows based on number of days
function generateNumberOfDaysRows(days) {
  const tableData = [];
  
  // Validate number of days
  const numDays = parseInt(days);
  if (isNaN(numDays) || numDays < 1 || numDays > 30) {
    alert('Please enter a valid number of days (1-30).');
    return tableData;
  }
  
  // Create rows for each day
  for (let day = 1; day <= numDays; day++) {
    // Add title row for the day
    tableData.push({
      "type": "title",
      "value": [
        {
          "cellType": "date",
          "value": `Day ${day}`
        },
        {
          "cellType": "default",
          "value": ""
        },
        {
          "cellType": "note",
          "value": ""
        }
      ]
    });
    
    // Add three default rows for each day
    for (let i = 0; i < 3; i++) {
      tableData.push({
        "type": "default",
        "value": [
          {
            "cellType": "date",
            "value": ""
          },
          {
            "cellType": "default",
            "value": ""
          },
          {
            "cellType": "note",
            "value": ""
          }
        ]
      });
    }
  }
  
  return tableData;
}

async function createTravelPlan() {
  if (!title.value) {
    alert('Please enter a title for your travel plan.');
    return;
  }

  if (!currentUser.value?.uid) {
    alert('You must be logged in to create a plan.');
    return;
  }

  // Validate duration inputs
  if (durationOption.value === 'dateRange' && (!startDate.value || !endDate.value)) {
    alert('Please select both start and end dates.');
    return;
  }
  
  if (durationOption.value === 'numDays' && (!numberOfDays.value || numberOfDays.value < 1)) {
    alert('Please enter a valid number of days.');
    return;
  }

  const tabsData = {};
  let tabPositionCounter = 1;

  if (includeItinerary.value) {
    // Generate table data based on user's selection
    let tableData = [];
    
    if (durationOption.value === 'dateRange') {
      tableData = generateDateRangeRows(startDate.value, endDate.value);
    } else if (durationOption.value === 'numDays') {
      tableData = generateNumberOfDaysRows(numberOfDays.value);
    }
    
    tabsData['table_1'] = { 
      tabPosition: tabPositionCounter++,
      tabId: uuidv4(),
      title: 'Itinerary',
      type: 'table',
      value: { 
        headers: [
          {
            position: 1,
            type: "date",
            value: "Date"
          },
          {
            position: 2,
            type: "text",
            value: "Activity"
          },
          {
            position: 3,
            type: "notes",
            value: "Notes"
          }
        ],
        tableData: tableData
      },
    };
  }

  if (includeNotes.value) {
    tabsData['notes_1'] = { 
      tabPosition: tabPositionCounter++,
      tabId: uuidv4(),
      title: 'Notes',
      type: 'notes',
      value: null
    };
  }

  if (includeThingsToBring.value) {
    tabsData['checklist_1'] = { 
      tabPosition: tabPositionCounter++,
      tabId: uuidv4(),
      title: 'Things to Bring',
      type: 'checklist',
      value: null,
    };
  }
  
  const travelPlanObj = {
    title: title.value,
    tabs: tabsData,
    createdAt: new Date(),
    createdBy: currentUser.value.uid,
  };

  try {
    const docRef = await addDoc(collection(db, `users/${currentUser.value.uid}/travelPlans`), travelPlanObj);
    emit('planCreated'); // Emit the event for PlansList to refetch
    emit('close'); // Emit the close event
    router.push(`/plan/${docRef.id}`);
  } catch (error) {
    console.error('Error creating travel plan: ', error);
    alert('Failed to create travel plan.');
  }
}

const emit = defineEmits(['planCreated', 'close']);
</script>

<style scoped>
/* ... styles ... */
</style>