import "../../styles/medic/med_patientpg.css";
import "../../styles/index.css";
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
} from "firebase/firestore";
import { async } from "@firebase/util";

// NAVBAR BURGUR DROPDOWN

// variabile
const menuBtn = document.querySelector(".meniu");
const MeniuWrapper = document.querySelector(".meniu-wrapper");
const numePacient = document.querySelector("#nume_pacient") as HTMLElement;
const varstaPacient = document.querySelector("#varsta_pacient") as HTMLElement;
const judPacient = document.querySelector("#jud_pacient") as HTMLElement;
const locPacient = document.querySelector("#loc_pacient") as HTMLElement;
const stradaPacient = document.querySelector("#strada_pacient") as HTMLElement;
const noAccess = document.querySelector("#no_access");
const header = document.querySelector("header");
const Logo = document.querySelector("#Logo");
const logoLink = document.querySelector("#logo_link");
const urlParams = new URLSearchParams(window.location.search);
const UID = urlParams.get("ID");
const MediciList = document.querySelector("#medici");
const Search = document.querySelector("#searchMed");

const FilterTodos = (term : any) => {
  Array.from(MediciList.children)
    .filter((todo) => !todo.textContent.includes(term))
    .forEach((todo) => {
      todo.classList.add("filtered");
    });
    Array.from(MediciList.children).filter(todo => todo.textContent.includes(term))
    .forEach(todo => {
      todo.classList.remove("filtered");
    });
};

async function Doctors(Meds: any) {
  const querySnapshot = await getDocs(Meds);
  if (querySnapshot.empty) MediciList.textContent = "Nu sunt medici disponibili in zona";
  else {
    querySnapshot.forEach((doc: any) => {
      const Medic = document.createElement("li");
      ///Medic.textContent = ` ${doc.data().nume} ${doc.data().nume}`;
      Medic.textContent = ` ${doc.data().nume} ${doc.data().prenume}`;
      Medic.classList.add("w-full", "text-white", "my-4", "p-2", "capitalize", "bg-gray-600", "rounded-sm");
      MediciList.appendChild(Medic);
      Search.addEventListener("keyup", (e) => {
        const event = e.target as any;
        const term = event.value.trim();
        FilterTodos(term);
      });
    });
  }
}
// verificam daca e conectat
onAuthStateChanged(auth, (user) => {
  if (!user) {
    location.href = "./index.html";
  } else {
    const pacientRef = doc(db, "pacienti", UID);
    getDoc(pacientRef).then((cred) => {
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

// transformare burgur
menuBtn.addEventListener("click", (e) => {
  Logo.classList.remove("duration-300");
  menuBtn.classList.toggle("is-active");
  logoLink.classList.toggle("invisible");
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
});
ClosePop.addEventListener("click", (e) => {
  MedicPOP.classList.add("scale-0");
  MedicPopWrap.classList.remove("opacity-[75%]");
  MedicPopWrap.classList.add("pointer-events-none");
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
  const PDFinput = document.querySelector("#PDF_input") as HTMLFormElement;
  PDFinput.click();
}
PDFuploadBtn.addEventListener("click", () => {
  openFile();
});
PDFsendBtn.addEventListener("click", () => {
  const PDFform = document.querySelector("#PDF_form") as HTMLFormElement;
  const PDF = PDFform.PDF_input.files[0];
  if (PDF === undefined) {
    alert("selectati PDF");
    return;
  }
  let PDFstring: string | ArrayBuffer;
  let reader_id = new FileReader();
  reader_id.readAsDataURL(PDF);
  reader_id.onload = (e) => {
    // transform pdf in base 64
    PDFstring = reader_id.result;
    const PDFrefID = ref(storage, `caca/istoricMed/${PDF.name}`);
    uploadString(PDFrefID, PDFstring as string, "data_url")
      .then(() => {
        alert("pdf incarcat cu succes");
        PDFform.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };
});

const listRef = ref(storage, "caca/istoricMed");
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
