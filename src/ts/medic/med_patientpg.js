import "../../styles/medic/med_patientpg.css";
import "../../styles/index.css";
import { EmailSend } from "./emailjs.js";
import { auth, storage, db } from "../firebase";
import { ref, uploadString, listAll, getDownloadURL } from "firebase/storage";
import { onAuthStateChanged } from "firebase/auth";
import {
  doc,
  getDoc,
  getDocs,
  query,
  collection,
  where,
  DocumentSnapshot,
  setDoc,
  updateDoc,
  DocumentReference,
} from "firebase/firestore";

// NAVBAR BURGUR DROPDOWN

// variabile
const menuBtn = document.querySelector(".meniu");
const MeniuWrapper = document.querySelector(".meniu-wrapper");
const numePacient = document.querySelector("#nume_pacient");
const varstaPacient = document.querySelector("#varsta_pacient");
const judPacient = document.querySelector("#jud_pacient");
const locPacient = document.querySelector("#loc_pacient");
const stradaPacient = document.querySelector("#strada_pacient");
const noAccess = document.querySelector("#no_access");
const header = document.querySelector("header");
const Logo = document.querySelector("#Logo");
const logoLink = document.querySelector("#logo_link");
const urlParams = new URLSearchParams(window.location.search);
const UID = urlParams.get("ID");
const MediciList = document.querySelector("#medici");
const Search = document.querySelector("#searchMed");
const chooseButton = document.querySelector("#choose_button");
let Radio = new Array();
const medId = new Array();
let CurrentName;
let patientChange;
let medEmail;

async function MedEmailSearch(Med) {
  const docSnap = await getDoc(Med);
  if (docSnap.exists()) {
    medEmail = docSnap.data().email;
    console.log(medEmail);
  } else throw TypeError("nu esti docos");
}

async function CurrentMedName(Med) {
  const docSnap = await getDoc(Med);
  if (docSnap.exists()) {
    CurrentName = ` ${docSnap.data().nume} ${docSnap.data().prenume}`;
    console.log(medEmail);
  } else throw TypeError("nu esti docos");
}

async function Doctors(Meds) {
  const querySnapshot = await getDocs(Meds);
  if (querySnapshot.empty)
    MediciList.textContent = "Nu sunt medici disponibili in zona";
  else {
    querySnapshot.forEach((doc) => {
      if (doc.id != auth.currentUser.uid) {
        const MedicLabel = document.createElement("label");
        const Medic = document.createElement("input");
        medId.push(doc.id);
        Medic.classList.add("invisible");
        Medic.type = "radio";
        Medic.name = "radio";
        MedicLabel.textContent = ` ${doc.data().nume} ${doc.data().prenume}`;
        MedicLabel.classList.add(
          "w-full",
          "text-white",
          "my-4",
          "p-2",
          "block",
          "capitalize",
          "bg-gray-600",
          "rounded-sm"
        );
        MedicLabel.appendChild(Medic);
        MediciList.appendChild(MedicLabel);
      }
    });
    Radio = Array.from(MediciList.children);
  }
}

// verificam daca e conectat
onAuthStateChanged(auth, (user) => {
  if (!user) {
    location.href = "./index.html";
  } else {
    const pacientRef = doc(db, "pacienti", UID);
    getDoc(pacientRef).then((cred) => {
      patientChange = cred;
      console.log(cred);
      const numeComplet = `${cred.data().nume} ${cred.data().prenume}`;
      const strada = `${cred.data().strada}`;
      const loc = `${cred.data().loc}`;
      const jud = `${cred.data().jud}`;
      const varsta = `${cred.data().varsta}`;
      numePacient.innerText = numeComplet;
      varstaPacient.innerHTML += " " + varsta;
      locPacient.innerHTML += " " + loc;
      judPacient.innerHTML += " " + jud;
      stradaPacient.innerHTML += " " + strada;
      const Meds = query(
        collection(db, "medici"),
        where("jud", "==", cred.data().jud)
      );
      Doctors(Meds);
      noAccess.classList.add("opacity-0");
      noAccess.classList.add("pointer-events-none");
    });
  }
});

MediciList.addEventListener("click", (e) => {
  const event = e.target;
  if (event.tagName === "LABEL") {
    event.children[0].checked = true;
    Radio.forEach((label) => {
      const input = label.children[0];
      if (input.checked === true) {
        input.parentElement.classList.remove("bg-gray-600");
        input.parentElement.classList.add("bg-gray-800");
      } else {
        input.parentElement.classList.remove("bg-gray-800");
        input.parentElement.classList.add("bg-gray-600");
      }
    });
  }
});

const FilterMeds = (term) => {
  Array.from(MediciList.children)
    .filter((todo) => !todo.textContent.includes(term))
    .forEach((todo) => {
      todo.classList.remove("block");
      todo.classList.add("filtered");
    });
  Array.from(MediciList.children)
    .filter((todo) => todo.textContent.includes(term))
    .forEach((todo) => {
      todo.classList.remove("filtered");
      todo.classList.add("block");
    });
};

Search.addEventListener("keyup", (e) => {
  const event = e.target;
  const term = event.value.trim();
  FilterMeds(term);
});

chooseButton.addEventListener("click", () => {
  let checkedRadio;
  Radio.forEach((label, index) => {
    const input = label.children[0];
    if (input.checked === true) checkedRadio = index;
  });
  medId.forEach((id, index) => {
    if (index === checkedRadio) {
      updateDoc(doc(db, "pacienti", UID), {
        medic: id,
      }).then(() => {
        const MedRef = doc(db, "medici", id);
        MedEmailSearch(MedRef).then(() => {
          const medicName = doc(db, "medici", auth.currentUser.uid);
          CurrentMedName(medicName).then(() => {
            const params = {
              from_name: CurrentName,
              pacient_name: `${patientChange.data().nume} ${
                patientChange.data().prenume
              }`,
              new_med: medEmail,
            };
            emailjs
              .send("service_yosjkcn", "template_0p86286", params)
              .then(() => {
                alert("invitation mail was send to you pacient");
                location.href = "./med_main.html";
              });
          });
        });
      });
    }
  });
});

// transformare burgur
menuBtn.addEventListener("click", (e) => {
  header.classList.remove("culoare");
  Logo.classList.remove("duration-300");
  menuBtn.classList.toggle("is-active");
  logoLink.classList.toggle("invisible");
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
  if (window.scrollY > 0) header.classList.add("culoare");
  menuBtn.classList.remove("is-active");
  logoLink.classList.remove("invisible");
  MeniuWrapper.classList.remove("opacity-[75%]");
  MeniuWrapper.classList.add("pointer-events-none");
});

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
//trimite pacient
const TrimitePacient = document.querySelector("#trimite");
const MedicPOP = document.querySelector("#medicPop");
const MedicPopWrap = document.querySelector("#MedicPopWrap");
const ClosePop = document.querySelector(".closeMed");

TrimitePacient.addEventListener("click", (e) => {
  MedicPOP.classList.remove("scale-0");
  MedicPopWrap.classList.add("opacity-[75%]");
  MedicPopWrap.classList.remove("pointer-events-none");
});

MedicPopWrap.addEventListener("click", (e) => {
  MedicPOP.classList.add("scale-0");
  MedicPopWrap.classList.remove("opacity-[75%]");
  MedicPopWrap.classList.add("pointer-events-none");
  MediciList.reset();
});

ClosePop.addEventListener("click", (e) => {
  MedicPOP.classList.add("scale-0");
  MedicPopWrap.classList.remove("opacity-[75%]");
  MedicPopWrap.classList.add("pointer-events-none");
  MediciList.reset();
});

// CARUSEL DE FISE MEDICALE

//variabile
const container = document.querySelector(".scrolol");
const slide = document.querySelector(".slide");
const spate = document.querySelector("#spate");
const fata = document.querySelector("#fata");

fata.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  container.scrollLeft += slideWidth;
});

spate.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  container.scrollLeft -= slideWidth;
});

// ALEGERE SI INCARCARE PDF

// variabile
const PDFuploadBtn = document.querySelector("#PDFupload_btn");
const PDFsendBtn = document.querySelector("#PDFsend_btn");

// functie care da trigger la inputul ala urat
function openFile() {
  const PDFinput = document.querySelector("#PDF_input");
  PDFinput.click();
}

PDFuploadBtn.addEventListener("click", () => {
  openFile();
});

PDFsendBtn.addEventListener("click", () => {
  const PDFform = document.querySelector("#PDF_form");
  const PDF = PDFform.PDF_input.files[0];
  if (PDF === undefined) {
    alert("selectati PDF");
    return;
  }
  let PDFstring;
  let reader_id = new FileReader();
  reader_id.readAsDataURL(PDF);
  reader_id.onload = (e) => {
    // transform pdf in base 64
    PDFstring = reader_id.result;
    const PDFrefID = ref(storage, `${UID}/istoricMed/${PDF.name}`);
    uploadString(PDFrefID, PDFstring, "data_url")
      .then(() => {
        alert("pdf incarcat cu succes");
        PDFform.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };
});

const listRef = ref(storage, `${UID}/istoricMed`);
listAll(listRef)
  .then((res) => {
    res.items.forEach((itemRef) => {
      // toate pdfurile din istoric
      getDownloadURL(itemRef).then((url) => {
        const ul = document.querySelector(".scrolol");
        const li = document.createElement("li");
        const object = document.createElement("object");
        li.classList.add("slide", "w-full");
        object.classList.add(
          "h-[850px]",
          "w-[225px]",
          "xxs:w-[300px]",
          "xs:w-[450px]",
          "md:w-[625px]",
          "lg:w-[850px]"
        );
        object.type = "application/pdf";
        object.data = url;
        li.appendChild(object);
        ul.appendChild(li);
      });
    });
  })
  .catch((err) => {
    console.log(err);
  });
