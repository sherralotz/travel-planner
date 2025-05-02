<template>
    <div class="border rounded-lg p-4">
      <h3 class="font-bold">{{ category.category }}</h3>
      <ul class="mt-2 space-y-2">
        <li v-for="(tip, index) in category.tips" :key="index" class="ml-4 list-disc">
          {{ tip }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      category: {
        type: Object,
        required: true
      }
    }
  }
  </script>