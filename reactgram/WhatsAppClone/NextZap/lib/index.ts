// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtabEa3cT85YKAZKStDJK5WwWGvkjW8c8",
  authDomain: "whatsappclone-9bec7.firebaseapp.com",
  projectId: "whatsappclone-9bec7",
  storageBucket: "whatsappclone-9bec7.appspot.com",
  messagingSenderId: "588881556567",
  appId: "1:588881556567:web:8b5c452e8d3e0ae0d95f12",
  measurementId: "G-Z4YGE5YT6C"
};

// Initialize Firebase
const firestoreApp = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const googleProvider = new GoogleAuthProvider()

const auth = getAuth()

export {firestoreApp, googleProvider, auth}