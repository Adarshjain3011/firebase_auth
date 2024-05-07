// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, GoogleAuthProvider } from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {

  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Initialize Firebase authentication (auth) and Firestore (firestore) services
const auth = getAuth(app); // Firebase Authentication instance

const googleProvider = new GoogleAuthProvider(); // Google Auth Provider instance

const firestore = getFirestore(app); // Firestore instance

export { auth, googleProvider, firestore };





