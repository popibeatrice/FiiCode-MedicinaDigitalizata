import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { DocumentData, getDoc, doc } from "firebase/firestore";
import { Snapshot } from "copy-webpack-plugin/types";
//declarari
const joinBtn = document.querySelector("#join") as HTMLElement;
const joincloseBtn = document.querySelector("#joinclose") as HTMLElement;
const joinPopup = document.querySelector("#joinpopup") as HTMLElement;
const joinWrap = document.querySelector("#joinwrap") as HTMLElement;
const login_popup = document.querySelector(".login-popup") as HTMLElement;
const login_button = document.querySelector("#login") as HTMLElement;
const wrap = document.querySelector(".wrap") as HTMLElement;
const close_login = document.querySelector(".close-login") as HTMLElement;
const Login = document.querySelector("#Login") as HTMLFormElement;

async function getDuery(MedRef: any) {
  const docSnap = await getDoc(MedRef);
  if (docSnap.exists()) {
    location.href = "./med_main.html";
  } else {
    location.href = "./patient_main.html";
  }
}

//events
// Pop up
joinBtn.addEventListener("click", (e) => {
  joinPopup.classList.remove("scale-0");
  joinPopup.classList.add("flex");
  joinWrap.classList.add("opacity-[65%]");
  joinWrap.classList.remove("pointer-events-none");
});
login_button.addEventListener("click", (e) => {
  login_popup.classList.remove("scale-0");
  login_popup.classList.add("flex");
  wrap.classList.add("opacity-[65%]");
  wrap.classList.remove("pointer-events-none");
});

// Pop up close
joinWrap.addEventListener("click", (e) => {
  joinPopup.classList.add("scale-0");
  joinPopup.classList.remove("flex");
  joinWrap.classList.remove("opacity-[65%]");
  joinWrap.classList.add("pointer-events-none");
});
wrap.addEventListener("click", (e) => {
  login_popup.classList.add("scale-0");
  login_popup.classList.remove("flex");
  wrap.classList.remove("opacity-[65%]");
  wrap.classList.add("pointer-events-none");
});

// Pop up close
joincloseBtn.addEventListener("click", (e) => {
  joinPopup.classList.add("scale-0");
  joinPopup.classList.remove("flex");
  joinWrap.classList.remove("opacity-[65%]");
  joinWrap.classList.add("pointer-events-none");
});
close_login.addEventListener("click", (e) => {
  login_popup.classList.add("scale-0");
  login_popup.classList.remove("flex");
  wrap.classList.remove("opacity-[65%]");
  wrap.classList.add("pointer-events-none");
});

//Log in form
Login.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = Login.email.value;
  const password = Login.password.value;
  signInWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      const MedRef = doc(db, "medici", auth.currentUser.uid);
      getDuery(MedRef);
      Login.reset();
    })
    .catch(() => {
      console.log("user is not logged");
    });
});
