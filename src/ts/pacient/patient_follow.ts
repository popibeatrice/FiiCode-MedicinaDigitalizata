import "../../styles/index.css";
import "../../styles/patient_follow.css";
import { auth } from "../firebase";
import { EmailAuthProvider, linkWithCredential } from "firebase/auth";

// variabile
const form = document.querySelector("form");
form.addEventListener("click", (e) => {
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
