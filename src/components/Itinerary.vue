<template>
    <div class="container mx-auto px-4 py-8">
      <header class="mb-8 text-center">
        <h1 class="text-3xl font-bold text-blue-600">Wanderlust Travel Guide</h1>
        <p class="text-gray-600 mt-2">Plan your perfect trip with personalized itineraries</p>
      </header>
  
      <!-- Step 1: Choose Destination -->
      <div v-if="currentStep === 1" class="max-w-2xl mx-auto">
        <h2 class="text-xl font-semibold mb-4">Step 1: Choose Your Destination</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DestinationCard 
            v-for="destination in destinations" 
            :key="destination.id"
            :destination="destination"
            :isSelected="selectedDestination && selectedDestination.id === destination.id"
            @select="selectDestination"
          />
        </div>
  
        <div class="mt-6 flex justify-end">
          <button 
            @click="nextStep" 
            class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded disabled:bg-gray-300"
            :disabled="!selectedDestination"
          >
            Next Step
          </button>
        </div>
      </div>
  
      <!-- Step 2: Trip Duration -->
      <div v-if="currentStep === 2" class="max-w-2xl mx-auto">
        <h2 class="text-xl font-semibold mb-4">Step 2: How many days will you stay in {{ selectedDestination.name }}?</h2>
        
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <button 
            v-for="days in [1, 2, 3, 4, 5, 7, 10, 14]" 
            :key="days"
            class="border rounded-full w-12 h-12 flex items-center justify-center hover:bg-blue-50 transition"
            :class="{'border-blue-500 bg-blue-50': tripDuration === days}"
            @click="tripDuration = days"
          >
            {{ days }}
          </button>
          
          <div class="flex items-center">
            <label class="mr-2">Custom:</label>
            <input 
              type="number" 
              v-model.number="tripDuration" 
              min="1" 
              max="30"
              class="border rounded w-16 px-2 py-1"
            />
          </div>
        </div>
  
        <div class="mt-6 flex justify-between">
          <button 
            @click="currentStep = 1" 
            class="border border-blue-500 text-blue-500 hover:bg-blue-50 px-4 py-2 rounded"
          >
            Back
          </button>
          <button 
            @click="nextStep" 
            class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded disabled:bg-gray-300"
            :disabled="!tripDuration"
          >
            Next Step
          </button>
        </div>
      </div>
  
      <!-- Step 3: Trip Preferences -->
      <div v-if="currentStep === 3" class="max-w-2xl mx-auto">
        <h2 class="text-xl font-semibold mb-4">Step 3: What are your priorities for this trip?</h2>
        
        <div class="space-y-4">
          <PreferenceCard 
            v-for="preference in preferences" 
            :key="preference.id"
            :preference="preference"
            :isSelected="selectedPreferences.includes(preference.id)"
            @toggle="togglePreference(preference.id)"
          />
        </div>
        
        <div class="mt-6 flex justify-between">
          <button 
            @click="currentStep = 2" 
            class="border border-blue-500 text-blue-500 hover:bg-blue-50 px-4 py-2 rounded"
          >
            Back
          </button>
          <button 
            @click="generateItinerary" 
            class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded disabled:bg-gray-300"
            :disabled="selectedPreferences.length === 0"
          >
            Generate Itinerary
          </button>
        </div>
      </div>
  
      <!-- Step 4: Itinerary Results -->
      <div v-if="currentStep === 4" class="max-w-4xl mx-auto">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-semibold">Your {{ tripDuration }}-Day Itinerary for {{ selectedDestination.name }}</h2>
          <button 
            @click="currentStep = 1" 
            class="border border-blue-500 text-blue-500 hover:bg-blue-50 px-4 py-2 rounded text-sm"
          >
            Plan New Trip
          </button>
        </div>
        
        <div v-if="loading" class="text-center py-12">
          <p class="text-lg mb-2">Generating your personalized itinerary...</p>
          <p class="text-gray-600">This may take a moment</p>
        </div>
        
        <div v-else-if="itinerary" class="space-y-8">
          <!-- Itinerary Tabs -->
          <div class="border-b">
            <div class="flex flex-wrap -mb-px">
              <button 
                class="py-2 px-4 font-medium border-b-2 mr-2"
                :class="activeTab === 'daily' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'"
                @click="activeTab = 'daily'"
              >
                Daily Plan
              </button>
              <button 
                class="py-2 px-4 font-medium border-b-2 mr-2"
                :class="activeTab === 'food' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'"
                @click="activeTab = 'food'"
              >
                Food Spots
              </button>
              <button 
                class="py-2 px-4 font-medium border-b-2 mr-2"
                :class="activeTab === 'activities' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'"
                @click="activeTab = 'activities'"
              >
                Activities
              </button>
              <button 
                class="py-2 px-4 font-medium border-b-2 mr-2"
                :class="activeTab === 'tips' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'"
                @click="activeTab = 'tips'"
              >
                Travel Tips
              </button>
              <button 
                class="py-2 px-4 font-medium border-b-2"
                :class="activeTab === 'packing' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'"
                @click="activeTab = 'packing'"
              >
                Packing List
              </button>
            </div>
          </div>
  
          <!-- Daily Plan Tab -->
          <div v-if="activeTab === 'daily'" class="space-y-6">
            <DailyItinerary 
              v-for="(day, index) in itinerary.dailyPlan" 
              :key="index" 
              :dayNumber="index + 1" 
              :activities="day"
            />
          </div>
  
          <!-- Food Spots Tab -->
          <div v-if="activeTab === 'food'" class="space-y-4">
            <FoodSpotCard 
              v-for="(spot, index) in itinerary.foodSpots" 
              :key="index" 
              :spot="spot"
            />
          </div>
  
          <!-- Activities Tab -->
          <div v-if="activeTab === 'activities'" class="space-y-4">
            <ActivityCard 
              v-for="(activity, index) in itinerary.activities" 
              :key="index" 
              :activity="activity"
            />
          </div>
  
          <!-- Travel Tips Tab -->
          <div v-if="activeTab === 'tips'" class="space-y-4">
            <TravelTipList 
              v-for="(category, index) in itinerary.travelTips" 
              :key="index" 
              :category="category"
            />
          </div>
  
          <!-- Packing List Tab -->
          <div v-if="activeTab === 'packing'" class="space-y-4">
            <PackingListCategory 
              v-for="(category, index) in itinerary.packingList" 
              :key="index"
              :category="category"
              :categoryIndex="index"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
//   import DestinationCard from './components/DestinationCard.vue';
  import DestinationCard from './common/DestinationCard.vue';
  import PreferenceCard from './common/PreferenceCard.vue';
  import DailyItinerary from './common/DailyItinerary.vue';
  import FoodSpotCard from './common/FoodSpotCard.vue';
  import ActivityCard from './common/ActivityCard.vue';
  import TravelTipList from './common/TravelTipList.vue';
  import PackingListCategory from './common/PackingListCategory.vue';
  
  export default {
    components: {
      DestinationCard,
      PreferenceCard,
      DailyItinerary,
      FoodSpotCard,
      ActivityCard,
      TravelTipList,
      PackingListCategory
    },
    data() {
      return {
        currentStep: 1,
        selectedDestination: null,
        tripDuration: 3,
        selectedPreferences: [],
        itinerary: null,
        loading: false,
        activeTab: 'daily',
        
        destinations: [
          {
            id: 1,
            name: 'Hanoi',
            country: 'Vietnam',
            description: 'Vietnam\'s capital city, known for its ancient architecture and rich culture with a blend of Southeast Asian, Chinese and French influences.'
          },
          {
            id: 2,
            name: 'Bangkok',
            country: 'Thailand',
            description: 'Thailand\'s vibrant capital with ornate shrines, bustling street markets, and a modern cityscape alongside its historic center.'
          },
          {
            id: 3,
            name: 'Tokyo',
            country: 'Japan',
            description: 'Japan\'s busy capital that mixes ultramodern and traditional, from neon-lit skyscrapers to historic temples.'
          },
          {
            id: 4,
            name: 'Paris',
            country: 'France',
            description: 'France\'s capital is a major European city and a global center for art, fashion, gastronomy and culture.'
          }
        ],
        
        preferences: [
          {
            id: 'food',
            name: 'Food & Cuisine',
            description: 'Focus on local delicacies, food tours, cooking classes, and unique dining experiences.'
          },
          {
            id: 'culture',
            name: 'Culture & History',
            description: 'Prioritize museums, historical sites, cultural performances, and architectural landmarks.'
          },
          {
            id: 'nature',
            name: 'Nature & Outdoors',
            description: 'Emphasize parks, hiking trails, natural wonders, and outdoor activities.'
          },
          {
            id: 'relaxation',
            name: 'Relaxation & Wellness',
            description: 'Focus on spas, beaches, slow-paced activities, and rejuvenating experiences.'
          },
          {
            id: 'adventure',
            name: 'Adventure & Thrills',
            description: 'Highlight exciting activities, sports, and adrenaline-pumping experiences.'
          },
          {
            id: 'shopping',
            name: 'Shopping & Markets',
            description: 'Prioritize shopping districts, local markets, boutiques, and artisan shops.'
          }
        ]
      };
    },
    
    methods: {
      selectDestination(destination) {
        this.selectedDestination = destination;
      },
      
      togglePreference(preferenceId) {
        const index = this.selectedPreferences.indexOf(preferenceId);
        if (index === -1) {
          this.selectedPreferences.push(preferenceId);
        } else {
          this.selectedPreferences.splice(index, 1);
        }
      },
      
      nextStep() {
        this.currentStep++;
      },
      
      async generateItinerary() {
        this.loading = true;
        this.currentStep = 4;
        
        try {
          // API call to generate itinerary
          const response = await axios.post('/api/generate-itinerary', {
            destination: this.selectedDestination.id,
            duration: this.tripDuration,
            preferences: this.selectedPreferences
          });
          
          this.itinerary = response.data;
        } catch (error) {
          console.error('Error generating itinerary:', error);
          // For demo purposes, let's load mock data if API fails
          this.loadMockItinerary();
        } finally {
          this.loading = false;
        }
      },
      
      loadMockItinerary() {
        // Mock data for demonstration purposes
        this.itinerary = {
          dailyPlan: [
            // Day 1
            [
              { time: '08:00 AM', title: 'Breakfast at Pho Thin', description: 'Start your day with authentic Vietnamese beef noodle soup.' },
              { time: '10:00 AM', title: 'Old Quarter Tour', description: 'Explore the historic streets and architecture of Hanoi\'s Old Quarter.' },
              { time: '12:30 PM', title: 'Lunch at Bun Cha Huong Lien', description: 'Try the famous bun cha at the restaurant visited by Anthony Bourdain and Barack Obama.' },
              { time: '02:30 PM', title: 'Hoan Kiem Lake Walk', description: 'Stroll around the scenic lake and visit Ngoc Son Temple.' },
              { time: '04:30 PM', title: 'Water Puppet Show', description: 'Experience traditional Vietnamese water puppet performance at Thang Long Theatre.' },
              { time: '06:30 PM', title: 'Dinner at Cha Ca La Vong', description: 'Enjoy the famous turmeric fish with dill at this century-old restaurant.' },
              { time: '08:30 PM', title: 'Night Market', description: 'Browse the lively night market in the Old Quarter for souvenirs and local goods.' }
            ],
            // Day 2
            [
              { time: '08:00 AM', title: 'Breakfast at Cafe Giang', description: 'Try the famous egg coffee at this historic cafe.' },
              { time: '09:30 AM', title: 'Ho Chi Minh Complex', description: 'Visit Ho Chi Minh\'s Mausoleum, the Presidential Palace, and One Pillar Pagoda.' },
              { time: '12:00 PM', title: 'Lunch at Quan An Ngon', description: 'Sample various Vietnamese dishes at this popular restaurant.' },
              { time: '02:00 PM', title: 'Temple of Literature', description: 'Explore Vietnam\'s first national university, built in 1070.' },
              { time: '04:00 PM', title: 'Vietnamese Women\'s Museum', description: 'Learn about the role of women in Vietnamese history and culture.' },
              { time: '06:30 PM', title: 'Dinner at Highway 4', description: 'Try unique Northern Vietnamese cuisine with rice wine.' },
              { time: '08:30 PM', title: 'Bia Hoi Corner', description: 'Experience local nightlife at the famous beer corner in the Old Quarter.' }
            ],
            // Day 3
            [
              { time: '07:30 AM', title: 'Breakfast at Banh Mi 25', description: 'Enjoy delicious Vietnamese sandwiches at this popular spot.' },
              { time: '09:00 AM', title: 'Tran Quoc Pagoda', description: 'Visit the oldest Buddhist temple in Hanoi on West Lake.' },
              { time: '11:00 AM', title: 'West Lake Exploration', description: 'Take a leisurely walk or bike ride around Hanoi\'s largest lake.' },
              { time: '12:30 PM', title: 'Lunch at Chim Sao', description: 'Try countryside-style Vietnamese dishes in a charming setting.' },
              { time: '02:30 PM', title: 'Museum of Ethnology', description: 'Learn about Vietnam\'s 54 ethnic groups and their cultures.' },
              { time: '05:30 PM', title: 'Cooking Class', description: 'Learn to prepare Vietnamese dishes with a local chef.' },
              { time: '08:00 PM', title: 'Street Food Tour', description: 'Sample various street foods with a knowledgeable guide.' }
            ]
          ],
          
          foodSpots: [
            {
              name: 'Pho Thin',
              type: 'Noodle Shop',
              priceRange: '$',
              description: 'Known for its unique style of beef pho, stir-fried before adding to the broth, creating a more complex flavor.',
              address: '13 Lo Duc, Hai Ba Trung District'
            },
            {
              name: 'Bun Cha Huong Lien',
              type: 'Local Restaurant',
              priceRange: '$',
              description: 'Made famous by President Obama\'s visit, serving the classic Hanoi dish of grilled pork with rice noodles.',
              address: '24 Le Van Huu, Hai Ba Trung District'
            },
            {
              name: 'Cha Ca La Vong',
              type: 'Traditional Restaurant',
              priceRange: '$$',
              description: 'A century-old restaurant specializing in one dish: turmeric-marinated fish served with noodles and herbs.',
              address: '14 Cha Ca Street, Hoan Kiem District'
            },
            {
              name: 'Cafe Giang',
              type: 'Coffee Shop',
              priceRange: '$',
              description: 'The birthplace of egg coffee, a Hanoi specialty made with egg yolk, coffee, condensed milk, and sugar.',
              address: '39 Nguyen Huu Huan, Hoan Kiem District'
            },
            {
              name: 'Quan An Ngon',
              type: 'Restaurant',
              priceRange: '$$',
              description: 'Features food stalls around a courtyard, each specializing in different dishes from across Vietnam.',
              address: '18 Phan Boi Chau, Hoan Kiem District'
            },
            {
              name: 'Banh Mi 25',
              type: 'Street Food',
              priceRange: '$',
              description: 'Popular spot for Vietnamese sandwiches with various fillings like grilled pork, egg, and pate.',
              address: '25 Hang Ca, Hoan Kiem District'
            }
          ],
          
          activities: [
            {
              name: 'Old Quarter Walking Tour',
              category: 'Sightseeing',
              duration: '2-3 hours',
              description: 'Explore the historic heart of Hanoi with its narrow streets, each named after the goods once sold there. The area is filled with colonial architecture, temples, and lively markets.'
            },
            {
              name: 'Water Puppet Show',
              category: 'Cultural',
              duration: '1 hour',
              description: 'This traditional Vietnamese art form dates back to the 11th century. Shows are performed in a waist-deep pool with wooden puppets controlled by underwater puppeteers.'
            },
            {
              name: 'Temple of Literature Visit',
              category: 'Historical',
              duration: '1-2 hours',
              description: 'Vietnam\'s first national university, built in 1070, dedicated to Confucius. The complex features beautiful gardens, courtyards, and pavilions.'
            },
            {
              name: 'Ho Chi Minh Complex Tour',
              category: 'Historical',
              duration: '2-3 hours',
              description: 'Visit the final resting place of Vietnam\'s revolutionary leader, along with the Presidential Palace and the humble stilt house where Ho Chi Minh lived.'
            },
            {
              name: 'Vietnamese Cooking Class',
              category: 'Food & Culture',
              duration: '3-4 hours',
              description: 'Learn to prepare authentic Vietnamese dishes with local chefs, including a market visit to select fresh ingredients.'
            },
            {
              name: 'Cyclo Ride',
              category: 'Transportation & Sightseeing',
              duration: '1 hour',
              description: 'Experience Hanoi from a traditional three-wheeled bicycle taxi, a relaxed way to see the sights while supporting local drivers.'
            }
          ],
          
          travelTips: [
            {
              category: 'Transportation',
              tips: [
                'Use the Grab app for reliable taxi services with fixed prices.',
                'Motorbike taxis (xe om) are convenient but always agree on a price before riding.',
                'When crossing streets, move slowly and steadily - traffic will flow around you.',
                'Consider renting a bicycle for exploring areas like West Lake.',
                'For day trips, book reputable tour companies in advance from your hotel.'
              ]
            },
            {
              category: 'Safety & Health',
              tips: [
                'Drink only bottled or purified water.',
                'Street food is generally safe, but choose busy stalls with high turnover.',
                'Carry tissue packets as public restrooms may not have toilet paper.',
                'Keep a photocopy of your passport separate from the original.',
                'Apply mosquito repellent, especially at dawn and dusk.'
              ]
            },
            {
              category: 'Cultural Etiquette',
              tips: [
                'Remove shoes when entering homes, temples, and some businesses.',
                'Ask permission before taking photos of people, especially in rural areas.',
                'Dress conservatively when visiting religious sites (cover shoulders and knees).',
                'Use both hands when giving or receiving items from elders or officials.',
                'Public displays of affection are generally frowned upon.'
              ]
            },
            {
              category: 'Money Matters',
              tips: [
                'Many places accept only cash, so keep small bills handy.',
                'ATMs are widely available in Hanoi but may charge foreign transaction fees.',
                'Notify your bank of travel plans to avoid card blocks.',
                'Bargaining is expected in markets, but not in established shops or restaurants.',
                'Check your change carefully, especially with larger bills.'
              ]
            }
          ],
          
          packingList: [
            {
              category: 'Clothing',
              items: [
                'Lightweight, breathable shirts',
                'Long pants/skirts (for temple visits)',
                'Walking shoes or sandals',
                'Rain jacket or umbrella',
                'Light sweater (for air-conditioned places)',
                'Hat for sun protection',
                'Modest swimwear (if visiting resorts)'
              ]
            },
            {
              category: 'Health & Hygiene',
              items: [
                'Sunscreen',
                'Insect repellent',
                'Hand sanitizer',
                'Travel tissue packs',
                'Prescription medications',
                'Basic first aid items',
                'Stomach relief medicine'
              ]
            },
            {
              category: 'Electronics',
              items: [
                'Universal power adapter',
                'Camera',
                'Power bank',
                'Phone charger',
                'Earbuds/headphones',
                'Voltage converter (if needed)'
              ]
            },
            {
              category: 'Documents',
              items: [
                'Passport (valid for 6+ months)',
                'Visa documentation',
                'Travel insurance information',
                'Hotel reservation details',
                'Emergency contact information',
                'Credit/debit cards',
                'Small amount of USD for emergencies'
              ]
            }
          ]
        };
      }
    }
  };
  </script>