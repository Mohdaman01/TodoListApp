// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_hsyGXNMmTrhqIxV4IABBovA1rlHiS5E",
    authDomain: "reactauth-642ca.firebaseapp.com",
    projectId: "reactauth-642ca",
    storageBucket: "reactauth-642ca.appspot.com",
    messagingSenderId: "899095379826",
    appId: "1:899095379826:web:39c07d1ec63b5f3088e7eb"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app