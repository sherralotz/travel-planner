import { ref, watch } from 'vue';
import { doc, updateDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../config/firebase-config';
import debounce from 'lodash/debounce';

export default function useDataUpdater({ userId, travelPlanId, dataPath, debounceDelay = 500 }) {
  const data = ref(null);
  const isLoading = ref(false);
  const error = ref(null);

  const docRef = doc(db, `users/${userId}/travelPlans/${travelPlanId.value}`);

  // Subscribe to real-time updates at mount
  const unsubscribe = onSnapshot(docRef, (docSnap) => {
    if (docSnap.exists()) {
      data.value = docSnap.data();
      //console.log('exists');
    } else {
      data.value = null;
      console.log('Document not found');
    }
  }, (err) => {
    console.error(err);
    error.value = err;
  });

  // Call this to update any nested path
  const updateData = debounce(async (newValue, path) => {
    if (!path) {
      console.error('You must provide a path when updating');
      return;
    }

    isLoading.value = true;
    error.value = null;

    try { 
      console.log('===FINAL PATH:',path);
      console.log('===FINAL VALUE:', JSON.parse(JSON.stringify(newValue)));   

      await updateDoc(docRef, {
        [path]: newValue
      });


      console.log('updated');
      isLoading.value = false;
    } catch (err) {
      console.error(err);
      error.value = err;
      isLoading.value = false;
    }
  }, debounceDelay);
  return {
    data,
    updateData,
    isLoading,
    error,
    unsubscribe
  };
}
