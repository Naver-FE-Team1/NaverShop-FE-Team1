// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBemxkk-jkIXGwPmQV0PVnXXhnVTsOZKDg",
  authDomain: "naver-team1-api.firebaseapp.com",
  projectId: "naver-team1-api",
  storageBucket: "naver-team1-api.appspot.com",
  messagingSenderId: "523718400179",
  appId: "1:523718400179:web:c6a15bcd717d6b4de838c6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
