import intlTelInput from "intl-tel-input";
const number = document.querySelector("#phoneNumber");
export var iti = intlTelInput(number, {
  // any initialisation options go here
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.min.js",
  initialCountry: "ro",
  formatOnDisplay: true,
});
