import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithCustomToken,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithCredential,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgGyiEDfdjKUoeybUR9QLCQCHpR-eYR48",
  appId: "1:790810810367:web:2ae5dddc6bc01f5d1cf9ca",
  messagingSenderId: "790810810367",
  projectId: "revel-app-0",
  authDomain: "revel-app-0.firebaseapp.com",
  databaseURL:
    "https://revel-app-0-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "revel-app-0.appspot.com",
  measurementId: "G-6PS6VM5P9W",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export {
  auth,
  db,
  googleProvider,
  signInWithPopup,
  signInWithCustomToken,
  createUserWithEmailAndPassword,
  signInWithCredential,
};
