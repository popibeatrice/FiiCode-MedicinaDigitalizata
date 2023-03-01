import "../../styles/index.css";
import "../../styles/patient_follow.css";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import {
  EmailAuthProvider,
  linkWithCredential,
  onAuthStateChanged,
} from "firebase/auth";
import {telnumber} from "./patient_signupUI.js"

console.log(telnumber);
// redirect user if not signed
onAuthStateChanged(auth, (user) => {
  if (!user) location.href = "./index.html";
  else {
    console.log("alo");
  }
});

// variabile
const form = document.querySelector("form") as HTMLFormElement;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = form.email.value;
  const pass = form.pass.value;
  const nume = form.nume.value;
  const prenume =form.prenume.value;
  const credential = EmailAuthProvider.credential(email, pass);
  linkWithCredential(auth.currentUser, credential)
    .then((usercred) => {
      const UID = auth.currentUser.uid;
      setDoc(doc(db, "pacienti",UID), {
        nume,
        prenume,
      });
      const user = usercred.user;
      console.log(user);
    })
    .catch((err) => {
      console.log(err);
    });
});
