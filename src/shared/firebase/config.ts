import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIF6BuQMblyKVnc7KqzevyfLdX9EGqUyo",
  authDomain: "calendar-11763.firebaseapp.com",
  projectId: "calendar-11763",
  storageBucket: "calendar-11763.appspot.com",
  messagingSenderId: "529916841221",
  appId: "1:529916841221:web:a3393414efe275e1d0bb6c",
  measurementId: "G-PQ1VSNV94V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestoreDB = getFirestore(app);