import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD7TAsMNx9rUD1tPB_z62SWsLPku-Dlr_8",
  authDomain: "pokeapi-a92aa.firebaseapp.com",
  projectId: "pokeapi-a92aa",
  storageBucket: "pokeapi-a92aa.firebasestorage.app",
  messagingSenderId: "928443062337",
  appId: "1:928443062337:web:745db59dc0e272af948ec0",
  measurementId: "G-46J8S9CV8E"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ ¡Esto es necesario!

export { auth, db };