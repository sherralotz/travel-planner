<template>
  <div class="checklist">
    <ul class="checklist-items mt-4 space-y-2" ref="incompleteItemsContainer">
      <li
        v-for="(item, index) in incompleteItems"
        :key="item.id"
        class="flex items-center justify-between bg-white rounded-md p-2 shadow-sm cursor-grab"
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
            class="mr-2 rounded-md focus:ring-blue-500 h-5 w-5"
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
        <FontAwesomeIcon :icon="faClose"  class="me-3"/> 
        </button>
      </li>
      <li
        class="flex items-center justify-between bg-white rounded-md p-2 shadow-sm cursor-pointer no-drag"
        @click="createNewItem"
      >
        <div class="flex items-center text-gray-500"> 
          <FontAwesomeIcon :icon="faPlus" class="me-2"/> 
          <span>Add new item</span>
        </div>
      </li>
    </ul>
    <div v-if="completedItems.length > 0" class="mt-8">
      <h3 class="text-lg font-semibold mb-2 text-gray-700">Completed Items</h3>
      <ul class="checklist-items space-y-2" ref="completedItemsContainer">
        <li
          v-for="(item, index) in completedItems"
          :key="item.id"
          class="flex items-center justify-between bg-white rounded-md p-2 shadow-sm opacity-50 line-through text-gray-400"
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
    <div v-if="items.length === 0" class="text-gray-500 text-center mt-4">
      Click "Add new item" to get started!
    </div>
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
  isEditing: {
    type: Boolean,
    default: false,
  },
});

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

// Load items from local storage on component creation
onMounted(() => {
  if (typeof window !== 'undefined') {
    const savedItems = localStorage.getItem('checklistItems');
    const passedItems = props.initialItems;
    if (passedItems && passedItems.length) {
      items.value = props.initialItems.map((item) => ({
        id: item.id || uuidv4(), // Use existing ID or generate a new one
        text: item.text || '',
        completed: item.completed || false,
      }));
    } else if (savedItems) {
      try {
        items.value = JSON.parse(savedItems).map((item) => ({
          ...item,
          id: item.id || uuidv4(), // Ensure all items have an ID
        }));
      } catch (error) {
        console.error('Failed to parse saved checklist items:', error);
        items.value = [];
        localStorage.removeItem('checklistItems'); // Clear invalid data
      }
    }
  }

  // Initialize Sortable.js for incomplete items only
  if (incompleteItemsContainer.value) {
    sortableInstance = new Sortable(incompleteItemsContainer.value, {
      animation: 150,
      filter: '.no-drag', // Don't allow dragging on "add new item" element
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
  if (typeof window !== 'undefined') {
    localStorage.setItem('checklistItems', JSON.stringify(items.value));
  }
};

watch(items, saveItems, { deep: true });

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
  }
};

const deleteItem = (id) => {
  // If we're currently editing this item, stop editing
  if (editingItemId.value === id) {
    editingItemId.value = null;
  }

  items.value = items.value.filter((item) => item.id !== id);
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
</script>

<style>
.checklist {
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 1.5rem;
}

.checklist-header {
  display: flex;
  flex-direction: column;
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  margin-bottom: 1rem;
}

.checklist-header h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  @media (min-width: 640px) {
    margin-bottom: 0;
  }
}

.checklist-items {
  margin-top: 1rem;
  space-y: 0.5rem;
}

.checklist-items li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 0.375rem;
  padding: 0.75rem;
  box-shadow: 0 1px 2px rgba(28, 19, 19, 0.05);
  cursor: grab;
}

.checklist-items li.completed {
  opacity: 0.5;
  text-decoration: line-through;
  color: #9ca3af;
  cursor: not-allowed;
}

.checklist-items li.cursor-grabbing {
  cursor: grabbing;
}
</style>