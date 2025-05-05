<template>
  <div class="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg h-[calc(100dvh-50px)]"> 
    <button 
      @click="showCreatePlan = !showCreatePlan"
      class="mb-8 px-3 py-2 bg-red-500 hover:bg-red-400 text-white  font-medium rounded-lg  transition-colors shadow-md flex items-center gap-2"
    >
    <FontAwesomeIcon :icon="faPlus"   />
      Create a New Plan
    </button>
    
    <CreatePlan 
      v-if="showCreatePlan" 
      @planCreated="fetchPlans" 
      @close="showCreatePlan = false" 
      class="mb-8"
    />
    
    <!-- Loading state -->
    <div 
      v-if="loading"
      class="py-12 text-center text-gray-500 flex items-center justify-center gap-3"
    >
      <span class="i-lucide-loader-2 w-6 h-6 animate-spin"></span>
      <span>Loading plans...</span>
    </div>
    
    <!-- Error state -->
    <div 
      v-else-if="error"
      class="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700"
    >
      {{ error }}
    </div>
    
    <!-- Plans list -->
    <div 
      v-else-if="plans.length > 0"
      class="border border-gray-200 rounded-xl overflow-hidden"
    >
      <ul class="divide-y divide-gray-200">
        <li 
          v-for="plan in plans" 
          :key="plan.id"
          class="hover:bg-gray-100 transition-colors"
        >
          <router-link 
            :to="`/plan/${plan.id}`"
            class="flex items-center justify-between p-4"
          >
            <span class="font-medium text-gray-800">{{ plan.title }}</span>
            <span class="i-lucide-chevron-right w-5 h-5 text-gray-400"></span>
          </router-link>
        </li>
      </ul>
    </div>
    
    <!-- Empty state -->
     <template v-else>
    <div 
       v-if="!showCreatePlan"
      class="text-center py-16 px-4 bg-gray-50 rounded-xl border border-dashed border-gray-300"
    > 
      <p class="text-lg text-gray-600">No travel plans yet.</p>
      <p class="text-sm text-gray-500 mt-2">Click "Create a New Plan" to start planning your next adventure!</p>
   
      <!-- <button 
          @click="createDemoPlan"
          class="mt-6 px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white font-medium rounded-lg transition-colors shadow-md"
        >
          Add Demo Plan
        </button> -->
    </div>
  </template>
  </div>
</template>
  
  <script setup>
  import { ref, onMounted, inject } from 'vue';
  import { db } from '@/config/firebase-config';
  import { collection, query, where, getDocs } from 'firebase/firestore';
  import CreatePlan from '@/components/CreatePlan.vue';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { faPlus } from '@fortawesome/free-solid-svg-icons';
  
  const currentUser = inject('currentUser');
  const plans = ref([]);
  const loading = ref(true);
  const error = ref(null);
  const showCreatePlan = ref(false);
  const demoTravelPlan = { 
    "tabs": {
        "checklist_1": {
            "title": "Things to Bring",
            "value": {
                "items": [
                    {
                        "text": "Powerbank",
                        "id": "0c8691f4-e805-4437-abdb-bb4494afb67b",
                        "completed": false,
                        "position": 0
                    },
                    {
                        "position": 1,
                        "id": "0685a2cf-9b5f-481c-a39f-6e9c473932d8",
                        "completed": false,
                        "text": "First aid kit"
                    },
                    {
                        "position": 2,
                        "completed": false,
                        "id": "fb093c82-7463-4dcb-a42f-03516725f33d",
                        "text": "Tripod"
                    },
                    {
                        "text": "Passport",
                        "completed": false,
                        "position": 3,
                        "id": "77108741-bd20-4b62-a03d-4b0c2ebebe0a"
                    }
                ],
                "title": ""
            },
            "tabId": "a6c75d20-eebf-4b87-aa0d-0b253b41a30b",
            "type": "checklist",
            "tabPosition": 3
        },
        "notes_1": {
            "type": "notes",
            "tabId": "dcd807ed-c400-4e34-a83e-71b7fcda1de1",
            "value": {
                "noteItem_2": {
                    "content": "- City Tour Double Decker Bus\n- Cu Chi Tunnels\n- Independence Palace\n- War Museum",
                    "isChecklist": false,
                    "items": [],
                    "key": "noteItem_2",
                    "id": "27aae1a9-89c3-4152-b6aa-e260aabeb46f",
                    "timestamp": "2025-05-05T02:50:38.350Z",
                    "title": "Activities"
                },
                "noteItem_1": {
                    "id": "0df902f4-469d-4ce3-813e-9193fee7ed38",
                    "isChecklist": false,
                    "items": [],
                    "title": "Food",
                    "content": "Bún thịt nướng\nPho\nBanh MiBún Chả\nEgg Coffee\nVietnamese Coffee\nSpring Rolls\nDine in the Dark by Noir\nCoconut coffee",
                    "timestamp": "2025-05-05T02:48:46.999Z"
                }
            },
            "title": "Notes",
            "tabPosition": 2
        },
        "table_1": {
            "value": {
                "headers": [
                    {
                        "position": 1,
                        "value": "Date",
                        "type": "date"
                    },
                    {
                        "position": 2,
                        "value": "Activity",
                        "type": "text"
                    },
                    {
                        "value": "Notes",
                        "position": 3,
                        "type": "notes"
                    }
                ],
                "tableData": [
                    {
                        "type": "title",
                        "value": [
                            {
                                "value": "Day 1",
                                "cellType": "date"
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
                    },
                    {
                        "type": "default",
                        "value": [
                            {
                                "value": "1:00 PM",
                                "cellType": "date"
                            },
                            {
                                "cellType": "default",
                                "value": "Meet at Sue's place BGC"
                            },
                            {
                                "value": {
                                    "links": [
                                        {
                                            "url": "https://maps.app.goo.gl/rumeGCawVbkme3V49",
                                            "label": "Condo"
                                        }
                                    ],
                                    "text": ""
                                },
                                "cellType": "note"
                            }
                        ]
                    },
                    {
                        "value": [
                            {
                                "value": "5:00 PM",
                                "cellType": "date"
                            },
                            {
                                "cellType": "default",
                                "value": "Arrive at NAIA T3"
                            },
                            {
                                "value": {
                                    "text": "",
                                    "links": []
                                },
                                "cellType": "note"
                            }
                        ],
                        "type": "default"
                    },
                    {
                        "value": [
                            {
                                "cellType": "date",
                                "value": "10:50 PM"
                            },
                            {
                                "cellType": "default",
                                "value": "Flight to SGN"
                            },
                            {
                                "value": "",
                                "cellType": "note"
                            }
                        ],
                        "type": "default"
                    },
                    {
                        "type": "default",
                        "value": [
                            {
                                "value": "",
                                "cellType": "date"
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
                    },
                    {
                        "type": "title",
                        "value": [
                            {
                                "cellType": "date",
                                "value": "Day 2"
                            },
                            {
                                "value": "",
                                "cellType": "default"
                            },
                            {
                                "cellType": "note",
                                "value": ""
                            }
                        ]
                    },
                    {
                        "value": [
                            {
                                "value": "12:40 AM",
                                "cellType": "date"
                            },
                            {
                                "value": "Arrive at SGN",
                                "cellType": "default"
                            },
                            {
                                "value": "",
                                "cellType": "note"
                            }
                        ],
                        "type": "default"
                    },
                    {
                        "value": [
                            {
                                "value": "9:00 AM",
                                "cellType": "date"
                            },
                            {
                                "cellType": "default",
                                "value": "Breakfast at hotel"
                            },
                            {
                                "value": "",
                                "cellType": "note"
                            }
                        ],
                        "type": "default"
                    },
                    {
                        "value": [
                            {
                                "value": "12:00 PM",
                                "cellType": "date"
                            },
                            {
                                "cellType": "default",
                                "value": "Lunch - Bún thịt nướng"
                            },
                            {
                                "cellType": "note",
                                "value": ""
                            }
                        ],
                        "type": "default"
                    },
                    {
                        "type": "title",
                        "value": [
                            {
                                "cellType": "date",
                                "value": "Day 3"
                            },
                            {
                                "value": "",
                                "cellType": "default"
                            },
                            {
                                "cellType": "note",
                                "value": ""
                            }
                        ]
                    },
                    {
                        "type": "default",
                        "value": [
                            {
                                "cellType": "date",
                                "value": "7:30 AM"
                            },
                            {
                                "cellType": "default",
                                "value": "Hotel pick up"
                            },
                            {
                                "cellType": "note",
                                "value": ""
                            }
                        ]
                    },
                    {
                        "value": [
                            {
                                "value": "8:00 AM",
                                "cellType": "date"
                            },
                            {
                                "value": "To Cu Chi Tunnels",
                                "cellType": "default"
                            },
                            {
                                "value": {
                                    "links": [],
                                    "text": ""
                                },
                                "cellType": "note"
                            }
                        ],
                        "type": "default"
                    },
                    {
                        "value": [
                            {
                                "cellType": "date",
                                "value": "7:00 PM"
                            },
                            {
                                "cellType": "default",
                                "value": "Dinner - Pho"
                            },
                            {
                                "value": {
                                    "links": [
                                        {
                                            "url": "https://maps.app.goo.gl/iK71H7vdeMWpCzTPA",
                                            "label": "Pho Le"
                                        }
                                    ],
                                    "text": ""
                                },
                                "cellType": "note"
                            }
                        ],
                        "type": "default"
                    }
                ]
            },
            "tabPosition": 1,
            "tabId": "25a05c6d-5ce0-455d-a339-63b901bf4941",
            "title": "Itinerary",
            "type": "table"
        }
    }, 
    "title": "Saigon (Demo)"
};
  onMounted(async () => {
    await fetchPlans();
  });
  
  async function fetchPlans() {
    loading.value = true;
    error.value = null;
    if (!currentUser.value?.uid) {
      error.value = 'User not authenticated.';
      loading.value = false;
      return;
    }
  
    try { 
      const plansCollection = collection(db, `users/${currentUser.value.uid}/travelPlans`);
      const q = query(plansCollection, where('createdBy', '==', currentUser.value.uid));
      const querySnapshot = await getDocs(q);
      plans.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      // let tempDemoData = demoTravelPlan;
      // tempDemoData.createdBy = currentUser.value.uid;
      // plans.value.push(tempDemoData);
    } catch (err) {
      console.error('Error fetching plans: ', err);
      error.value = 'Failed to fetch travel plans.';
    } finally {
      loading.value = false;
    }
  }
  
  function handlePlanCreated() {
    showCreatePlan.value = false;
    fetchPlans();
  }
  
  function handleCloseCreatePlan() {
    showCreatePlan.value = false;
  }
  </script>
  
  <style scoped>
  /* ... styles ... */
  </style>