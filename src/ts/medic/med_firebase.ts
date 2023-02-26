import { db, auth, storage } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, collection } from "firebase/firestore";
import { ref, uploadString } from "firebase/storage";

// const ReadFiles = (img: Blob) => {
//   let reader = new FileReader();
//   reader.readAsDataURL(img as Blob);
//   reader.onload = (e) => {
//     let url = reader.result as string | ArrayBuffer;
//     return url;
//   };
//   console.log(reader.onload);
// };

///variables
const signupForm = document.querySelector("form") as HTMLFormElement;

//get collection data
const colRef = collection(db, "users");

// form signup
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //input values
  const email = signupForm.email.value;
  const password = signupForm.pass.value;
  const nume = signupForm.nume.value;
  const prenume = signupForm.prenume.value;
  const telnumb = signupForm.telnumb.value;
  const idCard = signupForm.idCard.files[0];
  const medCard = signupForm.medCard.files[0];
  const workstart = signupForm.workstart.value;
  const workend = signupForm.workend.value;
  const jud = signupForm.jud.value;
  const loc = signupForm.loc.value;

  ///fileReader

  let imgID: string | ArrayBuffer;
  let imgMed: string | ArrayBuffer;

  let reader_id = new FileReader();
  reader_id.readAsDataURL(idCard);
  reader_id.onload = (e) => {
    imgID = reader_id.result as string | ArrayBuffer;
    console.log(imgID);
  };

  let reader_med = new FileReader();
  reader_med.readAsDataURL(medCard);
  reader_med.onload = (e) => {
    imgMed = reader_med.result as string | ArrayBuffer;
    console.log(imgMed);
  };

  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      //user infos
      const UID = cred.user.uid;
      setDoc(doc(db, "users", UID), {
        nume,
        prenume,
        telnumb,
        // idCard,
        // medCard,
        workstart,
        workend,
        jud,
        loc,
      });
      const ImageRef_id = ref(storage, `${UID}/${idCard.name}`);
      uploadString(ImageRef_id, imgID as string, "data_url");
      signupForm.reset();

      const ImageRef_med = ref(storage, `${UID}/${medCard.name}`);
      uploadString(ImageRef_med, imgMed as string, "data_url");
      signupForm.reset();
    })
    .catch((err) => {
      console.log(err.message);
    });
});
