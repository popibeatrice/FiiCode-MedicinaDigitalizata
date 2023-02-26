import { db, auth, storage } from "../firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc, collection } from "firebase/firestore";
import { ref, uploadString } from "firebase/storage";

// variables
const signupForm = document.querySelector("form") as HTMLFormElement;
const submit = document.querySelector("#submit") as HTMLButtonElement;
const verify = document.querySelector("#verify") as HTMLButtonElement;
const passRef = document.querySelector("#pass") as HTMLInputElement;
const passconf = document.querySelector("#passconf") as HTMLInputElement;
let pass: string;

// get collection data
const colRef = collection(db, "users");

// pass content
passRef.addEventListener("keyup", () => {
  pass = passRef.value;
  console.log(pass);
});

// pass confirmation
passconf.addEventListener("keyup", () => {
  if (passconf.value !== pass) passconf.style.borderBottomColor = "red";
  else passconf.style.borderBottomColor = "lightgreen";
});

verify.addEventListener("click", (e) => {
  e.preventDefault();

  // input values
  const email = signupForm.email.value;
  const password = signupForm.pass.value;
  if (email === "" || password === "") {
    console.log("completati campurile");
    return;
  }
  // final pass conf
  if (password !== passconf.value) {
    console.log("nu e bun");
    return;
  }
  // create user
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      sendEmailVerification(auth.currentUser).then(() => {
        console.log("verify your email");
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  auth.currentUser.reload();
  setTimeout(() => {
    auth.currentUser.reload();
    console.log(auth.currentUser.emailVerified);
    if (!auth.currentUser.emailVerified) {
      auth.updateCurrentUser;
      auth.currentUser.reload();
    }
    console.log(auth.currentUser.emailVerified);
    if (auth.currentUser.emailVerified) {
      // user info
      const nume = signupForm.nume.value;
      const prenume = signupForm.prenume.value;
      const telnumb = signupForm.telnumb.value;
      const idCard = signupForm.idCard.files[0];
      const medCard = signupForm.medCard.files[0];
      const workstart = signupForm.workstart.value;
      const workend = signupForm.workend.value;
      const jud = signupForm.jud.value;
      const loc = signupForm.loc.value;

      if (
        nume === "" ||
        prenume === "" ||
        telnumb === "" ||
        idCard === "" ||
        medCard === "" ||
        workstart === "" ||
        workend === "" ||
        jud === "" ||
        loc === ""
      ) {
        console.log("sugi");
        return;
      }

      // fileReader
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
      const UID = auth.currentUser.uid; // cod unic user
      setDoc(doc(db, "users", UID), {
        nume,
        prenume,
        telnumb,
        workstart,
        workend,
        jud,
        loc,
      });

      // user uploads
      const ImageRef_id = ref(storage, `${UID}/${idCard.name}`);
      uploadString(ImageRef_id, imgID as string, "data_url");

      const ImageRef_med = ref(storage, `${UID}/${medCard.name}`);
      uploadString(ImageRef_med, imgMed as string, "data_url");
      signupForm.reset();
    } else console.log("emailul nu e confirmat");
  }, 1000);
});
