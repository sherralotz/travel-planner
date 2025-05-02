<template>
  <div class="notes-container p-4">
    <div class="new-note-input-container mb-6">
      <input v-model="newNoteTitle" placeholder="Title"
        class="w-full p-2 mb-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />

      <div class="flex items-center space-x-2 mb-2">
        <span class="text-sm text-gray-600">Note type:</span>
        <button @click="isChecklist = !isChecklist; if (isChecklist) isCreatingNote = true;"
          class="px-3 py-1 rounded-md text-sm" :class="isChecklist
            ? 'bg-green-500 text-white hover:bg-green-600'
            : 'bg-blue-500 text-white hover:bg-blue-600'">
          {{ isChecklist ? 'Checklist' : 'Text Note' }}
        </button>
      </div>

      <div v-if="isChecklist">
        <div class="flex mb-2">
          <input v-model="newChecklistItem" @keyup.enter="addChecklistItem" placeholder="Add checklist item..."
            class="flex-grow p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          <button @click="addChecklistItem" class="ml-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4">
            +
          </button>
        </div>

        <ul>
          <li v-for="(item, index) in checklistItems" :key="item.id"
            class="flex items-center justify-between bg-white rounded-md p-2 shadow-sm mb-1">
            <div class="flex items-center">
              <input type="checkbox" v-model="item.completed" class="mr-2 rounded-md focus:ring-blue-500 h-5 w-5" />
              <span :class="{ 'line-through text-gray-500': item.completed }">{{ item.text }}</span>
            </div>
            <button @click="deleteChecklistItem(index)" class="text-gray-500 hover:text-red-500">
              ✕
            </button>
          </li>
        </ul>
      </div>

      <textarea v-else v-model="newNoteContent" placeholder="Take a note..." @focus="isCreatingNote = true"
        @blur="handleBlur"
        class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
        :rows="isCreatingNote ? 3 : 1"></textarea>

      <div v-if="isCreatingNote || isChecklist" class="mt-2 flex space-x-2">
        <button @click="addNote"
          class="bg-blue-500 hover:bg-blue-600 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Add {{ isChecklist ? 'Checklist' : 'Note' }}
        </button>
        <button @click="cancelNote"
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50">
          Cancel
        </button>
      </div>
    </div>

    <div class="notes-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" ref="notesGrid">
      <div v-for="(note, index) in notes" :key="note.id"
        class="note-card bg-white rounded-md shadow-md hover:shadow-lg transition-shadow duration-200"
        :class="{ 'editing': editingNoteId === note.id }" @click="startEdit(note)">
        <div class="note-menu-container relative w-full">
          <button class="note-menu-button absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
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
        <h3 v-if="editingNoteId === note.id || note.title" class="text-xl font-semibold text-gray-800"
          :contenteditable="editingNoteId === note.id" @click="startEdit(note, $event)"
          @blur="updateTitle($event, note)" ref="editableTitle">
          {{ note.title }}
        </h3>
        <div @click="startEdit(note, $event)">
          <div v-if="note.type === 'checklist'">
            <Checklist
              :initialItems="note.value"
              :is-editing="editingNoteId === note.id"
              :key="note.id"
            />
          </div>
          <p v-else class="text-gray-700 whitespace-pre-line" :contenteditable="editingNoteId === note.id"
            @blur="updateContentOnBlur($event, note)" ref="editableContent">
            {{ Array.isArray(note.value) && note.value[0] ? note.value[0].text : '' }}
          </p>
        </div>
      </div>
    </div>
    <div v-if="notes.length === 0" class="text-center text-gray-500 mt-8">
      No notes yet. Add some!
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import Checklist from '../variants/Checklist.vue';
import Sortable from 'sortablejs';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

const notes = ref([]);
const newNoteTitle = ref('');
const newNoteContent = ref('');
const newChecklistItem = ref('');
const checklistItems = ref([]);
const isChecklist = ref(false);
const isCreatingNote = ref(false);
const openMenuId = ref(null);
const editingNoteId = ref(null);
const editableTitle = ref(null);
const editableContent = ref(null);
const notesGrid = ref(null);

onMounted(() => {
  if (typeof window !== 'undefined') {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      try {
        notes.value = JSON.parse(savedNotes);
      } catch (error) {
        console.error('Failed to parse saved notes:', error);
        notes.value = [];
        localStorage.removeItem('notes');
      }
    }
  }
  nextTick(() => {
    if (notesGrid.value) {
      Sortable.create(notesGrid.value, {
        animation: 150,
        onEnd: (evt) => {
          const newIndex = evt.newIndex;
          const oldIndex = evt.oldIndex;
          if (newIndex !== oldIndex) {
            const movedItem = notes.value.splice(oldIndex, 1)[0];
            notes.value.splice(newIndex, 0, movedItem);
          }
        },
      });
    }
  });
});

const saveNotes = () => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('notes', JSON.stringify(notes.value));
  }
};
watch(notes, saveNotes, { deep: true });

const addChecklistItem = () => {
  if (newChecklistItem.value.trim()) {
    checklistItems.value.push({
      id: uuidv4(),
      text: newChecklistItem.value.trim(),
      completed: false,
    });
    newChecklistItem.value = '';
  }
};

const deleteChecklistItem = (index) => {
  checklistItems.value.splice(index, 1);
};

const addNote = () => {
  if (isCreatingNote.value && (newNoteTitle.value.trim() || newNoteContent.value.trim() || checklistItems.value.length)) {
    const newNote = {
      id: uuidv4(),
      title: newNoteTitle.value,
      type: isChecklist.value ? 'checklist' : 'text',
      value: isChecklist.value
        ? [...checklistItems.value]
        : [{ id: uuidv4(), text: newNoteContent.value }],
    };
    notes.value.push(newNote);
    resetInputs();
  }
};

const resetInputs = () => {
  newNoteTitle.value = '';
  newNoteContent.value = '';
  newChecklistItem.value = '';
  checklistItems.value = [];
  isChecklist.value = false;
  isCreatingNote.value = false;
};

const handleBlur = () => {
  if (!newNoteContent.value.trim() && !newNoteTitle.value.trim()) {
    isCreatingNote.value = false;
  }
};

const cancelNote = () => {
  resetInputs();
};

const deleteNote = (index) => {
  notes.value.splice(index, 1);
};

const duplicateNote = (index) => {
  const newNote = { ...notes.value[index], id: uuidv4() };
  notes.value.push(newNote);
};

const toggleMenu = (id) => {
  openMenuId.value = openMenuId.value === id ? null : id;
};

const startEdit = (note, event) => {
  editingNoteId.value = note.id;
};

const updateContentOnBlur = (event, note) => {
  if (note.type === 'text' && note.value.length > 0) {
    note.value[0].text = event.target.textContent;
  }
};

const updateTitle = (event, note) => {
  note.title = event.target.textContent;
};

const convertToChecklist = (index) => {
  const note = notes.value[index];
  if (note.type === 'text') {
    const lines = note.value[0]?.text.split('\n').filter(line => line.trim() !== '') || [];
    const newChecklistItems = lines.map(line => ({
      id: uuidv4(),
      text: line.trim(),
      completed: false,
    }));
    notes.value[index] = {
      ...note,
      type: 'checklist',
      value: newChecklistItems,
    };
  }
};
</script>

<style>
.notes-container {
  font-family: sans-serif;
  padding: 20px;
  min-height: 100vh;
  background-color: #f7f9fc;
}

.new-note-input-container {
  margin-bottom: 20px;
}

.new-note-input-container textarea {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  width: 100%;
  min-height: 40px;
  resize: vertical;
}

.new-note-input-container input {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  width: 100%;
}

.notes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.note-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  hover: shadow-lg;
  transition-shadow: 0.2s ease-in-out;
  cursor: pointer;
}

.note-card.editing {
  box-shadow: 0 0 0 2px #4299e1;
  /* Highlight editing state */
  outline: none;
}

.note-card h3 {
  font-size: 1.2em;
  /* margin-bottom: 10px; */
  color: #333;
}

.note-card p {
  font-size: 1em;
  color: #555;
  line-height: 1.5;
}

.note-menu-container {
  position: relative;
  /* display: inline-block; */
}

.note-menu-button {
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
}

.note-menu {
  position: absolute;
  top: 30px;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.note-menu-item {
  padding: 10px 15px;
  cursor: pointer;
  white-space: nowrap;
}

.note-menu-item:hover {
  background-color: #f0f0f0;
}

[contenteditable="true"] {
  outline: none;
  -webkit-user-select: text;
  user-select: text;
  word-wrap: break-word;
}
</style>