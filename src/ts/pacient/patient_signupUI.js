import { auth } from "../firebase.ts";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  signInWithPhoneNumbe(form.phoneNumber.value);
});
console.log(form);
function signInWithPhoneNumbe(phoneNumber) {
  window.appVerifier = new RecaptchaVerifier("recaptcha-container", {}, auth);

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
      console.log(result.user);
    })
    .catch(function (error) {
      console.error(error);
    });
}
