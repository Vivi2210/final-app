<<<<<<< HEAD
import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0zLJH0z_dF5OODe5v2byHO10Dk4aQL9s",
  authDomain: "react-firebase-crud-2b23d.firebaseapp.com",
  projectId: "react-firebase-crud-2b23d",
  storageBucket: "react-firebase-crud-2b23d.appspot.com", // ← corregido
  messagingSenderId: "1059963115664",
  appId: "1:1059963115664:web:9fb096b9943c5915fc6015",
  measurementId: "G-Q7LHNNCEJR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, serverTimestamp };
=======
import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0zLJH0z_dF5OODe5v2byHO10Dk4aQL9s",
  authDomain: "react-firebase-crud-2b23d.firebaseapp.com",
  projectId: "react-firebase-crud-2b23d",
  storageBucket: "react-firebase-crud-2b23d.firebasestorage.app",
  messagingSenderId: "1059963115664",
  appId: "1:1059963115664:web:9fb096b9943c5915fc6015",
  measurementId: "G-Q7LHNNCEJR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, serverTimestamp };
>>>>>>> 6292a6237db1efe41f589455371d8d42761ff779
