<template>
  <div class="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
    <h1 class="text-3xl font-bold text-indigo-700 mb-8">Your Travel Plans</h1>
    
    <button 
      @click="showCreatePlan = true"
      class="mb-8 px-5 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors shadow-md flex items-center gap-2"
    >
      <span class="i-lucide-plus-circle w-5 h-5"></span>
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
          class="hover:bg-indigo-50 transition-colors"
        >
          <router-link 
            :to="`/plan/${plan.id}`"
            class="flex items-center justify-between p-4"
          >
            <span class="font-medium text-indigo-800">{{ plan.title }}</span>
            <span class="i-lucide-chevron-right w-5 h-5 text-gray-400"></span>
          </router-link>
        </li>
      </ul>
    </div>
    
    <!-- Empty state -->
    <div 
      v-else
      class="text-center py-16 px-4 bg-gray-50 rounded-xl border border-dashed border-gray-300"
    >
      <div class="i-lucide-map w-12 h-12 mx-auto mb-4 text-gray-400"></div>
      <p class="text-lg text-gray-600">You haven't created any travel plans yet.</p>
      <p class="text-sm text-gray-500 mt-2">Click "Create a New Plan" to start planning your next adventure!</p>
    </div>
  </div>
</template>
  
  <script setup>
  import { ref, onMounted, inject } from 'vue';
  import { db } from '@/config/firebase-config';
  import { collection, query, where, getDocs } from 'firebase/firestore';
  import CreatePlan from '@/components/CreatePlan.vue';
  
  const currentUser = inject('currentUser');
  const plans = ref([]);
  const loading = ref(true);
  const error = ref(null);
  const showCreatePlan = ref(false);
  
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
      //console.log(`currentUser: ${currentUser.value.uid}`)
      const plansCollection = collection(db, `users/${currentUser.value.uid}/travelPlans`);
      const q = query(plansCollection, where('createdBy', '==', currentUser.value.uid));
      const querySnapshot = await getDocs(q);
      plans.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
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