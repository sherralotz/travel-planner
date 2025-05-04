<template>
  <router-view />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { auth } from './config/firebase-config';
import { useRouter } from 'vue-router';
import { provide } from 'vue';
import { authReady } from './authReady'; // Import the global ref

const user = ref(null);
const loading = ref(true);
const router = useRouter();

onMounted(() => {
  const unsubscribe = auth.onAuthStateChanged((currentUser) => {
    user.value = currentUser;
    loading.value = false;
    authReady.value = true; // Set the global ref to true

    // Redirect if necessary after initial auth state is known
    if (currentUser && router.currentRoute.value.path === '/login') {
      router.push('/');
    } else if (!currentUser && router.currentRoute.value.path !== '/login') {
      router.push('/login');
    }
  });

  return () => unsubscribe();
});

provide('currentUser', user);
</script>