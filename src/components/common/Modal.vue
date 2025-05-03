<template>
    <div class="fixed inset-0 bg-black opacity-50 z-30"></div>
    <div class="fixed inset-0 z-50 flex justify-center items-center">
        <div class="bg-white rounded-2xl shadow-xl w-[95%] max-w-lg"> 
            <div class="modal-body p-4">
                <slot>
                    <p>This is the default modal content.</p>
                </slot>
            </div> 
        </div>
    </div> 
</template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '500px',
    },
    maxWidth: {
      type: String,
      default: '80vw',
    },
  });
  
  const emit = defineEmits(['update:modelValue', 'close']);
  
  const isOpen = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      emit('update:modelValue', value);
      if (!value) {
        emit('close'); // Emit a separate 'close' event for convenience
      }
    },
  });
  
  const modalStyles = computed(() => ({
    width: props.width,
    maxWidth: props.maxWidth,
  }));
  
  const closeModal = () => {
    isOpen.value = false;
  };
  </script>
  
  <style scoped> 
  </style>