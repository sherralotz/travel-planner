<template>
  <div class="notes-container p-4 bg-white">
    <div class="new-note-input-container mb-6">
      <div v-if="!isCreatingNote" @click="startCreatingNote"
        class="bg-white shadow rounded-lg h-12 flex items-center px-4 cursor-text">
        <span class="text-gray-500">Take a note...</span>
      </div>

      <div v-else class="bg-white shadow rounded-lg p-4">
        <input v-if="!newNote.isChecklist" v-model="newNote.title" type="text"
          class="w-full border-b mb-2 text-xl font-semibold p-1 focus:outline-none"
          placeholder="Title" />

        <div v-if="!newNote.isChecklist">
          <textarea v-model="newNote.content" placeholder="Take a note..."
            class="w-full min-h-15 h-auto border-0 resize-auto focus:outline-none"></textarea>
        </div>

        <div v-else>
          <Checklist :initialItems="newNote.items" :initialTitle="newNote.title"
            @update:title="updateChecklistTitle" :note="activeNote" :newNote="true"
            @update-note-checklist="handleNewChecklistChange" />
        </div>

        <div class="flex justify-between pt-2 border-t border-gray-200 mt-2">

          <button @click="saveNewNote" class="px-3 py-1 rounded bg-red-500 hover:bg-red-400 text-white text-sm">Save</button>
          <div>
            <button @click="toggleNewNoteType" class="px-3 py-1 rounded text-sm me-1"
              :class="newNote.isChecklist ? 'bg-indigo-100 text-indigo-700' : 'bg-green-100 text-gray-700'">
              {{ newNote.isChecklist ? 'Switch to Note' : 'Switch to Checklist' }}
            </button>
            <button @click="closeCreateNote" class="px-3 py-1 rounded bg-gray-100 text-gray-700 text-sm">Close</button>
          </div>
        </div>
      </div>
    </div>

    <div class="overflow-auto h-[calc(100dvh-230px)]" ref="noteBody">
      <div v-if="notes.length === 0"  >
      <div class="text-center py-16 px-4 bg-gray-50 rounded-xl border border-dashed border-gray-300"
    > 
      <p class="text-lg text-gray-600">You haven't created any notes.</p> 
    </div>
    </div>

      <div class="notes-grid grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 gap-3" ref="notesGrid"> 
        <div v-for="(note, index) in sortedNotes" :key="note.id"
                class="note-card overflow-hidden px-3 py-3 bg-white rounded-md shadow-md hover:shadow-lg transition-shadow duration-200"
          @click="openEditModal(note)">
         
          <div class="note-menu-container relative w-full">
            <button class="note-menu-button absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none p-2"
              @click.stop="toggleMenu(note, $event)">
              <FontAwesomeIcon :icon="faEllipsisVertical" />
            </button>
      
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-2 w-[80%] break-words ">
            {{ note.title }}
          </h3>

          <p v-if="!note.isChecklist" class="text-gray-700 whitespace-pre-line">{{ note.content }}</p>

          <div v-else> 
            <ul class="list-disc pl-2 text-gray-700">
              <li v-for="item in note.items" :key="item.id" class="flex m-1"> 
                <div v-if="item.completed" class="w-5 h-5 bg-green-300 rounded-sm"> 
                  <FontAwesomeIcon :icon="faCheck" class="text-white ms-1"/>
                 </div>
                 <div v-if="!item.completed" class=" rounded-sm w-5 h-5 bg-gray-200">  
                 </div>
                <div class="ms-2"> {{item.text}}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div> 
 <!-- Detached Dropdown -->
    <div v-if="dropdown.visible" :style="{
        position: 'fixed',
        top: dropdown.top + 'px',
        left: dropdown.left + 'px',
        zIndex: 1000
      }"
      class="dropdown-container w-32 rounded-md shadow-lg bg-white ring-1 ring-gray-300 ring-opacity-5 focus:outline-none py-1 text-[11px]"
      role="menu" aria-orientation="vertical">
        <!-- <button class="note-menu-item block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                @click="duplicateNote(dropdown.noteId); ">
                Duplicate
              </button> -->
              <button class="note-menu-item block px-4 py-2 text-red-500 hover:bg-gray-100 w-full text-left"
                @click="deleteNote(dropdown.noteKey); ">
                Delete
              </button>
              <!-- <button class="note-menu-item block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                @click="convertToChecklist(dropdown.noteKey);">
                Checklist
              </button> -->
    </div>


    <Modal v-model="showModal" v-if="activeNote">
      <input v-if="!activeNote?.isChecklist" v-model="activeNote.title"
        type="text"
        class="w-full border border-gray-300 mb-2 p-2 rounded focus:outline-none"
        placeholder="Title" />

      <div v-if="!activeNote.isChecklist">
        <textarea v-model="activeNote.content" class="w-full min-h-50 border border-gray-300 p-2 rounded focus:outline-none"></textarea>
      </div>

      <div v-else>
        <Checklist :initialItems="activeNote.items"
          :initialTitle="activeNote.title" :note="activeNote"
          @update-note-checklist="handleEditChecklistChange" />
      </div>

      <div class="flex justify-end mt-4">
        <button @click="saveEditedNote" class="bg-blue-500 text-white px-4 py-2 rounded mr-2">Save</button>
        <button @click="closeModal" class="bg-gray-300 px-4 py-2 rounded">Close</button>
      </div>
    </Modal>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, nextTick, watch, defineProps, computed, inject } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import Checklist from '../variants/Checklist.vue';
import Modal from '../common/Modal.vue';
import Sortable from 'sortablejs';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEllipsisVertical, faCheck } from '@fortawesome/free-solid-svg-icons';
import useDataUpdater from '@/composables/useDataUpdater';

// Props
const props = defineProps({
  initialNotes: {
    type: Object,
    default: () => {}
  },
  tabKey: {
    type: String,
    required: false,
  },
  travelPlanId: {
    type: String,
    required: false,
  },
});
const emit = defineEmits(['update-note']);

// State
const notes = ref([]);
const isCreatingNote = ref(false);
const openMenuId = ref(null);
const newNote = ref(createEmptyNote());
const editingNoteId = ref(null);

const currentUser = inject('currentUser');
const userId = currentUser.value.uid;
const travelPlanId = ref(props.travelPlanId || '');
const tabKey = ref(props.tabKey || '');
const isLoaded = ref(false);
const noteBody = ref(null);

// Modal State
const showModal = ref(false);
const activeNote = ref(null);

const notesGrid = ref(null);
const dropdown = reactive({
  visible: false,
  top: 0,
  left: 0, 
  noteId: '',
  noteKey: ''
});

const sortedNotes = computed(() => {
  return [...notes.value].sort((a, b) => {
    if (a.position !== undefined && b.position !== undefined) {
      return a.position - b.position;
    } else if (a.timestamp && b.timestamp) {
      return new Date(b.timestamp) - new Date(a.timestamp); // Sort by latest timestamp initially
    }
    return 0;
  });
});

onMounted(() => {
  loadNotes();
  nextTick(() => {
    isLoaded.value = true;
    if (notesGrid.value) {
      Sortable.create(notesGrid.value, {
        animation: 150,
        onEnd: (evt) => {
          const movedItem = notes.value.splice(evt.oldIndex, 1)[0];
          notes.value.splice(evt.newIndex, 0, movedItem);
          updateNotePositions();
        },
      });
    }

    if (noteBody.value) {
      noteBody.value.addEventListener('scroll', handleScroll);
    }
  });
  document.addEventListener('click', handleClickOutside); 
});

onUnmounted(() => {
  if (noteBody.value) {
    noteBody.value.removeEventListener('scroll', handleScroll);
  }
});

const handleScroll = () => {
  dropdown.visible = false;
};


function createEmptyNote() {
  return {
    id: uuidv4(),
    title: '',
    content: '',
    isChecklist: false,
    items: [],
    timestamp: new Date().toISOString()
  };
}

// Load notes, prioritizing initialNotes prop
function loadNotes() {
  if (props.initialNotes && Object.keys(props.initialNotes).length > 0){
    const arrayNotes = Object.entries(props.initialNotes);
    const notesParsedWithKey = arrayNotes.map(([key, value]) => ({ key, ...value }));
    notes.value = notesParsedWithKey; 
  }
}

// Save notes - this will now handle saving a single edited note or the entire list
async function saveNotes(updatedNote, newNoteKey) {

  if (Array.isArray(updatedNote)) {
    const dataPath = `tabs.${tabKey.value}.value`; // path to the field you want to sync

    emit('update-note', { dataPath, updatedData: updatedNote });
  } else if (updatedNote && updatedNote.id) { 
    if (isCreatingNote.value){ 
      //CREATE A NEW NOTE
      const dataPath = `tabs.${tabKey.value}.value.${updatedNote.key || newNoteKey}`;
 
     emit('update-note', { dataPath, updatedData: updatedNote });  
    }else{ 
      //EDITING ONE NOTE
      const dataPath = `tabs.${tabKey.value}.value.${updatedNote.key || newNoteKey}`; 

      if (!(updatedNote.key || newNoteKey)) {
        console.error("Missing note key");
        return;
      }
     emit('update-note', { dataPath, updatedData: updatedNote });  
    }
  }
}

// Start new note creation
function startCreatingNote() {
  isCreatingNote.value = true;
  newNote.value = createEmptyNote();
  dropdown.visible = false;
}

const generateUniqueNoteId = () => {
  const existingKeys = new Set(Object.keys(props.initialNotes || {}));
  notes.value.forEach(note => {
    if (note.key) {
      existingKeys.add(note.key);
    }
  });
  let newNoteId;
  let counter = existingKeys.size + 1; // Start with a likely unique number

  while (true) {
    newNoteId = `noteItem_${counter}`;
    if (!existingKeys.has(newNoteId)) {
      break; // Found a unique ID
    }
    counter++; // Try the next number
  }
  return newNoteId;
};



async function saveNewNote() {  
  const newNoteId = generateUniqueNoteId();
  const updatedNotesObject = { ...newNote.value };  

await saveNotes(updatedNotesObject, newNoteId); 
notes.value.unshift({ key: newNoteId, ...newNote.value }); 
resetNewNote(); 
}

// Reset the new note input
function resetNewNote() {
  newNote.value = createEmptyNote();
  isCreatingNote.value = false;
}

// Close without saving
function closeCreateNote() {
  resetNewNote();
}

// Toggle note/checklist type
function toggleNewNoteType() {
  newNote.value.isChecklist = !newNote.value.isChecklist;
}

// Handle checklist changes
function handleNewChecklistChange(data) {
  newNote.value.title = data.title;
  newNote.value.items = data.items;  
}

function updateChecklistTitle(newTitle) {
  if (newNote.value) {
    newNote.value.title = newTitle;
  }
}


const toggleMenu = (note) => {
  event.stopPropagation(); 
  const buttonRect = event.target.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;
  const dropdownHeight = 40;  
  const dropdownWidth = 128; 
  const verticalOffset = 0;

   if (dropdown.visible && dropdown.noteId === note.key) {
    dropdown.visible = false;
  } else { 
    let idealTop = buttonRect.bottom + verticalOffset;
    let idealLeft = buttonRect.left;

    dropdown.visible = true;
    dropdown.noteKey = note.key;
    dropdown.top = buttonRect.bottom + 4;
 
    // Check if the dropdown will overflow the right edge of the screen
    if (idealLeft + dropdownWidth > viewportWidth) {
      // Adjust the left position to make it fit within the viewport
      idealLeft = viewportWidth - dropdownWidth - 10; // Add a small margin
    }

    // Ensure the adjusted left position doesn't go off the left edge
    if (idealLeft < 0) {
      idealLeft = 10; // Add a small margin from the left
    }

    dropdown.left = idealLeft;
 // Adjust vertical position if it overflows the bottom edge
    if (idealTop + dropdownHeight > viewportHeight) {
      idealTop = buttonRect.top - dropdownHeight - verticalOffset;
      if (idealTop < 0) {
        idealTop = verticalOffset; // Fallback to top if still overflowing
      }
    }
 
    dropdown.left = idealLeft;
    dropdown.top = idealTop;
  }
};
// Close dropdown when clicking outside
const handleClickOutside = (event) => {
  // Close the dropdown if clicking outside
  if (dropdown.visible) {
    // Check if click is outside the dropdown
    const dropdownElement = document.querySelector('.dropdown-container');
    if (dropdownElement && !dropdownElement.contains(event.target)) {
      dropdown.visible = false; 
    }
  }
};

const deleteNote = async (noteKeyToDelete) => { 
  const updatedNotesObject = { ...props.initialNotes };
  delete updatedNotesObject[noteKeyToDelete];
  await saveNotes(updatedNotesObject);
  notes.value = notes.value.filter(note => note.key !== noteKeyToDelete);
  updateNotePositions();
  dropdown.visible = false;
};

const duplicateNote = async (originalNote) => {
  if (!userId || !props.travelPlanId || !props.tabKey) {
    console.error("Missing user ID, travel plan ID, or tab key");
    return;
  }

  const newNoteId = `note_${Object.keys(props.initialNotes || {}).length + notes.value.length + 1}`;
  const newNoteData = { ...originalNote, id: uuidv4() }; // Generate a new ID for the duplicate

  const updatedNotesObject = {
    ...props.initialNotes,
    [newNoteId]: { ...newNoteData, position: notes.value.length }
  };

  await saveNotes(updatedNotesObject);
  notes.value.push({ key: newNoteId, ...newNoteData, position: notes.value.length -1 });
  updateNotePositions();
  dropdown.visible = false;
};

const updateNotePositions = () => {
  notes.value.forEach((note, index) => {
    note.position = index;
  });
  saveNotes(notes.value);
};

// === Modal Edit Handlers ===

// Open edit modal
function openEditModal(note) {
  activeNote.value = JSON.parse(JSON.stringify(note)); // deep copy
  showModal.value = true;
  dropdown.visible = false;
}

// Save edits
async function saveEditedNote() {
  if (activeNote.value) {
    await saveNotes(activeNote.value, activeNote.value.key);
    const index = notes.value.findIndex(n => n.key === activeNote.value.key);

    if (index !== -1) {
      notes.value[index] = { ...activeNote.value };
    }
    closeModal();
    editingNoteId.value = null;
  }
  dropdown.visible = false;
}

// Close modal
function closeModal() {
  showModal.value = false;
  activeNote.value = null;
  editingNoteId.value = null;
}

// Handle checklist change in modal
function handleEditChecklistChange(newData) {
  if (activeNote.value) {
    //UPDATING CHECKLIST IN NOTE POPUP
    activeNote.value.title = newData.title;
    activeNote.value.items = newData.items; 
    //console.log('noteFromListToUpdate',JSON.parse(JSON.stringify(noteFromListToUpdate)))
  }

  // //UPDATING EDITED NOTE IN LIST OF NOTES IN TAB
  // const noteFromListToUpdate = notes.value.find(note => note.id === newData.id);
  // if (noteFromListToUpdate){ 
  // //  console.log('noteFromListToUpdate',JSON.parse(JSON.stringify(noteFromListToUpdate)))
  //   noteFromListToUpdate.title = newData.title;
  //   noteFromListToUpdate.items = newData.items;
  // }

  // const dataPath = `tabs.${tabKey.value}.value.${newData.key}`;  
  // emit('update-note', { dataPath, updatedData: newData });
}

</script>