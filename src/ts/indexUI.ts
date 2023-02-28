import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "./firebase";
//declarari
const joinBtn = document.querySelector("#join") as HTMLElement;
const joincloseBtn = document.querySelector("#joinclose") as HTMLElement;
const joinPopup = document.querySelector("#joinpopup") as HTMLElement;
const joinWrap = document.querySelector("#joinwrap") as HTMLElement;
const login_popup = document.querySelector(".login-popup") as HTMLElement;
const login_button = document.querySelector("#login") as HTMLElement;
const wrap = document.querySelector(".wrap") as HTMLElement;
const close_login = document.querySelector(".close-login") as HTMLElement;
const LastLogin = document.querySelector("#LastLogin") as HTMLFormElement;

//events

// Pop up
joinBtn.addEventListener("click", (e) => {
  joinPopup.classList.remove("hidden");
  joinPopup.classList.add("flex");
  joinWrap.classList.add("opacity-[65%]");
  joinWrap.classList.remove("pointer-events-none");
});
login_button.addEventListener("click", (e) => {
  login_popup.classList.remove("hidden");
  login_popup.classList.add("flex");
  wrap.classList.add("opacity-[65%]");
  wrap.classList.remove("pointer-events-none");
});

// Pop up close
joinWrap.addEventListener("click", (e) => {
  joinPopup.classList.add("hidden");
  joinPopup.classList.remove("flex");
  joinWrap.classList.remove("opacity-[65%]");
  joinWrap.classList.add("pointer-events-none");
});
wrap.addEventListener("click", (e) => {
  login_popup.classList.add("hidden");
  login_popup.classList.remove("flex");
  wrap.classList.remove("opacity-[65%]");
  wrap.classList.add("pointer-events-none");
});

// Pop up close
joincloseBtn.addEventListener("click", (e) => {
  joinPopup.classList.add("hidden");
  joinPopup.classList.remove("flex");
  joinWrap.classList.remove("opacity-[65%]");
  joinWrap.classList.add("pointer-events-none");
});
close_login.addEventListener("click", (e) => {
  login_popup.classList.add("hidden");
  login_popup.classList.remove("flex");
  wrap.classList.remove("opacity-[65%]");
  wrap.classList.add("pointer-events-none");
});

//Log in form
LastLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = LastLogin.email.value;
  const password = LastLogin.password.value;
  signInWithEmailAndPassword(auth, email, password)
  .then((cred) => console.log("usser logged in"))
  .catch(() => console.log("user is not logged"))
})
