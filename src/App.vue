<script setup> 
import Tabs from './components/Tabs.vue' 
</script>

<template>  
  <main>
    <div class="h-dvh bg-gray-50 p-4"> 
      <div class="">
        <h1 class="text-2xl font-bold mb-4">Travel Planner</h1>
        <div class="bg-white rounded-lg shadow-sm w-full">
          <Tabs />  
        </div>
      </div> 
    </div>
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
