import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "chat-app-3a053.firebaseapp.com",
    projectId: "chat-app-3a053",
    storageBucket: "chat-app-3a053.appspot.com",
    messagingSenderId: "1009950419320",
    appId: "1:1009950419320:web:2c63522d60273f78efc08d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()