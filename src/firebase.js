import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAaeLHQNbnNcDVVWIPivD11BeudtYph0fw",
  authDomain: "penpal-3a025.firebaseapp.com",
  projectId: "penpal-3a025",
  storageBucket: "penpal-3a025.appspot.com",
  messagingSenderId: "1050567232084",
  appId: "1:1050567232084:web:d722f35b156e82b7da7bc1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
// app
export const db = getFirestore(app);
