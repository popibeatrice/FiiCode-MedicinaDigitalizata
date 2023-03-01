import { auth, db } from "../firebase.ts";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import {
  collection,
  where,
  query,
  documentId,
  getDocs,
} from "firebase/firestore";
import intlTelInput from "intl-tel-input";
// numar internat
const number = document.querySelector("#phoneNumber");
var iti = intlTelInput(number, {
  // any initialisation options go here
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.min.js",
  initialCountry: "ro",
  formatOnDisplay: true,
});
var telnumber = "a";
export {telnumber};
// sunt mandru de acest async function
async function getQuery(q) {
  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) throw TypeError("nu esti smecher");
  else {
  }
}

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  //telnumber = iti.getNumber();
  //console.log(telnumber);
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
      location.href = "./patient_follow.html";
    })
    .catch(function (error) {
      console.error(error);
      alert("confirmarea nr a esuat");
      location.reload();
    });
}
console.log(telnumber);