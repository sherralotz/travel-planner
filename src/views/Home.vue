<script setup>
import PlansList from './PlansList.vue';
import Grid from '../components/variants/Grid.vue';
import { auth } from '../config/firebase-config';
import { ref, onMounted } from 'vue';

const user = ref(null);

onMounted(() => {
  user.value = auth.currentUser;
});
</script>

<template>
  <div class="h-dvh bg-gray-50 ">
    <div class="">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold">My Travel Planner</h1>
        <button 
          @click="auth.signOut()" 
          class="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1"
        >
          <span>Sign Out</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </button>
      </div>
      <div class="bg-white rounded-lg shadow-sm w-full">
        
        <PlansList/> 
      </div>
    </div> 
  </div>
</template>