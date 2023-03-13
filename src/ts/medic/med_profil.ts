import "../../styles/medic/med_profil.css";
import "../../styles/index.css";
import { auth, db } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, DocumentReference, getDoc, updateDoc } from "firebase/firestore";

// variabile necesare preincarcare pagina
const formDetalii = document.querySelector("#detalii_cont") as HTMLFormElement;

async function MedInfo(MedRef: DocumentReference) {
  const docSnap = await getDoc(MedRef);
  if (docSnap.exists()) {
    formDetalii.nume.value = docSnap.data().nume;
    formDetalii.prenume.value = docSnap.data().prenume;
    formDetalii.tel.value = docSnap.data().telnumb;
    formDetalii.jud.value = docSnap.data().jud;
    formDetalii.loc.value = docSnap.data().loc;
    formDetalii.work_start.value = docSnap.data().workstart;
    formDetalii.work_end.value = docSnap.data().workend;
  } else throw TypeError("nu esti docos");
}

onAuthStateChanged(auth, (user) => {
  if (!user) location.href = "./index.html";
  else {
    const MedRef = doc(db, "medici", user.uid);
    MedInfo(MedRef);
  }
});

const btnCont = document.querySelector("#btn_detalii");
const btnParola = document.querySelector("#btn_parola");
const btnEmail = document.querySelector("#btn_email");
const btnDeconectare = document.querySelector("#btn_deconectare");
const formPass = document.querySelector("#schimba_parola");
const formEmail = document.querySelector("#schimba_email");
const formTitle = document.querySelector("h2");

btnCont.addEventListener("click", () => {
  if (!btnCont.classList.contains("bg-logo_blue")) {
    // culori
    btnCont.classList.add("bg-logo_blue");
    btnCont.classList.remove("text-gray-500");
    btnCont.classList.add("text-white");
    btnEmail.classList.remove("bg-logo_blue");
    btnEmail.classList.remove("text-white");
    btnEmail.classList.add("text-gray-500");
    btnParola.classList.remove("bg-logo_blue");
    btnParola.classList.remove("text-white");
    btnParola.classList.add("text-gray-500");

    // afisare form
    formDetalii.classList.remove("hidden");
    formDetalii.classList.add("flex");
    formPass.classList.add("hidden");
    formPass.classList.remove("flex");
    formEmail.classList.add("hidden");
    formEmail.classList.remove("flex");

    //titlu
    formTitle.textContent = "Detalii cont";
  }
});

btnParola.addEventListener("click", () => {
  if (!btnParola.classList.contains("bg-logo_blue")) {
    // culori
    btnParola.classList.add("bg-logo_blue");
    btnParola.classList.remove("text-gray-500");
    btnParola.classList.add("text-white");
    btnEmail.classList.remove("bg-logo_blue");
    btnEmail.classList.remove("text-white");
    btnEmail.classList.add("text-gray-500");
    btnCont.classList.remove("bg-logo_blue");
    btnCont.classList.remove("text-white");
    btnCont.classList.add("text-gray-500");

    // afisare form
    formPass.classList.remove("hidden");
    formPass.classList.add("flex");
    formDetalii.classList.add("hidden");
    formDetalii.classList.remove("flex");
    formEmail.classList.add("hidden");
    formEmail.classList.remove("flex");

    //titlu
    formTitle.textContent = "Schimba email";
  }
});

btnEmail.addEventListener("click", () => {
  if (!btnEmail.classList.contains("bg-logo_blue")) {
    //culori
    btnEmail.classList.add("bg-logo_blue");
    btnEmail.classList.remove("text-gray-500");
    btnEmail.classList.add("text-white");
    btnParola.classList.remove("bg-logo_blue");
    btnParola.classList.remove("text-white");
    btnParola.classList.add("text-gray-500");
    btnCont.classList.remove("bg-logo_blue");
    btnCont.classList.remove("text-white");
    btnCont.classList.add("text-gray-500");

    // afisare form
    formEmail.classList.remove("hidden");
    formEmail.classList.add("flex");
    formPass.classList.add("hidden");
    formPass.classList.remove("flex");
    formDetalii.classList.add("hidden");
    formDetalii.classList.remove("flex");

    //titlu
    formTitle.textContent = "Schimba parola";
  }
});

formDetalii.addEventListener("submit", (e) => {
  e.preventDefault();
  const MedRef = doc(db, "medici", auth.currentUser.uid);
  updateDoc(MedRef, {
    nume: formDetalii.nume.value,
    prenume: formDetalii.prenume.value,
    telnumb: formDetalii.tel.value,
    jud: formDetalii.jud.value,
    loc: formDetalii.loc.value,
    workstart: formDetalii.work_start.value,
    workend: formDetalii.work_end.value,
  }).then(() => {
    MedInfo(MedRef);
  });
});

btnDeconectare.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      location.href = "./index.html";
    })
    .catch((err) => {
      console.log(err);
    });
});
