<script setup>
import { ref, onMounted } from 'vue';
import Tabs from './components/Tabs.vue';
import Login from './components/Login.vue';
import { auth } from './config/firebase-config';

const user = ref(null);
const loading = ref(true);

onMounted(() => {
  // Set up authentication state observer
  const unsubscribe = auth.onAuthStateChanged((currentUser) => {
    user.value = currentUser;
    loading.value = false;
  });
  
  // Cleanup the observer when the component unmounts
  return () => unsubscribe();
});
</script>

<template>
  <main>
    <!-- Loading state -->
    <div v-if="loading" class="h-dvh flex items-center justify-center bg-gray-50">
      <div class="text-center">
        <div class="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
        <p class="text-gray-600">Loading...</p>
      </div>
    </div>
    
    <!-- User is authenticated -->
    <div v-else-if="user" class="h-dvh bg-gray-50 overflow-hidden">
      <div class="">
        <div class="flex justify-between items-center mb-4 p-4">
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
          <Tabs />
        </div>
      </div>
    </div>
    
    <!-- User is not authenticated -->
    <Login v-else />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
 
</style>
