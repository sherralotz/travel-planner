<template>
    <div class="border rounded-lg p-4">
      <h3 class="font-bold">{{ spot.name }}</h3>
      <p class="text-sm text-gray-600">{{ spot.type }} • {{ spot.priceRange }}</p>
      <p class="mt-2">{{ spot.description }}</p>
      <p class="mt-1 text-sm">Address: {{ spot.address }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      spot: {
        type: Object,
        required: true
      }
    }
  }
  </script>