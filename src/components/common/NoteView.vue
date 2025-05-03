
<!-- Note View Component -->
<template>
    <div class="note-view p-4 bg-gray-50 min-h-screen">
      <div class="max-w-3xl mx-auto">
        <!-- Back button -->
        <div class="mb-4">
          <button 
            @click="goBack" 
            class="flex items-center text-gray-600 hover:text-gray-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
            </svg>
            Back to Notes
          </button>
        </div>
        
        <!-- Note content -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <!-- Title -->
          <div class="mb-4">
            <input
              v-model="currentNote.title"
              type="text"
              placeholder="Title"
              class="w-full text-2xl font-semibold border-0 focus:outline-none focus:ring-0"
              @change="saveNote"
            />
          </div>
          
          <!-- Divider -->
          <div class="border-b border-gray-200 mb-4"></div>
          
          <!-- Content -->
          <div v-if="!currentNote.isChecklist">
            <textarea
              v-model="currentNote.content"
              placeholder="Note content..."
              class="w-full min-h-64 border-0 resize-none focus:outline-none focus:ring-0"
              @change="saveNote"
            ></textarea>
          </div>
          <div v-else>
            <Checklist
              ref="noteChecklist"
              :initialItems="currentNote.checklistItems"
              :initialTitle="''"
              @change="handleChecklistChange"
            />
          </div>
        </div>
        
        <!-- Action buttons -->
        <div class="mt-4 flex justify-between">
          <button 
            @click="toggleNoteType" 
            class="px-4 py-2 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200"
          >
            {{ currentNote.isChecklist ? 'Convert to Note' : 'Convert to Checklist' }}
          </button>
          
          <button 
            @click="deleteNote" 
            class="px-4 py-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200"
          >
            Delete Note
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import Checklist from '../variants/Checklist.vue';
  
  const route = useRoute();
  const router = useRouter();
  const noteChecklist = ref(null);
  
  // Note data
  const noteId = computed(() => route.params.id);
  const allNotes = ref([]);
  const currentNote = ref({
    id: '',
    title: '',
    content: '',
    isChecklist: false,
    checklistItems: []
  });
  
  // Navigation
  const goBack = () => {
    router.push({ name: 'notes' });
  };
  
  // Load notes from localStorage
  const loadNotes = () => {
    if (typeof window !== 'undefined') {
      const savedNotes = localStorage.getItem('notes');
      if (savedNotes) {
        try {
          allNotes.value = JSON.parse(savedNotes);
          
          // Find the current note
          const note = allNotes.value.find(n => n.id === noteId.value);
          if (note) {
            currentNote.value = { ...note };
          } else {
            // Note not found, go back
            goBack();
          }
        } catch (error) {
          console.error('Failed to parse saved notes:', error);
          goBack();
        }
      } else {
        goBack();
      }
    }
  };
  
  // Save the current note
  const saveNote = () => {
    const noteIndex = allNotes.value.findIndex(n => n.id === noteId.value);
    if (noteIndex !== -1) {
      allNotes.value[noteIndex] = { ...currentNote.value };
      saveNotesToStorage();
    }
  };
  
  // Handle checklist changes
  const handleChecklistChange = (data) => {
    currentNote.value.checklistItems = data.items;
    saveNote();
  };
  
  // Toggle between note and checklist type
  const toggleNoteType = () => {
    currentNote.value.isChecklist = !currentNote.value.isChecklist;
    
    // If converting to checklist and there are no items, initialize with empty array
    if (currentNote.value.isChecklist && (!currentNote.value.checklistItems || currentNote.value.checklistItems.length === 0)) {
      currentNote.value.checklistItems = [];
    }
    
    saveNote();
  };
  
  // Delete the current note
  const deleteNote = () => {
    if (confirm('Are you sure you want to delete this note?')) {
      allNotes.value = allNotes.value.filter(n => n.id !== noteId.value);
      saveNotesToStorage();
      goBack();
    }
  };
  
  // Save notes to localStorage
  const saveNotesToStorage = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('notes', JSON.stringify(allNotes.value));
    }
  };
  
  // Load note data on component mount
  onMounted(() => {
    loadNotes();
  });
  </script>