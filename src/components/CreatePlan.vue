<template>
  <div>
    <h2>Create Your Travel Plan</h2>
    <form @submit.prevent="createTravelPlan">
      <div>
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="title" required />
      </div>

      <div>
        <h2>Include in your plan:</h2>
        <div>
          <input type="checkbox" id="itinerary" v-model="includeItinerary" />
          <label for="itinerary">Itinerary (Table)</label>
        </div>
        <div>
          <input type="checkbox" id="notes" v-model="includeNotes" />
          <label for="notes">Notes</label>
        </div>
        <div>
          <input type="checkbox" id="thingsToBring" v-model="includeThingsToBring" />
          <label for="thingsToBring">Things to Bring (Checklist)</label>
        </div>
        <div>
          <input type="checkbox" id="thingsToDo" v-model="includeThingsToDo" />
          <label for="thingsToDo">Things to Do (Checklist)</label>
        </div>
      </div>

      <button type="submit">Create Plan</button>
      <button type="button" @click="$emit('close')">Cancel</button>
    </form>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue';
import { db } from '@/config/firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import { useRouter } from 'vue-router';

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
      tabId: 1,
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
      tabId: 2,
      title: 'Notes',
      type: 'notes',
      value: { notesList: [
        { 
            title: "",
            checklistId: "20",
            isChecklist: true,
            items: [
                { id: "10", text: 'NoteCheck 1', completed: false },
                { id: "11", text: 'NoteCheck 2', completed: false }
            ],
            content: ""
        },
        {
            title: "Title goes here!",
            checklistId: "21",
            isChecklist: false,
            items: [],
            content: "Hello world!"
        }
      ] },
    };
  }

  if (includeThingsToBring.value) {
    tabsData['checklist_1'] = {
      tabPosition: tabPositionCounter++,
      tabId: 3,
      title: 'Things to Bring',
      type: 'checklist',
      value: { title: "",  
                items: [
                    { id: "1", text: 'Bag', completed: false },
                    { id: "2", text: 'Tissue', completed: false },
                    { id: "3", text: 'First aid kit', completed: false }
                ] },
    };
  }

  if (includeThingsToDo.value) {
    tabsData['checklist_2'] = {
      tabPosition: tabPositionCounter++,
      tabId: 4,
      title: 'Things to Do',
      type: 'checklist',
      value: { title: 'Priorities', items: [ 
        { id: "4", text: 'Check packing list', completed: false },
        { id: "5", text: 'Pack', completed: false }
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
    console.log('Travel Plan created with ID: ', docRef.id);
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