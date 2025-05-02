<template>
    <div 
      class="border rounded-lg p-4 cursor-pointer hover:bg-blue-50 transition"
      :class="{'border-blue-500 bg-blue-50': isSelected}"
      @click="$emit('select', destination)"
    >
      <h3 class="font-bold">{{ destination.name }}</h3>
      <p class="text-sm text-gray-600">{{ destination.country }}</p>
      <p class="mt-2 text-sm">{{ destination.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      destination: {
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