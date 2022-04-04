import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyALxf2nemEXmyYqVqVfMg5QZ-ob9xucvsg",
  authDomain: "chatty-c10aa.firebaseapp.com",
  projectId: "chatty-c10aa",
  storageBucket: "chatty-c10aa.appspot.com",
  messagingSenderId: "331388915678",
  appId: "1:331388915678:web:1bb359dd1f0c72d6df574f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getDatabase(app)