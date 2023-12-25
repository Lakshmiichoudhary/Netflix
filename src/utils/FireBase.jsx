// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9Mw3f3yBRoTTEUciv5LNqShqgcywj1CE",
  authDomain: "netflix-8262f.firebaseapp.com",
  projectId: "netflix-8262f",
  storageBucket: "netflix-8262f.appspot.com",
  messagingSenderId: "646110492477",
  appId: "1:646110492477:web:b0b24aad2a40d329207754",
  measurementId: "G-8TWPW3FKGT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();