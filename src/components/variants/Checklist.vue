<template>
  <div class="checklist p-3" :data-checklist-id="checklistId">  
    <!-- Editable Title -->
    <div class="mb-3">
      <h2 
        v-if="!isEditingTitle" 
        @click="startEditingTitle" 
        class="text-xl font-semibold cursor-text truncate"
        :class="{'text-gray-400': !title}"
      >
        {{ title || 'Title' }}
      </h2>
      <input
        v-else
        type="text"
        v-model="titleText"
        @keyup.enter="finishEditingTitle"
        @blur="finishEditingTitle"
        @keyup.esc="cancelEditingTitle"
        class="text-xl font-semibold w-full rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-1"
 
        v-focus
      />
    </div>
    
    <ul class="checklist-items mt-1" ref="incompleteItemsContainer">
      <li
        v-for="(item, index) in incompleteItems"
        :key="item.id"
        class="flex items-center justify-between bg-white p-2 mb-1 cursor-grab rounded-md border border-gray-200 shadow-sm"
        :class="{
          'cursor-grabbing': isDragging && draggedIndex === index,
        }"
        @mousedown="startDrag(index, $event)"
        @mouseup="endDrag"
        :data-id="item.id"
      >
        <div class="flex items-center flex-grow"> 
          <FontAwesomeIcon :icon="faBars" v-if="!item.completed" class="me-3"/> 
          <input
            type="checkbox"
            :checked="item.completed"
            @change="toggleItem(item.id)"
            class="mr-2 rounded-md focus:ring-blue-500 h-5 w-5 cursor-pointer"
          />
          <span
            v-if="editingItemId !== item.id"
            @click="startEditing(item.id)"
            class="flex-grow cursor-text"
          >{{ item.text || 'New item' }}</span>
          <input
            v-else
            type="text"
            v-model="editingText"
            @keyup.enter="finishEditingAndCreateNew(index)"
            @blur="finishEditing"
            @keyup.esc="cancelEditing"
            class="flex-grow rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-1"
            v-focus
          />
        </div>
        <button
          @click="deleteItem(item.id)"
          class="text-gray-500 hover:text-red-500 transition-colors focus:outline-none"
        >
        <FontAwesomeIcon :icon="faClose" class="me-3"/> 
        </button>
      </li>
    </ul>
    <!-- ADD NEW ITEM ROW -->
    <div
      class="flex items-center justify-between bg-white p-2 cursor-pointer rounded-md border border-gray-200 shadow-sm"
      @click="createNewItem"
    >
      <div class="flex items-center text-gray-500"> 
        <FontAwesomeIcon :icon="faPlus" class="me-2"/> 
        <span>Add new item</span>
      </div>
    </div>
    
    <!-- COMPLETED ITEMS -->
    <div v-if="completedItems.length > 0" class="mt-3">
      <h3 class="text-lg font-semibold mb-2 text-gray-700">Completed Items</h3>
      <ul class="checklist-items space-y-2" ref="completedItemsContainer">
        <li
          v-for="(item, index) in completedItems"
          :key="item.id"
          class="flex items-center justify-between bg-white rounded-md p-2 shadow-sm opacity-50 line-through text-gray-400 border"
          :data-id="item.id"
        >
          <div class="flex items-center">
            <input
              type="checkbox"
              :checked="item.completed"
              @change="toggleItem(item.id)"
              class="mr-2 rounded-md focus:ring-blue-500 h-5 w-5"
            />
            <span
              class="line-through text-gray-400 cursor-text"
              @click="startEditing(item.id)"
            >{{ item.text }}</span>
          </div>
          <button
            @click="deleteItem(item.id)"
            class="text-gray-500 hover:text-red-500 transition-colors focus:outline-none"
          >
          <FontAwesomeIcon :icon="faClose" class="me-3"/>  
          </button>
        </li>
      </ul>
    </div>
    <!-- <div v-if="items.length === 0" class="text-gray-500 text-center mt-4">
      Click "Add new item" to get started!
    </div> -->
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, onBeforeUnmount, nextTick } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { Sortable } from 'sortablejs';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars, faClose, faPlus } from '@fortawesome/free-solid-svg-icons';
  
const props = defineProps({
  initialItems: {
    type: Array,
    default: () => [],
  },
  initialTitle: {
    type: String,
    default: '',
  },
  isEditing: {
    type: Boolean,
    default: false,
  },
  storageKey: {
    type: String,
    default: null // If provided, will use this key for localStorage
  },
  checklistId: {
    type: String,
    default: () => uuidv4(), // Unique identifier for this checklist instance
  }
});

const emit = defineEmits(['update:items', 'update:title', 'change']);

// Title functionality
const title = ref(props.initialTitle || '');
const isEditingTitle = ref(false);
const titleText = ref('');

// Items data
const items = ref([]);
const incompleteItemsContainer = ref(null);
const completedItemsContainer = ref(null);
let sortableInstance = null;
const isDragging = ref(false);
const draggedIndex = ref(null);

// Editing functionality
const editingItemId = ref(null);
const editingText = ref('');

// Custom focus directive
const vFocus = {
  mounted: (el) => el.focus(),
};

// Get the storage key to use
const getStorageKey = () => {
  if (props.storageKey) {
    return props.storageKey;
  }
  return `checklist-${props.checklistId}`;
};

// Load items from local storage on component creation
onMounted(() => {
  const storageKey = getStorageKey();
  
  // console.log('initialItems', JSON.parse(JSON.stringify(props.initialItems)))
  // First check if we have initialItems passed as prop
  if (props.initialItems && props.initialItems.length) {
    items.value = props.initialItems.map((item) => ({
      id: item.id || uuidv4(), // Use existing ID or generate a new one
      text: item.text || '',
      completed: item.completed || false,
    }));
  } 
   

  // Initialize Sortable.js for incomplete items only
  if (incompleteItemsContainer.value) {
    sortableInstance = new Sortable(incompleteItemsContainer.value, {
      animation: 150,
      onEnd: (evt) => {
        const newIndex = evt.newIndex;
        const oldIndex = evt.oldIndex;

        // Reorder the incomplete items array
        const incomplete = items.value.filter((item) => !item.completed);
        const movedItem = incomplete.splice(oldIndex, 1)[0];
        incomplete.splice(newIndex, 0, movedItem);

        // Recombine with completed items, keeping original order of completed
        const completed = items.value.filter((item) => item.completed);
        items.value = [...incomplete, ...completed];

        isDragging.value = false;
        draggedIndex.value = null;
        
        emitChange();
      },
      onStart: (evt) => {
        // Don't start drag if we're editing
        if (editingItemId.value !== null) {
          evt.preventDefault();
          return false;
        }

        draggedIndex.value = evt.oldIndex;
        isDragging.value = true;
      },
    });
  }
});

// Save items to local storage whenever the items array changes
const saveItems = () => { 
  // Emit update events
  emit('update:items', items.value);
  emit('update:title', title.value);
  emitChange();
};

// Emit change event with both title and items
const emitChange = () => { 
  emit('change', {
    id: props.checklistId,
    title: title.value,
    items: items.value
  });
  emit('update:title', title.value); 
};

watch(items, saveItems, { deep: true });
watch(title, saveItems);

// Title editing functions
const startEditingTitle = () => {
  titleText.value = title.value;
  isEditingTitle.value = true;
};

const finishEditingTitle = () => {
  title.value = titleText.value.trim();
  isEditingTitle.value = false;
  emitChange();
};

const cancelEditingTitle = () => {
  isEditingTitle.value = false;
};

// Item functions
const createNewItem = () => {
  const newItemObj = {
    id: uuidv4(),
    text: '',
    completed: false,
  };
  // Add the new item to the end of the incompleteItems list instead of the beginning
  const incomplete = items.value.filter((item) => !item.completed);
  incomplete.push(newItemObj);
  const completed = items.value.filter((item) => item.completed);
  items.value = [...incomplete, ...completed];

  // Start editing the new item
  nextTick(() => {
    startEditing(newItemObj.id);
  });
};

const startEditing = (id) => {
  const item = items.value.find((item) => item.id === id);
  if (item) {
    editingItemId.value = id;
    editingText.value = item.text;
    // The focus will be handled by the v-focus directive
  }
};

const finishEditing = () => {
  if (editingItemId.value !== null) {
    const item = items.value.find((item) => item.id === editingItemId.value);
    if (item) {
      item.text = editingText.value;
    }
    editingItemId.value = null;
    emitChange();
  }
};

const cancelEditing = () => {
  editingItemId.value = null;
};

const finishEditingAndCreateNew = (index) => {
  finishEditing();

  // Create a new item after the current one
  const newItemObj = {
    id: uuidv4(),
    text: '',
    completed: false,
  };

  // Insert the new item after the current one in the incomplete items
  const incomplete = items.value.filter((item) => !item.completed);
  incomplete.splice(index + 1, 0, newItemObj);
  const completed = items.value.filter((item) => item.completed);
  items.value = [...incomplete, ...completed];

  // Start editing the new item
  nextTick(() => {
    startEditing(newItemObj.id);
  });
};

const toggleItem = (id) => {
  const item = items.value.find((item) => item.id === id);
  if (item) {
    item.completed = !item.completed;

    // If we're currently editing this item, stop editing
    if (editingItemId.value === id) {
      finishEditing();
    }

    // Reorder items to maintain incomplete/complete separation
    const completedItems = items.value.filter((item) => item.completed);
    const incompleteItems = items.value.filter((item) => !item.completed);
    items.value = [...incompleteItems, ...completedItems];
    
    emitChange();
  }
};

const deleteItem = (id) => {
  // If we're currently editing this item, stop editing
  if (editingItemId.value === id) {
    editingItemId.value = null;
  }

  items.value = items.value.filter((item) => item.id !== id);
  emitChange();
};

const incompleteItems = computed(() => {
  return items.value.filter((item) => !item.completed);
});

const completedItems = computed(() => {
  return items.value.filter((item) => item.completed);
});

const startDrag = (index, event) => {
  // Don't start drag if we're clicking on input elements or if we're editing
  if (event.target.tagName === 'INPUT' ||
      event.target.tagName === 'BUTTON' ||
      editingItemId.value !== null) {
    return;
  }

  if (!items.value[index].completed) { // Only allow dragging incomplete items
    draggedIndex.value = index;
    isDragging.value = true;
  }
};

const endDrag = () => {
  isDragging.value = false;
  draggedIndex.value = null;
};

onBeforeUnmount(() => {
  // Destroy Sortable.js instance to prevent memory leaks
  if (sortableInstance) {
    sortableInstance.destroy();
    sortableInstance = null;
  }
});

// Expose methods and data for parent components
defineExpose({
  items,
  title,
  checklistId: props.checklistId,
  reset: () => {
    items.value = [];
    title.value = '';
    saveItems();
  },
  setTitle: (newTitle) => {
    title.value = newTitle;
    saveItems();
  },
  setItems: (newItems) => {
    items.value = newItems.map(item => ({
      id: item.id || uuidv4(),
      text: item.text || '',
      completed: item.completed || false
    }));
    saveItems();
  }
});
</script>

<style scoped>
/* You can add additional styling here if needed */
</style>