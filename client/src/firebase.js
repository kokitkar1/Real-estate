// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "equity-eagle.firebaseapp.com",
  projectId: "equity-eagle",
  storageBucket: "equity-eagle.appspot.com",
  messagingSenderId: "581294450969",
  appId: "1:581294450969:web:bbf1cdcb30f58dba9cbd88"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);