import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBNrjVhLIjDdLPROuZjGrequXl5tkHkVSM",
  authDomain: "jw-corp.firebaseapp.com",
  projectId: "jw-corp",
  storageBucket: "jw-corp.appspot.com",
  messagingSenderId: "380697948374",
  appId: "1:380697948374:web:1fe72b761d6271ccc89977",
  measurementId: "G-G8236XZD82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
export {db};
