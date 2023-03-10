import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";

//config
const firebaseConfig = {
  apiKey: "AIzaSyD00DDmckXiMglWRxEnhLBlQLovoLzfE-0",
  authDomain: "menumed-cc109.firebaseapp.com",
  projectId: "menumed-cc109",
  storageBucket: "menumed-cc109.appspot.com",
  messagingSenderId: "772753359565",
  appId: "1:772753359565:web:af2e60a2297359bbc0df84",
};

export const app = initializeApp(firebaseConfig);
//inti services
export const auth = getAuth();
setPersistence(auth, browserSessionPersistence);
export const db = getFirestore(app);
export const storage = getStorage(app);
