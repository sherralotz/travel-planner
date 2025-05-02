<template>
    <div 
      class="border rounded-lg p-4 cursor-pointer hover:bg-blue-50 transition"
      :class="{'border-blue-500 bg-blue-50': isSelected}"
      @click="$emit('toggle')"
    >
      <h3 class="font-bold">{{ preference.name }}</h3>
      <p class="text-sm text-gray-600">{{ preference.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      preference: {
        type: Object,
        required: true
      },
      isSelected: {
        type: Boolean,
        default: false
      }
    }
  }
  </script>
  