// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBc42J5RZHvHqJGgekPfa2mJxu7T7FUtmY",
  authDomain: "paw-saath.firebaseapp.com",
  projectId: "paw-saath",
  storageBucket: "paw-saath.appspot.com",
  messagingSenderId: "165220875812",
  appId: "1:165220875812:web:155a2a6f90fc83138422b1",
  measurementId: "G-8Q3L9R6B29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  export const auth = getAuth();
  export const db = getFirestore(app)
  export default app;

