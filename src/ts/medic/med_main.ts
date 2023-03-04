import "../../styles/medic/med_main.css";
import "../../styles/index.css";
import { getDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
const menuBtn = document.querySelector(".meniu");
menuBtn.addEventListener("click", (e) => {
  menuBtn.classList.toggle("is-active");
});

const invitationBtn = document.querySelector("#invitation");
const finalInvite = document.querySelector("#finalInvite");
const PacientInvitation = document.querySelector(".PacientInvite");
const inviteWrapper = document.querySelector(".invite-wrapper");
const InviteForm = document.querySelector(".invite-form") as HTMLFormElement;
onAuthStateChanged(auth, (user) => {
  if (user) console.log(user);
});

invitationBtn.addEventListener("click", (e) => {
  PacientInvitation.classList.remove("scale-0");
  inviteWrapper.classList.add("opacity-[65%]");
  inviteWrapper.classList.remove("pointer-events-none");
});
inviteWrapper.addEventListener("click", (e) => {
  PacientInvitation.classList.add("scale-0");
  inviteWrapper.classList.remove("opacity-[65%]");
  inviteWrapper.classList.add("pointer-events-none");
});
// finalInvite.addEventListener("click", (e) => {

// })
