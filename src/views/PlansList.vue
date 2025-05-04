<template>
    <div>
      <h1>Your Travel Plans</h1>
  
      <button @click="showCreatePlan = true">Create a New Plan</button>
  
      <CreatePlan v-if="showCreatePlan" @planCreated="fetchPlans" @close="showCreatePlan = false" />
  
      <div v-if="loading">Loading plans...</div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else-if="plans.length > 0">
        <ul>
          <li v-for="plan in plans" :key="plan.id">
            <router-link :to="`/plan/${plan.id}`">{{ plan.title }}</router-link>
          </li>
        </ul>
      </div>
      <div v-else>
        <p>You haven't created any travel plans yet.</p>
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
      console.log(`currentUser: ${currentUser.value.uid}`)
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