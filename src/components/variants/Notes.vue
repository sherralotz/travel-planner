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
            class="w-full h-20 border-0 resize-none focus:outline-none"></textarea>
        </div>

        <div v-else>
          <Checklist :initialItems="newNote.items"
            @update:title="updateChecklistTitle"
            @change="handleNewChecklistChange" />
        </div>

        <div class="flex justify-between pt-2 border-t border-gray-200 mt-2">

          <button @click="saveNewNote" class="px-3 py-1 rounded bg-blue-100 text-gray-700 text-sm">Save</button>
          <div>
            <button @click="toggleNewNoteType" class="px-3 py-1 rounded text-sm me-1"
              :class="newNote.isChecklist ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-gray-700'">
              {{ newNote.isChecklist ? 'Switch to Note' : 'Switch to Checklist' }}
            </button>
            <button @click="closeCreateNote" class="px-3 py-1 rounded bg-gray-100 text-gray-700 text-sm">Close</button>
          </div>
        </div>
      </div>
    </div>

    <!------------------------- NOTES LIST ------------------------->
    <div class="overflow-auto h-[calc(100dvh-230px)]">
      <div class="notes-grid grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 gap-3" ref="notesGrid">
        <div v-for="(note, index) in notes" :key="note.id"
          class="note-card bg-white rounded-md shadow-md hover:shadow-lg transition-shadow duration-200"
          @click="openEditModal(note)">
          <div class="note-menu-container relative w-full">
            <button class="note-menu-button absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none p-2"
              @click.stop="toggleMenu(note.id)">
              <FontAwesomeIcon :icon="faEllipsisVertical" />
            </button>
            <div v-if="openMenuId === note.id"
              class="note-menu absolute top-8 right-0 bg-white rounded-md shadow-lg border border-gray-200 w-32 z-10"
              @click.stop>
              <button class="note-menu-item block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                @click="duplicateNote(index); toggleMenu(null)">
                Duplicate
              </button>
              <button class="note-menu-item block px-4 py-2 text-red-500 hover:bg-gray-100 w-full text-left"
                @click="deleteNote(index); toggleMenu(null)">
                Delete
              </button>
              <button class="note-menu-item block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                @click="convertToChecklist(index); toggleMenu(null)">
                Checklist
              </button>
            </div>
          </div>
          <!-- {{ note }} -->
          <h3 class="text-xl font-semibold text-gray-800">
            {{ note.title }}
          </h3>

          <p v-if="!note.isChecklist" class="text-gray-700 whitespace-pre-line">{{ note.content }}</p>

          <div v-else>
            <ul class="list-disc pl-5 text-gray-700">
              <li v-for="item in note.items" :key="item.id">{{ item.text }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div v-if="notes.length === 0" class="text-center text-gray-500 mt-8">
      No notes yet. Add some!
    </div>

    <Modal v-model="showModal" v-if="activeNote">
      <input v-if="!activeNote?.isChecklist" v-model="activeNote.title"
        type="text"
        class="w-full border mb-2 p-2 rounded focus:outline-none"
        placeholder="Title" />

      <div v-if="!activeNote.isChecklist">
        <textarea v-model="activeNote.content" class="w-full h-24 border p-2 rounded focus:outline-none"></textarea>
      </div>

      <div v-else>
        <Checklist :initialItems="activeNote.items"
          :initialTitle="activeNote.title"
          @change="handleEditChecklistChange" />
      </div>

      <div class="flex justify-end mt-4">
        <button @click="saveEditedNote" class="bg-blue-500 text-white px-4 py-2 rounded mr-2">Save</button>
        <button @click="closeModal" class="bg-gray-300 px-4 py-2 rounded">Cancel</button>
      </div>
    </Modal>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, watch, defineProps } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import Checklist from '../variants/Checklist.vue';
import Modal from '../common/Modal.vue';
import Sortable from 'sortablejs';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

// Props
const props = defineProps({
  initialNotes: {
    type: Array,
    default: () => []
  }
});

// State
const notes = ref([]);
const isCreatingNote = ref(false);
const openMenuId = ref(null);
const newNote = ref(createEmptyNote());

// Modal State
const showModal = ref(false);
const activeNote = ref(null);

const notesGrid = ref(null);

onMounted(() => {
  loadNotes();
  nextTick(() => {
    if (notesGrid.value) {
      Sortable.create(notesGrid.value, {
        animation: 150,
        onEnd: (evt) => {
          const movedItem = notes.value.splice(evt.oldIndex, 1)[0];
          notes.value.splice(evt.newIndex, 0, movedItem);
          saveNotes();
        },
      });
    }
  });
});

watch(notes, saveNotes, { deep: true });

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
  if (props.initialNotes && props.initialNotes.length > 0) {
    notes.value = [...props.initialNotes];
  } else if (typeof window !== 'undefined') {
    // const saved = localStorage.getItem('notes'); 
    // if (saved) notes.value = JSON.parse(saved);
  }
}

// Save notes to localStorage
function saveNotes() {
  if (typeof window !== 'undefined') {
    // localStorage.setItem('notes', JSON.stringify(notes.value));
  }
}

// Start new note creation
function startCreatingNote() {
  isCreatingNote.value = true;
  newNote.value = createEmptyNote();
}

// Save a new note
function saveNewNote() {
  notes.value.unshift({ ...newNote.value });
  saveNotes();
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
  newNote.value.items = data.items;
}

function updateChecklistTitle(newTitle) {
  if (newNote.value) {
    newNote.value.title = newTitle;
  }
}


const toggleMenu = (id) => {
  openMenuId.value = openMenuId.value === id ? null : id;
};

const deleteNote = (index) => {
  notes.value.splice(index, 1);
};

const duplicateNote = (index) => {
  const newNote = { ...notes.value[index], id: uuidv4() };
  notes.value.push(newNote);
};

// === Modal Edit Handlers ===

// Open edit modal
function openEditModal(note) {
  activeNote.value = JSON.parse(JSON.stringify(note)); // deep copy
  showModal.value = true;
}

// Save edits
function saveEditedNote() {
  const index = notes.value.findIndex(n => n.id === activeNote.value.id);
  if (index !== -1) {
    notes.value[index] = { ...activeNote.value };
    saveNotes();
  }
  closeModal();
}

// Close modal
function closeModal() {
  showModal.value = false;
  activeNote.value = null;
}

// Handle checklist change in modal
function handleEditChecklistChange(data) {
  activeNote.value.title = data.title;
  activeNote.value.items = data.items;
}

</script>

<style scoped>
.notes-container {
  font-family: sans-serif;
  background-color: #f7f9fc;
  min-height: 100vh;
}

.note-card {
  cursor: pointer;
  padding: 1rem;
}
</style>