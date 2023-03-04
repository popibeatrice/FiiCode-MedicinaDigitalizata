import "../../styles/medic/med_patientpg.css";
import "../../styles/index.css";
import { auth, storage } from "../firebase";
import { ref, uploadString, listAll, getDownloadURL } from "firebase/storage";

// nav burgur dropdown
const menuBtn = document.querySelector(".meniu");
menuBtn.addEventListener("click", (e) => {
  menuBtn.classList.toggle("is-active");
});

// carusel
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

// buton invizibil
const butonasMagic = document.querySelector("#posteaza");
const postBtn = document.querySelector("#trimite");
function openFile() {
  const fisa = document.querySelector("#fisa") as HTMLFormElement;
  fisa.click();
}
butonasMagic.addEventListener("click", () => {
  openFile();
});
postBtn.addEventListener("click", () => {
  const form = document.querySelector("form");
  const fisaPDF = form.fisa.files[0];
  let imgID: string | ArrayBuffer;
  let reader_id = new FileReader();
  reader_id.readAsDataURL(fisaPDF);
  reader_id.onload = (e) => {
    // img id format 64
    imgID = reader_id.result;
    const UID = auth.currentUser.uid; // cod unic user
    const ImageRef_id = ref(storage, `caca/${fisaPDF.name}`);
    uploadString(ImageRef_id, imgID as string, "data_url");
  };
});
const listRef = ref(storage, "caca");
listAll(listRef)
  .then((res) => {
    res.items.forEach((itemRef) => {
      // All the items under listRef.
      console.log(itemRef);
      getDownloadURL(itemRef).then((url) => {
        const li = document.querySelector("object") as HTMLObjectElement;
        li.data = url;
      });
    });
  })
  .catch((error) => {
    // Uh-oh, an error occurred!
  });
