<template>
  <div class="checklist p-3" :data-checklist-id="checklistId">
    <div class="mb-3">
      <h2
        v-if="!isEditingTitle"
        @click="startEditingTitle"
        class="text-xl font-semibold cursor-text truncate "
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
        class="text-xl font-semibold w-full rounded-md border-gray-300 focus:outline-none p-1"

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
            v-if="!editingItem || editingItem.id !== item.id"
            @click="startEditing(item)"
            class="flex-grow cursor-text"
              :class="{'text-gray-400': !item.text }"
          >{{ item.text || 'New item' }}</span>
          <input
            v-else
            type="text"
            v-model="editingItem.text"
            @keyup.enter="finishEditingAndCreateNew(index)"
            @blur="finishEditing"
            @keyup.esc="cancelEditing"
            class="flex-grow rounded-md border-gray-300 focus:outline-none p-1"
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
    <div
      class="flex items-center justify-between bg-white p-2 cursor-pointer rounded-md border border-gray-200 shadow-sm"
      @click="createNewItem"
    >
      <div class="flex items-center text-gray-500">
        <FontAwesomeIcon :icon="faPlus" class="me-2"/>
        <span>Add new item</span>
      </div>
    </div>

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
              @click="startEditing(item)"
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
    </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, onBeforeUnmount, nextTick, inject } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { Sortable } from 'sortablejs';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars, faClose, faPlus } from '@fortawesome/free-solid-svg-icons';
import debounce from 'lodash/debounce'; 
 
const props = defineProps({
  initialItems: {
    type: Array,
    default: () => [],
  },
  initialTitle: {
    type: String,
    default: '',
  },
  note: {
    type: Object,
    default: null, 
  },
  travelPlanId: {
    type: String,
    default: '',
  },
  tabKey: {
    type: String,
    default: '',
  },
  isEditing: {
    type: Boolean,
    default: false,
  },
  newNote: {
    type: Boolean,
    default: false,
  },
  checklistId: {
    type: String,
    default: () => uuidv4(), // Unique identifier for this checklist instance
  }
});

const emit = defineEmits(['update:items', 'update:title', 'update-checklist', 'update-note-checklist']);

// Title functionality
const title = ref(props.initialTitle || '');
const travelPlanId = ref(props.travelPlanId || '');
const activeNote = ref(props.note || '');
const tabKey = ref(props.tabKey || '');
const isEditingTitle = ref(false);
const titleText = ref('');
const isInitialized = ref(false);

// Items data
const items = ref([]);
const incompleteItemsContainer = ref(null);
const completedItemsContainer = ref(null);
let sortableInstance = null;
const isDragging = ref(false);
const draggedIndex = ref(null);

// Editing functionality
const editingItem = ref(null);

// Custom focus directive
const vFocus = {
  mounted: (el) => el.focus(),
};

const currentUser = inject('currentUser');
// Load items from local storage on component creation
onMounted(() => {

  // First check if we have initialItems passed as prop
  if (props.initialItems && props.initialItems.length) {
    items.value = props.initialItems.map((item, index) => ({
      id: item.id || uuidv4(), // Use existing ID or generate a new one
      text: item.text || '',
      completed: item.completed || false,
      position: index // Initial position
    }));
  }

  // Initialize Sortable.js for incomplete items only
  if (incompleteItemsContainer.value) {
    sortableInstance = new Sortable(incompleteItemsContainer.value, {
      animation: 150,
      onEnd: (evt) => {
        const newIndex = evt.newIndex;
        const oldIndex = evt.oldIndex;

        // Reorder the incomplete items array and update positions
        const incomplete = items.value.filter((item) => !item.completed);
        const movedItem = incomplete.splice(oldIndex, 1)[0];
        incomplete.splice(newIndex, 0, movedItem);
        incomplete.forEach((item, index) => {
          item.position = index;
        });

        // Recombine with completed items, keeping original order of completed
        const completed = items.value.filter((item) => item.completed);
        items.value = [...incomplete, ...completed];

        isDragging.value = false;
        draggedIndex.value = null;
      },
      onStart: (evt) => {
        // Don't start drag if we're editing
        if (editingItem.value !== null) {
          evt.preventDefault();
          return false;
        }

        draggedIndex.value = evt.oldIndex;
        isDragging.value = true;
      },
    });
  }

  nextTick(() => {
    isInitialized.value = true;
  });
});

// Save items to local storage whenever the items array changes
const saveItems = () => {
  // Emit update events 
  emit('update:title', title.value);
};
 
const emitChange = () => {
  // EDITING A CHECKLIST FROM A TAB
 // console.log('change', props.newNote)
  if (tabKey.value){
    const dataPath = `tabs.${tabKey.value}.value`; 
    const updatedChecklist = {
      title: title.value,
      items: items.value
    } 
      //console.log(' ??????? tabKey', JSON.parse(JSON.stringify(tabKey)))
     emit('update-checklist', { dataPath, updatedData: updatedChecklist });
  } 

  // EDITING A CHECKLIST FROM A NOTE
  if (activeNote.value && activeNote.value.key){
    const updatedChecklist ={
      ...activeNote.value,
      title: title.value,
      items: items.value
    }
    emit('update-note-checklist', updatedChecklist,  activeNote.value.key);
  } 


    // CREATING A NEW NOTE WITH CHECKLIST
    if (props.newNote){
      const updatedChecklist ={ 
        title: title.value,
        items: items.value
      }
      emit('update-note-checklist', updatedChecklist); 
    }
};

// Debounced version of emitChange (fires only once even if title & items change together)
const debouncedEmitChange = debounce(() => {
  emitChange();
}, 0); // 0ms ensures microtask queue debounce — still prevents double calls

watch(
  () => ({ title: title.value, items: items.value }),
  () => {
    if (isInitialized.value) {
      debouncedEmitChange();
    }
  },
  { deep: true }
);



// Title editing functions
const startEditingTitle = () => {
  titleText.value = title.value;
  isEditingTitle.value = true;
};

const finishEditingTitle = () => {
  title.value = titleText.value.trim();
  isEditingTitle.value = false;
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
    position: incompleteItems.value.length // Add new item at the end
  };
  // Add the new item to the end of the incompleteItems list instead of the beginning
  const incomplete = items.value.filter((item) => !item.completed);
  incomplete.push(newItemObj);
  const completed = items.value.filter((item) => item.completed);
  items.value = [...incomplete, ...completed];

  // Start editing the new item
  nextTick(() => {
    startEditing(newItemObj);
  });
};

const startEditing = (item) => {
  editingItem.value = { ...item };
  // The focus will be handled by the v-focus directive
};

const finishEditing = () => {
  if (editingItem.value) {
    const itemIndex = items.value.findIndex((item) => item.id === editingItem.value.id);
    if (itemIndex !== -1) {
      items.value[itemIndex].text = editingItem.value.text;
    }
    editingItem.value = null;
  }
};

const cancelEditing = () => {
  editingItem.value = null;
};

const finishEditingAndCreateNew = (index) => {
  finishEditing();

  // Create a new item after the current one
  const newItemObj = {
    id: uuidv4(),
    text: '',
    completed: false,
    position: index + 1 // Initially set position, will be reordered
  };

  // Insert the new item after the current one in the incomplete items
  const incomplete = items.value.filter((item) => !item.completed);
  incomplete.splice(index + 1, 0, newItemObj);
  incomplete.forEach((item, i) => {
    item.position = i; // Update positions after insertion
  });
  const completed = items.value.filter((item) => item.completed);
  items.value = [...incomplete, ...completed];

  // Start editing the new item
  nextTick(() => {
    startEditing(newItemObj);
  });
};

const toggleItem = (id) => {
  const item = items.value.find((item) => item.id === id);
  if (item) {
    item.completed = !item.completed;

    // If we're currently editing this item, stop editing
    if (editingItem.value && editingItem.id === id) {
      finishEditing();
    }

    // Reorder items to maintain incomplete/complete separation and update positions
    const completedItems = items.value.filter((item) => item.completed);
    completedItems.forEach((item, index) => {
      item.position = index;
    });
    const incompleteItems = items.value.filter((item) => !item.completed);
    incompleteItems.forEach((item, index) => {
      item.position = index;
    });
    items.value = [...incompleteItems, ...completedItems];
  }
};

const deleteItem = (id) => {
  // If we're currently editing this item, stop editing
  if (editingItem.value && editingItem.id === id) {
    editingItem.value = null;
  }

  items.value = items.value.filter((item) => item.id !== id).map((item, index) => ({
    ...item,
    position: item.completed ? completedItems.value.findIndex(cItem => cItem.id === item.id) : index
  }));
};

const incompleteItems = computed(() => {
  return items.value.filter((item) => !item.completed).sort((a, b) => a.position - b.position);
});

const completedItems = computed(() => {
  return items.value.filter((item) => item.completed).sort((a, b) => a.position - b.position);
});

const startDrag = (index, event) => {
  // Don't start drag if we're clicking on input elements or if we're editing
  if (event.target.tagName === 'INPUT' ||
      event.target.tagName === 'BUTTON' ||
      editingItem.value !== null) {
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
    items.value = newItems.map((item, index) => ({
      id: item.id || uuidv4(),
      text: item.text || '',
      completed: item.completed || false,
      position: index
    }));
    saveItems();
  }
});


// async function updateChecklistItem(checklist) {
//   const userId = currentUser.value.uid;

//   if (!userId || !travelPlanId.value || !checklist || !tabKey.value) {
//     console.error("Missing user ID, travel plan ID, tab key or active travel plan");
//     return;
//   }

//   const dataPath = `tabs.${tabKey.value}.value`;  
// }
</script>

<style scoped>
/* You can add additional styling here if needed */
</style>