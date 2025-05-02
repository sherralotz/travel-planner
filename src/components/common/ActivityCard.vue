<template>
    <div class="border rounded-lg p-4">
      <h3 class="font-bold">{{ activity.name }}</h3>
      <p class="text-sm text-gray-600">{{ activity.category }} • {{ activity.duration }}</p>
      <p class="mt-2">{{ activity.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      activity: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  