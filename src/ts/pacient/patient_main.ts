import "../../styles/pacient/patient_main.css";
import "../../styles/index.css";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { DocumentSnapshot, getDoc, doc } from "firebase/firestore";
const MedicName = document.querySelector(".medic-name");
const NoAccess = document.querySelector(".NoAccess");
const AccountName = document.querySelector(".account-name");

async function Invitation(MedRef: any) {
  const docSnap = (await getDoc(MedRef)) as DocumentSnapshot;
  if (docSnap.exists()) {
    const Nume = docSnap.data().nume;
    const Prenume = docSnap.data().prenume;
    return `${Nume} ${Prenume}`;
  } else throw TypeError("nu esti docos");
}

onAuthStateChanged(auth, (user) => {
    if (!user) {
      location.href = "./index.html";
    } else {
      const MedRef = doc(db, "pacienti", user.uid);
      Invitation(MedRef).then((cred) => {
        MedicName.textContent = cred;
        AccountName.textContent = cred;
        console.log(cred);
        NoAccess.classList.add("opacity-0");
        NoAccess.classList.add("pointer-events-none");
      });
    }
  });

const menuBtn = document.querySelector(".meniu");
const invitationBtn = document.querySelector("#invitation");
const PacientInvitation = document.querySelector(".PacientInvite");
const inviteWrapper = document.querySelector(".invite-wrapper");
const InviteForm = document.querySelector(".invite-form");
const MeniuWrapper = document.querySelector(".meniu-wrapper");
const CloseInvite = document.querySelector(".closeInvite-login");
const header = document.querySelector("header");
const Logo = document.querySelector("#Logo");
const logoLink = document.querySelector("#logo_link");

menuBtn.addEventListener("click", (e) => {
  Logo.classList.remove("duration-300");
  logoLink.classList.toggle("invisible");
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
  logoLink.classList.remove("invisible");
  MeniuWrapper.classList.add("pointer-events-none");
});
CloseInvite.addEventListener("click", (e) => {
  PacientInvitation.classList.add("scale-0");
  inviteWrapper.classList.remove("opacity-[75%]");
  inviteWrapper.classList.add("pointer-events-none");
});
