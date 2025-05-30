// /js/firebase-init.js

// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCCaHnLKNdKpY6o-R7Pu8jpKDtlHmO5Os4",
  authDomain: "chindocoins-de908.firebaseapp.com",
  projectId: "chindocoins-de908",
  storageBucket: "chindocoins-de908.firebasestorage.app",
  messagingSenderId: "948885207746",
  appId: "1:948885207746:web:1161ac8e7863775c43195b",
  measurementId: "G-NQDF9RBX0B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

// Optionally export to use in other modules
export { app, db, auth, analytics };
