import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBqYzOCN-J7KGIWuV2UDhQHFGCaQ-d07vk",
  authDomain: "alfacorporativoproducciones.firebaseapp.com",
  projectId: "alfacorporativoproducciones",
  storageBucket: "alfacorporativoproducciones.firebasestorage.app",
  messagingSenderId: "932734339905",
  appId: "1:932734339905:web:fd910d1e566c929ae96fc0",
  measurementId: "G-7JH6J57F1S",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
