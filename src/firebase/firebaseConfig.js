// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkT58HBTWiH4WDXPB6rDnR-URj2Iku3ak",
  authDomain: "saramaygym.firebaseapp.com",
  projectId: "saramaygym",
  storageBucket: "saramaygym.appspot.com",
  messagingSenderId: "425772697441",
  appId: "1:425772697441:web:feb8eb5163b237d561a720",
  measurementId: "G-GMEBJ6W4YC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)