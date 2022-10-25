/**
 * A firebase configure for the project
 * file: firebase-config.js
 */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNkev9aF1-AOexDR-ZS3_kH88W3RMS4cU",
  authDomain: "yame-ecomm.firebaseapp.com",
  projectId: "yame-ecomm",
  storageBucket: "yame-ecomm.appspot.com",
  messagingSenderId: "605372876019",
  appId: "1:605372876019:web:c6113a6e1425e6f9256386",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
