import "../../styles/medic/med_main.css";
import "../../styles/index.css";
import "./med_mainCanv";
import {
  getDoc,
  doc,
  setDoc,
  query,
  collection,
  where,
  getDocs,
} from "firebase/firestore";
import { db, auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const MedicName = document.querySelector(".medic-name");
const NoAccess = document.querySelector(".NoAccess");
const AccountName = document.querySelector("#account-name");

async function Invitation(MedRef) {
  const docSnap = await getDoc(MedRef);
  if (docSnap.exists()) {
    const Nume = docSnap.data().nume;
    const Prenume = docSnap.data().prenume;
    return `${Nume} ${Prenume}`;
  } else throw TypeError("nu esti docos");
}

const ListaPacienti = document.querySelector("#listaPacienti");
async function PatientSearch(q) {
  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) throw TypeError("unde s pacientii doctore");
  else
    querySnapshot.forEach((doc) => {
      const pacient = document.createElement("li");
      const anchor = document.createElement("a");
      anchor.classList.add(
        "block",
        "border-logo_blue",
        "w-[100%]",
        "text-center",
        "text-xl",
        "lg:text-2xl",
        "font-poppins",
        "border-[3px]",
        "my-4",
        "lg:my-6",
        "p-2",
        "capitalize",
        "hover:bg-logo_blue",
        "hover:text-white",
        "duration-500"
      );
      pacient.appendChild(anchor);
      const UID = doc.id;
      anchor.href = `./med_patientpg.html?ID=${UID}`;
      anchor.innerHTML = `${doc.data().nume} ${doc.data().prenume}`;
      ListaPacienti.appendChild(pacient);
    });
}
onAuthStateChanged(auth, (user) => {
  if (!user) {
    location.href = "./index.html";
  } else {
    const MedRef = doc(db, "medici", user.uid);
    Invitation(MedRef).then((cred) => {
      MedicName.textContent = cred;
      AccountName.textContent = cred;
      console.log(cred);
      NoAccess.classList.add("opacity-0");
      NoAccess.classList.add("pointer-events-none");
    });
    const q = query(collection(db, "pacienti"), where("medic", "==", user.uid));
    PatientSearch(q);
  }
});

// veriables
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

// async
// events
window.addEventListener("scroll", (e) => {
  header.classList.toggle("culoare", window.scrollY > 0);
  if (window.scrollY > 0) {
    Logo.classList.remove("xl:h-24", "xl:w-24", "h-20", "w-20");
    Logo.classList.add("marime", "duration-300");
  } else {
    Logo.classList.remove("marime");
    Logo.classList.add("xl:h-24", "xl:w-24", "h-20", "w-20", "duration-300");
  }
});

menuBtn.addEventListener("click", (e) => {
  Logo.classList.remove("duration-300");
  header.classList.remove("culoare");
  logoLink.classList.toggle("invisible");
  menuBtn.classList.toggle("is-active");
  if (menuBtn.classList.contains("is-active")) {
    MeniuWrapper.classList.add("opacity-[75%]");
    MeniuWrapper.classList.remove("pointer-events-none");
  } else {
    MeniuWrapper.classList.remove("opacity-[75%]");
    MeniuWrapper.classList.add("pointer-events-none");
    if (window.scrollY > 0) header.classList.add("culoare");
  }
});
MeniuWrapper.addEventListener("click", (e) => {
  menuBtn.classList.remove("is-active");
  MeniuWrapper.classList.remove("opacity-[75%]");
  logoLink.classList.remove("invisible");
  MeniuWrapper.classList.add("pointer-events-none");
  if (window.scrollY > 0) header.classList.add("culoare");
});
CloseInvite.addEventListener("click", (e) => {
  PacientInvitation.classList.add("scale-0");
  inviteWrapper.classList.remove("opacity-[75%]");
  inviteWrapper.classList.add("pointer-events-none");
});

invitationBtn.addEventListener("click", (e) => {
  PacientInvitation.classList.remove("scale-0");
  inviteWrapper.classList.add("opacity-[75%]");
  inviteWrapper.classList.remove("pointer-events-none");
});
inviteWrapper.addEventListener("click", (e) => {
  PacientInvitation.classList.add("scale-0");
  inviteWrapper.classList.remove("opacity-[75%]");
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
      let phone = InviteForm.phone.value;
      if (phone[0] != "+") phone = "+4" + phone;
      console.log(phone);
      setDoc(doc(db, "invited_users", phone), {
        medic: UID,
      });
    });
  });
});
