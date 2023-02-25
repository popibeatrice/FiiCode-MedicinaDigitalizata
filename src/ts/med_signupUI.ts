import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//config
const firebaseConfig = {
  apiKey: "AIzaSyD00DDmckXiMglWRxEnhLBlQLovoLzfE-0",
  authDomain: "menumed-cc109.firebaseapp.com",
  projectId: "menumed-cc109",
  storageBucket: "menumed-cc109.appspot.com",
  messagingSenderId: "772753359565",
  appId: "1:772753359565:web:af2e60a2297359bbc0df84",
};

//init firebase with config
initializeApp(firebaseConfig);

//inti services
const db = getFirestore();
const auth = getAuth();
console.log("bau");

//collection ref
const colRef = collection(db, "users");

///variables
const signupForm = document.querySelector("form") as HTMLFormElement;

//get collection data

// form signup
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = signupForm.email.value;
  const password = signupForm.pass.value;
  const nume = signupForm.nume.value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      //user infos
      const UID = cred.user.uid;
      setDoc(doc(db, "users", UID), {
        name: nume,
      });
      signupForm.reset();
    })
    .catch((err) => {
      console.log(err.message);
    });
});
