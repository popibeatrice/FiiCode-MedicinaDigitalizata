import "../../styles/medic/med_main.css";
import "../../styles/index.css";
import "./med_mainCanv";
import { getDoc, doc, setDoc } from "firebase/firestore";
import { db, auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

// veriables
const menuBtn = document.querySelector(".meniu");
const invitationBtn = document.querySelector("#invitation");
const finalInvite = document.querySelector("#finalInvite");
const PacientInvitation = document.querySelector(".PacientInvite");
const inviteWrapper = document.querySelector(".invite-wrapper");
const InviteForm = document.querySelector(".invite-form");
const MeniuWrapper = document.querySelector(".meniu-wrapper");
const CloseInvite = document.querySelector(".closeInvite-login");

// async
async function Invitation(param) {
  const docSnap = await getDoc(param);
  if (docSnap.exists()) {
    const Nume = docSnap.data().nume;
    const Prenume = docSnap.data().prenume;
    return `${Nume} ${Prenume}`;
  } else throw TypeError("nu esti docos");
}

// events
menuBtn.addEventListener("click", (e) => {
  menuBtn.classList.toggle("is-active");
  if (menuBtn.classList.contains("is-active")) {
    MeniuWrapper.classList.add("opacity-[75%]");
    MeniuWrapper.classList.remove("pointer-events-none");
  } else {
    MeniuWrapper.classList.remove("opacity-[75%]");
    MeniuWrapper.classList.add("pointer-events-none");
  }
});
MeniuWrapper.addEventListener("click", (e) => {
  menuBtn.classList.remove("is-active");
  MeniuWrapper.classList.remove("opacity-[75%]");
  MeniuWrapper.classList.add("pointer-events-none");
});
CloseInvite.addEventListener("click", (e) => {
  PacientInvitation.classList.add("scale-0");
  inviteWrapper.classList.remove("opacity-[65%]");
  inviteWrapper.classList.add("pointer-events-none");
})

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
InviteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  auth.currentUser.reload().then(() => {
    const param = doc(db, "medici", auth.currentUser.uid);
    Invitation(param).then((cred) => {
      const params = {
        from_name: cred,
        user_email: InviteForm.email.value,
      };
      emailjs.send("service_r1dant5", "template_gjkxjna", params).then(() => {
        alert("invitation mail was send to you pacient");
      });
      const UID = auth.currentUser.uid;
      setDoc(doc(db, "invited_users", InviteForm.phone.value), {
        medic: UID,
      });
    });
  });
});
