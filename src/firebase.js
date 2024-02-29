// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-d9066.firebaseapp.com",
  projectId: "real-estate-d9066",
  storageBucket: "real-estate-d9066.appspot.com",
  messagingSenderId: "826634533437",
  appId: "1:826634533437:web:c063c3e374111724c28854"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);