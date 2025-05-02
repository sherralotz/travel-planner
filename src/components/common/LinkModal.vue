<template>
    <div v-if="isVisible" class="fixed z-20 inset-0 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center">
      <div class="relative bg-white rounded-lg shadow-xl w-full max-w-md">
        <div class="flex items-start justify-between p-4 border-b rounded-t">
          <h3 class="text-xl font-semibold text-gray-900">
            {{ title }}
          </h3>
          <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" @click="closeModal">
        <FontAwesomeIcon :icon="faClose" class="me-1"/> 
          </button>
        </div>
        <div class="p-6 space-y-4">
          <div>
            <label for="label" class="block mb-2 text-sm font-medium text-gray-900">Label</label>
            <input type="text" id="label" v-model="linkData.label" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Link Text" required>
          </div>
          <div>
            <label for="url" class="block mb-2 text-sm font-medium text-gray-900">URL</label>
            <input type="url" id="url" v-model="linkData.url" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="https://example.com" required>
          </div>
        </div>
        <div class="flex items-center p-4 space-x-2 border-t border-gray-200 rounded-b">
          <button @click="saveLink" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Save Link</button>
          <button @click="closeModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900">Cancel</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, inject } from 'vue';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { faClose } from '@fortawesome/free-solid-svg-icons';
  
  const props = defineProps({
    title: {
      type: String,
      default: 'Add Link'
    },
    isVisible: { // Add isVisible prop
      type: Boolean,
      default: false,
    }
  });
  
  const emit = defineEmits(['save', 'close']);
  
  const isVisible = computed({ // Use a computed property
    get() {
      return props.isVisible;
    },
    set(value) {
      // We don't directly set the prop, but we can emit an event if needed
      // In this case, we don't need to emit, because the parent component is controlling isVisible
    },
  });
  
  const linkData = ref({ label: '', url: '' });
  
  const closeModal = () => {
    isVisible.value = false;
    emit('close');
  };
  
  const saveLink = () => {
    emit('save', { ...linkData.value });
    closeModal();
  };
  
  // Expose the openModal function.  This is no longer needed.
  // defineExpose({
  //   openModal
  // });
  </script>
  