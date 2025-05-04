<template>
  <div class="bg-white rounded-xl shadow-lg border border-gray-200 p-6 max-w-2xl mx-auto">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-2xl font-bold text-indigo-700">Create Your Travel Plan</h2>
      <button 
        type="button" 
        @click="$emit('close')"
        class="p-2 rounded-full hover:bg-gray-100 text-gray-500"
      >
        <span class="i-lucide-x w-5 h-5"></span>
      </button>
    </div>

    <form @submit.prevent="createTravelPlan" class="space-y-6">
      <div>
        <label for="title" class="block text-sm font-medium text-gray-700 mb-1">Plan Title:</label>
        <input 
          type="text" 
          id="title" 
          v-model="title" 
          required 
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="e.g., Summer Europe Trip 2025"
        />
      </div>

      <div class="bg-indigo-50 rounded-lg p-4">
        <h3 class="text-lg font-medium text-indigo-800 mb-3">Include in your plan:</h3>
        
        <div class="space-y-3">
          <div class="flex items-center gap-3">
            <input 
              type="checkbox" 
              id="itinerary" 
              v-model="includeItinerary"
              class="w-5 h-5 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500" 
            />
            <label for="itinerary" class="flex items-center gap-2 text-gray-700">
              <span class="i-lucide-calendar w-5 h-5 text-indigo-500"></span>
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
              <span class="i-lucide-file-text w-5 h-5 text-indigo-500"></span>
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
              <span class="i-lucide-luggage w-5 h-5 text-indigo-500"></span>
              Things to Bring (Checklist)
            </label>
          </div>
          
          <div class="flex items-center gap-3">
            <input 
              type="checkbox" 
              id="thingsToDo" 
              v-model="includeThingsToDo"
              class="w-5 h-5 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500" 
            />
            <label for="thingsToDo" class="flex items-center gap-2 text-gray-700">
              <span class="i-lucide-list-checks w-5 h-5 text-indigo-500"></span>
              Things to Do (Checklist)
            </label>
          </div>
        </div>
      </div>

      <div class="flex gap-4 justify-end pt-4">
        <button 
          type="button" 
          @click="$emit('close')"
          class="px-5 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        
        <button 
          type="submit"
          class="px-5 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-md flex items-center gap-2"
        >
          <span class="i-lucide-save w-5 h-5"></span>
          Create Plan
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
 
const currentUser = inject('currentUser');
const title = ref('');
const includeItinerary = ref(false);
const includeNotes = ref(false);
const includeThingsToBring = ref(false);
const includeThingsToDo = ref(false);
const router = useRouter();

async function createTravelPlan() {
  if (!title.value) {
    alert('Please enter a title for your travel plan.');
    return;
  }

  if (!currentUser.value?.uid) {
    alert('You must be logged in to create a plan.');
    return;
  }

  const tabsData = {};
  let tabPositionCounter = 1;

  if (includeItinerary.value) {
    tabsData['table_1'] = { 
      tabPosition: tabPositionCounter++,
      tabId: uuidv4(),
      title: 'Itinerary',
      type: 'table',
      value: { headers: [{
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
                }],
                tableData:[
                    {
                        "type": "title",
                        "value": [
                            
                                {
                                    "cellType": "date",
                                    "value": "Mon, Jan 22"
                                }
                            ,
                            
                                {
                                    "cellType": "default",
                                    "value": ""
                                }
                            ,
                            
                                {
                                    "cellType": "note",
                                    "value": ""
                                }
                            
                        ], 
                    },
                    {
                        "type": "default",
                        "value": [
                            
                                {
                                    "cellType": "date",
                                    "value": "8:00 AM"
                                }
                            ,
                            
                                {
                                    "cellType": "default",
                                    "value": "Breakfast"
                                }
                            ,
                            
                                {
                                    "cellType": "note",
                                    "value": ""
                                }
                            
                        ], 
                    },
                    {
                        "type": "default",
                        "value": [
                            
                                {
                                    "cellType": "date",
                                    "value": "9:00 AM"
                                }
                            ,
                            
                                {
                                    "cellType": "default",
                                    "value": "Explore"
                                }
                            ,
                            
                                {
                                    "cellType": "note",
                                    "value": {
                                        text: "",
                                        links: [
                                            {
                                                "label": "Hotel California",
                                                "url": "https://maps.app.goo.gl/xdvwc5kk9BQ48tge7"
                                            },
                                            {
                                                "label": "Tiktok",
                                                "url": "https://vt.tiktok.com/ZShYfhXJF/"
                                            }
                                        ] 
                                    }
                                }, 
                            
                        ]
                    } 
                ]
              },
    };
  }

  if (includeNotes.value) {
    tabsData['notes_1'] = { 
      tabPosition: tabPositionCounter++,
      tabId: uuidv4(),
      title: 'Notes',
      type: 'notes',
      value: {  
        "noteItem_1":{ 
            id: uuidv4(), 
            title: "NoteCheck title",  
            isChecklist: true,
            items: [
                { id: uuidv4(), text: 'NoteCheck 1', completed: false },
                { id: uuidv4(), text: 'NoteCheck 2', completed: false }
            ],
            content: "",
            timestamp: new Date().toISOString()
        },
        "noteItem_2":{
            id: uuidv4(), 
            title: "Title goes here!",  
            isChecklist: false,
            items: [],
            content: "Hello world!",
            timestamp: new Date().toISOString()
        } 
      }
    };
  }

  if (includeThingsToBring.value) {
    tabsData['checklist_1'] = { 
      tabPosition: tabPositionCounter++,
      tabId: uuidv4(),
      title: 'Things to Bring',
      type: 'checklist',
      value: { title: "",  
                items: [
                    { id: uuidv4(), text: 'Bag', completed: false },
                    { id: uuidv4(), text: 'Tissue', completed: false },
                    { id: uuidv4(), text: 'First aid kit', completed: false }
                ] },
    };
  }

  if (includeThingsToDo.value) {
    tabsData['checklist_2'] = { 
      tabPosition: tabPositionCounter++,
      tabId: uuidv4(),
      title: 'Things to Do',
      type: 'checklist',
      value: { title: 'Priorities', items: [ 
        { id: uuidv4(), text: 'Check packing list', completed: false },
        { id: uuidv4(), text: 'Pack', completed: false }
        ] },
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
    //console.log('Travel Plan created with ID: ', docRef.id);
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