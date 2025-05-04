// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG9Z5aha-FVNDjt12qxP06Pep_6IdFRyk",
  authDomain: "planner-76848.firebaseapp.com",
  projectId: "planner-76848",
  storageBucket: "planner-76848.firebasestorage.app",
  messagingSenderId: "68503912535",
  appId: "1:68503912535:web:71e4922f352b20e4766312",
  measurementId: "G-ZJDVJJ4D88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app); // Firestore initialization 
export { auth, provider, signInWithPopup, signOut, db };