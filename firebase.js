import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/auth';

import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUFnyldddD8Ome333cawOVc1lU9WLMLJk",
  authDomain: "rn-qrcodegen.firebaseapp.com",
  projectId: "rn-qrcodegen",
  storageBucket: "rn-qrcodegen.appspot.com",
  messagingSenderId: "291719604415",
  appId: "1:291719604415:web:e1521a3d09986c16617e0a"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };
