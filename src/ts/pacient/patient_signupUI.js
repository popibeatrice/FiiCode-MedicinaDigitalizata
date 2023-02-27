import { auth } from "../firebase.ts";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
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

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!iti.isValidNumber()) {
    console.log("nu e bun");
    return;
  }
  phoneSignIn(iti.getNumber());
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
