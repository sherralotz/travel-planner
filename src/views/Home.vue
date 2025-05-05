<script setup>
import PlansList from './PlansList.vue';
import Header from '../components/Header.vue';
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
      <div class="bg-white rounded-lg shadow-sm w-full"> 
        <Header></Header>
        <PlansList/> 
      </div>
    </div> 
  </div>
</template>