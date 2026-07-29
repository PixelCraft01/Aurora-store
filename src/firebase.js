import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // 1. Firestore import kiya

const firebaseConfig = {
  apiKey: "AIzaSyCllsV59ua8t0pC1GnFA2ASSRV07SFfXQs",
  authDomain: "arome-store.firebaseapp.com",
  projectId: "arome-store",
  storageBucket: "arome-store.firebasestorage.app",
  messagingSenderId: "206470481004",
  appId: "1:206470481004:web:a07d573546f8d32f86c449",
  measurementId: "G-JQ55FS8P39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exports
export const auth = getAuth(app);
export const db = getFirestore(app); // 2. Firestore ko 'db' naam se export kiya
export const googleProvider = new GoogleAuthProvider();