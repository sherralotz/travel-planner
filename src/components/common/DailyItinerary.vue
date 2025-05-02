<template>
    <div class="border rounded-lg p-4">
      <h3 class="font-bold text-lg border-b pb-2 mb-3">Day {{ dayNumber }}</h3>
      <div class="space-y-4">
        <div v-for="(activity, index) in activities" :key="index" class="flex">
          <div class="font-medium w-20 text-gray-600">{{ activity.time }}</div>
          <div>
            <div class="font-medium">{{ activity.title }}</div>
            <div class="text-sm text-gray-600">{{ activity.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      dayNumber: {
        type: Number,
        required: true
      },
      activities: {
        type: Array,
        required: true
      }
    }
  }
  </script>