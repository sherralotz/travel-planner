<script setup>
import { ref, onMounted } from 'vue';
import { signInAnonymously } from "firebase/auth";
import { auth, provider, signInWithPopup, signOut } from '../config/firebase-config';
import { useRouter } from 'vue-router';

const router = useRouter();
const isLoading = ref(false);
const error = ref(null);

// Check if user is already logged in
onMounted(() => {
  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (user) {
      // User is already signed in, redirect to home
      router.push('/');
    }
  });
  
  // Cleanup subscription on component unmount
  return () => unsubscribe();
});

// Sign in with Google
const signInWithGoogle = async () => {
  isLoading.value = true;
  error.value = null;
  
  try {
    await signInWithPopup(auth, provider);
    router.push('/');
  } catch (err) {
    error.value = err.message;
    console.error("Error signing in with Google:", err);
  } finally {
    isLoading.value = false;
  }
};

// Sign in as guest
const signInAsGuest = async () => {
  isLoading.value = true;
  error.value = null;
  
  try {
    await signInAnonymously(auth);
    router.push('/');
  } catch (err) {
    error.value = err.message;
    console.error("Error signing in as guest:", err);
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="min-h-dvh bg-gray-50 flex items-center justify-center p-4">
    <div class="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
      <h1 class="text-2xl font-bold mb-6 text-center">My Travel Planner</h1> 
      
      <div v-if="error" class="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
        {{ error }}
      </div>
      
      <div class="space-y-4">
        
        <button 
          @click="signInAsGuest" 
          class="w-full bg-gray-800 text-white rounded-md p-3 font-medium hover:bg-gray-700 transition-colors disabled:opacity-70"
          :disabled="isLoading"
        >
          Continue as Guest
        </button>
        <div className="relative flex items-center justify-center my-6">
            <div className="absolute left-0 w-full border-t border-black"></div>
            <span className="relative z-10 bg-white px-4 font-semibold text-gray-700">
              OR
            </span>
          </div>
        <button 
          @click="signInWithGoogle" 
          class="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-md p-3 font-medium hover:bg-gray-50 transition-colors disabled:opacity-70"
          :disabled="isLoading"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
            <path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
            <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
            <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
          </svg>
          Continue with Google
        </button>
        
      </div>
      
      <div v-if="isLoading" class="mt-4 text-center text-gray-500">
        Signing in...
      </div>
    </div>
  </div>
</template>