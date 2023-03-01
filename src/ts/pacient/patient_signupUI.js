import { auth, db } from "../firebase.ts";
import { doc, setDoc } from "firebase/firestore";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  EmailAuthProvider,
  linkWithCredential,
} from "firebase/auth";
import {
  collection,
  where,
  query,
  documentId,
  getDocs,
} from "firebase/firestore";
import { iti, UIfollow } from "./intl-tel-inpt";

// sunt mandru de acest async function
async function getQuery(q) {
  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) throw TypeError("nu esti smecher");
}

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!iti.isValidNumber()) {
    console.log("nu e bun");
    return;
  }
  const q = query(
    collection(db, "invited_users"),
    where(documentId(), "==", iti.getNumber())
  );
  getQuery(q).then(() => {
    {
      phoneSignIn(iti.getNumber());
    }
  });
});

function phoneSignIn(phoneNumber) {
  window.appVerifier = new RecaptchaVerifier(
    "recaptcha-container",
    {
      size: "invisible",
    },
    auth
  );
  signInWithPhoneNumber(auth, phoneNumber, window.appVerifier)
    .then(function (confirmationResult) {
      // SMS verification code is sent to the user's phone
      var verificationCode = prompt(
        "Please enter the verification code sent to your mobile phone:"
      );
      return confirmationResult.confirm(verificationCode);
    })
    .then(function (result) {
      // User is signed in successfully
      UIfollow();
      // variabile
      const form = document.querySelector("form");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = form.email.value;
        const pass = form.pass.value;
        const nume = form.nume.value;
        const prenume = form.prenume.value;
        const credential = EmailAuthProvider.credential(email, pass);
        linkWithCredential(auth.currentUser, credential)
          .then((usercred) => {
            const UID = auth.currentUser.uid;
            setDoc(doc(db, "pacienti", UID), {
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
    })
    .catch(function (error) {
      console.error(error);
      alert("confirmarea nr a esuat");
      location.reload();
    });
}
