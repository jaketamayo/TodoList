import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCth1fc624Q1yUeAVP9cuKpXc0EMXMfLbI",
  authDomain: "quasartodolist-b167a.firebaseapp.com",
  projectId: "quasartodolist-b167a",
  storageBucket: "quasartodolist-b167a.firebasestorage.app",
  messagingSenderId: "289786487816",
  appId: "1:289786487816:web:5cd42cc09d6f5ac6869dbd",
  measurementId: "G-NMH5PMDEQS"
};

// Initialize Firebase
const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();
