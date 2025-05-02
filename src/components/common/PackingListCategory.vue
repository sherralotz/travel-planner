<template>
    <div class="border rounded-lg p-4">
      <h3 class="font-bold">{{ category.category }}</h3>
      <div class="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        <div v-for="(item, index) in category.items" :key="index" class="flex items-center">
          <input type="checkbox" :id="'item-' + categoryIndex + '-' + index" class="mr-2">
          <label :for="'item-' + categoryIndex + '-' + index">{{ item }}</label>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      category: {
        type: Object,
        required: true
      },
      categoryIndex: {
        type: Number,
        required: true
      }
    }
  }
  </script>