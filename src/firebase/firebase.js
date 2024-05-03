// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "stream-info-hub.firebaseapp.com",
  projectId: "stream-info-hub",
  storageBucket: "stream-info-hub.appspot.com",
  messagingSenderId: "605243367955",
  appId: "1:605243367955:web:b320cb7015327e097995e6",
  measurementId: "G-LX7V2J0S29",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
