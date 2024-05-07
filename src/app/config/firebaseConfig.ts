// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, GoogleAuthProvider } from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {

  apiKey: "AIzaSyAFOjbYyTSiO8yoth9SydscOxq4dGMaDV4",
  authDomain: "nextauth-3535b.firebaseapp.com",
  databaseURL: "https://nextauth-3535b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nextauth-3535b",
  storageBucket: "nextauth-3535b.appspot.com",
  messagingSenderId: "583019527269",
  appId: "1:583019527269:web:81692d8d2c7d15bb38da8c",
  measurementId: "G-P98004DY3D"
  
};

// NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyAFOjbYyTSiO8yoth9SydscOxq4dGMaDV4
// NEXT_PUBLIC_AUTH_DOMAIN=nextauth-3535b.firebaseapp.com
// NEXT_PUBLIC_PROJECT_ID=nextauth-3535b
// NEXT_PUBLIC_STORAGE_BUCKET=nextauth-3535b.appspot.com
// NEXT_PUBLIC_MESSAGING_SENDER_ID=583019527269
// NEXT_PUBLIC_APP_ID=1:583019527269:web:81692d8d2c7d15bb38da8c
// NEXT_PUBLIC_MEASUREMENT_ID=G-3449VB5SED


// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Initialize Firebase authentication (auth) and Firestore (firestore) services
const auth = getAuth(app); // Firebase Authentication instance

const googleProvider = new GoogleAuthProvider(); // Google Auth Provider instance

const firestore = getFirestore(app); // Firestore instance

export { auth, googleProvider, firestore };





