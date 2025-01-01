import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArJOxL6EDcnL6Vaa9nahrAXlwCWc_6RFE",
   authDomain: "maths-solver-1334e.firebaseapp.com",
    projectId: "maths-solver-1334e",
    storageBucket: "maths-solver-1334e.firebasestorage.app",
    messagingSenderId: "1062714337963",
    appId: "1:1062714337963:web:1a7ca2fd300a3f05dca5ee"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);