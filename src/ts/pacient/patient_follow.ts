import "../../styles/index.css";
import "../../styles/patient_follow.css";
import { auth } from "../firebase";
import {
  EmailAuthProvider,
  linkWithCredential,
  onAuthStateChanged,
} from "firebase/auth";

// redirect user if not signed
onAuthStateChanged(auth, (user) => {
  if (!user) location.href = "./index.html";
  else {
    console.log("alo");
    console.log(user);
  }
});

// variabile
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = form.email.value;
  const pass = form.pass.value;
  const credential = EmailAuthProvider.credential(email, pass);
  linkWithCredential(auth.currentUser, credential)
    .then((usercred) => {
      const user = usercred.user;
      console.log(user);
    })
    .catch((err) => {
      console.log(err);
    });
});
