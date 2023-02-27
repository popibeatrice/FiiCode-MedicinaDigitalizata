import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "../firebase.ts";
const SignupForm = document.querySelector("form");
const recaptcha = document.querySelector(".recaptcha");
const button = document.querySelector("button");
const phonefield = SignupForm.phone.value;
///const auth = getAuth();
window.recaptchaVerifier = new RecaptchaVerifier("recaptcha", {}, auth);
// recaptchaVerifier.render().then((widgetId) => {
//   window.recaptchaWidgetId = widgetId;
//   const recaptchaResponse = grecaptcha.getResponse(recaptchaWidgetId);
// });
const appVerifier = window.recaptchaVerifier;
console.log(appVerifier);

SignupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  signInWithPhoneNumber(auth, phonefield, appVerifier)
    .then((confirmationResult) => {
      console.log(".");
      window.confirmationResult = confirmationResult;
      // ...
    })
    .catch((error) => {
      grecaptcha.reset(window.recaptchaWidgetId);
    });
});
// const recaptchaVerifier = new RecaptchaVerifier(
//     recaptcha,
//   {
//     size: "normal",
//     callback: () => {
//       console.log("pipi");

//       // signInWithPhoneNumber(auth, phonefield, recaptchaVerifier)
//       // .then((confirmationResult) => {
//       //     const verificationCode = prompt("oo");

//       //     })
//       //     .catch((err) => {
//       //       console.error(err);
//       //     });
//     },
//     "expired-callback": () => {
//       // Response expired. Ask user to solve reCAPTCHA again.
//       // ...
//     },
//   },
//   auth
// );
