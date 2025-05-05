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
          placeholder="Enter checklist title"
          v-focus
        />
      </div>
  
      <!-- Incomplete Items -->
      <ul class="checklist-items mt-1" ref="incompleteItemsContainer">
        <li
          v-for="(item, index) in incompleteItems"
          :key="item.id"
          class="flex items-center justify-between bg-white p-2 mb-1 cursor-grab rounded-md border border-gray-200 shadow-sm"
          :class="{'cursor-grabbing': isDragging && draggedIndex === index}"
          @mousedown="startDrag(index, $event)"
          @mouseup="endDrag"
          :data-id="item.id"
        >
          <div class="flex items-center flex-grow">
            <FontAwesomeIcon :icon="faBars" v-if="!item.completed" class="me-3" />
            <input
              type="checkbox"
              :checked="item.completed"
              @change="toggleItem(item.id)"
              class="mr-2 rounded-md focus:ring-blue-500 h-5 w-5 cursor-pointer"
            />
            <span
              v-if="editingItemId !== item.id"
              @click="startEditing(item.id)"
              :class="{'text-gray-400': !item.text }"
              class="flex-grow cursor-text "
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
  
      <!-- Add New Item Row -->
      <div class="flex items-center justify-between bg-white p-2 cursor-pointer rounded-md border border-gray-200 shadow-sm" @click="createNewItem">
        <div class="flex items-center text-gray-500">
          <FontAwesomeIcon :icon="faPlus" class="me-2"/>
          <span>Add new item</span>
        </div>
      </div>
  
      <!-- Completed Items -->
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
              <span class="line-through text-gray-400 cursor-text" @click="startEditing(item.id)">{{ item.text }}</span>
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
      </div> -->
    </div>
  </template>
  
  <script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick, watch } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { Sortable } from 'sortablejs';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars, faClose, faPlus } from '@fortawesome/free-solid-svg-icons';

const props = defineProps({
  initialItems: { type: Array, default: () => [] },
  initialTitle: { type: String, default: '' },
  isEditing: { type: Boolean, default: false },
  storageKey: { type: String, default: null },
  checklistId: { type: String, default: () => uuidv4() },
});

const emit = defineEmits(['update:title', 'change']);

// Title functionality
const title = ref(props.initialTitle || '');
const isEditingTitle = ref(false);
const titleText = ref('');

// Items data
const items = ref([]);
const isDragging = ref(false);
const draggedIndex = ref(null);

// Editing functionality
const editingItemId = ref(null);
const editingText = ref('');

// Focus directive
const vFocus = { mounted: (el) => el.focus() };

const getStorageKey = () => props.storageKey || `checklist-${props.checklistId}`;

onMounted(() => {
  const storageKey = getStorageKey();
  
  if (props.initialItems.length) {
    items.value = props.initialItems.map((item) => ({ ...item, id: item.id || uuidv4() }));
  } else if (storageKey && typeof window !== 'undefined') {
    const savedItems = localStorage.getItem(`${storageKey}-items`);
    const savedTitle = localStorage.getItem(`${storageKey}-title`);
    
    if (savedItems) items.value = JSON.parse(savedItems).map(item => ({ ...item, id: item.id || uuidv4() }));
    if (savedTitle) title.value = savedTitle;
  }

  if (props.isEditing) startEditingTitle();

  if (props.initialItems.length === 0 && storageKey && typeof window !== 'undefined') {
    const incompleteItemsContainer = ref(null);
    new Sortable(incompleteItemsContainer.value, { 
      animation: 150,
      onEnd: (evt) => handleDrag(evt)
    });
  }
});

// Store the saveItems function in a ref to avoid the ReferenceError
const saveItems = () => {
  const storageKey = getStorageKey();
  if (storageKey && typeof window !== 'undefined') {
    localStorage.setItem(`${storageKey}-items`, JSON.stringify(items.value));
    localStorage.setItem(`${storageKey}-title`, title.value);
  } 
  emit('update:title', title.value);
  emitChange();
};

const saveItemsRef = ref(saveItems);

// Watch the items and title, using the ref to avoid the initialization issue
watch(items, () => saveItemsRef.value(), { deep: true });
watch(title, () => saveItemsRef.value());

// Title editing methods
const startEditingTitle = () => {
  titleText.value = title.value;
  isEditingTitle.value = true;
};

const finishEditingTitle = () => {
  title.value = titleText.value.trim();
  isEditingTitle.value = false;
  emitChange();
};

const cancelEditingTitle = () => { isEditingTitle.value = false; };

// Item editing methods
const createNewItem = () => {
  const newItem = { id: uuidv4(), text: '', completed: false };
  items.value.push(newItem);
  nextTick(() => startEditing(newItem.id));
};

const startEditing = (id) => { 
  const item = items.value.find(item => item.id === id);
  if (item) { editingItemId.value = id; editingText.value = item.text; }
};

const finishEditing = () => {
  if (editingItemId.value !== null) {
    const item = items.value.find(item => item.id === editingItemId.value);
    if (item) item.text = editingText.value;
    editingItemId.value = null;
    emitChange();
  }
};

const cancelEditing = () => { editingItemId.value = null; };

const finishEditingAndCreateNew = (index) => {
  finishEditing();
  const newItem = { id: uuidv4(), text: '', completed: false };
  items.value.splice(index + 1, 0, newItem);
  nextTick(() => startEditing(newItem.id));
};

const toggleItem = (id) => {
  const item = items.value.find(item => item.id === id);
  if (item) {
    item.completed = !item.completed;
    const incompleteItems = items.value.filter(item => !item.completed);
    const completedItems = items.value.filter(item => item.completed);
    items.value = [...incompleteItems, ...completedItems];
    emitChange();
  }
};

const deleteItem = (id) => {
  items.value = items.value.filter(item => item.id !== id);
  emitChange();
};

const emitChange = () => {
  emit('change', { id: props.checklistId, title: title.value, items: items.value });
};

const incompleteItems = computed(() => items.value.filter(item => !item.completed));
const completedItems = computed(() => items.value.filter(item => item.completed));

const startDrag = (index, event) => {
  if (event.target.tagName === 'INPUT' || event.target.tagName === 'BUTTON' || editingItemId.value !== null) return;
  draggedIndex.value = index;
  isDragging.value = true;
};

const endDrag = () => { isDragging.value = false; draggedIndex.value = null; };

onBeforeUnmount(() => {
  if (sortableInstance) sortableInstance.destroy();
});

defineExpose({
  items,
  title,
  checklistId: props.checklistId,
  reset: () => { items.value = []; title.value = ''; saveItems(); },
  setTitle: (newTitle) => { title.value = newTitle; saveItems(); },
  setItems: (newItems) => { items.value = newItems.map(item => ({ ...item, id: item.id || uuidv4() })); saveItems(); },
});
</script>

  
  <style scoped>
  /* Add your custom styles here */
  </style>
  