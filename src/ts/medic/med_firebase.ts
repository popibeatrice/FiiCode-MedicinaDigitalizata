import { db, auth, storage } from "../firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadString } from "firebase/storage";

// variables
const signupForm = document.querySelector("form") as HTMLFormElement;
const submit = document.querySelector("#submit") as HTMLButtonElement;
const verify = document.querySelector("#verify") as HTMLButtonElement;
const passRef = document.querySelector("#pass") as HTMLInputElement;
const passConf = document.querySelector("#passconf") as HTMLInputElement;
const PasswordField = document.querySelector(".password-regex") as HTMLElement;
const passRegEx = /^(.{0,7}|[^a-z]{1,}|[^A-Z]{1,}|[^\d]{1,})$|[\s]/;
const telnumbRegEx =
  /^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|\-)?([0-9]{3}(\s|\.|\-|)){2}$/;
var imgID: string | ArrayBuffer;
var imgMed: string | ArrayBuffer;

// pass content
passRef.addEventListener("keyup", () => {
  if (passRef.value === "") {
    passRef.style.borderBottomColor = "#293241";
    PasswordField.style.color = "rgb(75 85 99 / var(--tw-text-opacity))";
  } else if (passRegEx.test(passRef.value) === true) {
    passRef.style.borderBottomColor = "red";
    PasswordField.style.color = "red";
  } else if (passRegEx.test(passRef.value) === false) {
    passRef.style.borderBottomColor = "lightgreen";
    PasswordField.style.color = "lightgreen";
  }
  if (passRef.value === "" || passConf.value === "")
    passConf.style.borderBottomColor = "#293241";
  else if (passConf.value !== passRef.value)
    passConf.style.borderBottomColor = "red";
  else if (passConf.value === passRef.value)
    passConf.style.borderBottomColor = "lightgreen";
});

// pass confirmation
passConf.addEventListener("keyup", () => {
  if (passConf.value === "" || passRef.value === "")
    passConf.style.borderBottomColor = "#293241";
  else if (passConf.value !== passRef.value) {
    passConf.style.borderBottomColor = "red";
  } else if (passConf.value === passRef.value) {
    passConf.style.borderBottomColor = "lightgreen";
  }
});

verify.addEventListener("click", (e) => {
  e.preventDefault();

  // input values
  const email = signupForm.email.value;
  const password = signupForm.pass.value;

  // verifications

  // campuri
  if (email === "" || password === "") {
    alert("completati campurile");
    return;
  }

  // parola
  else if (passRegEx.test(passRef.value) === true) {
    alert("parola nu e safe");
    return;
  }

  // pass conf
  else if (password !== passConf.value) {
    alert("nu e buna confirmarea parolei");
    return;
  }

  // create user
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      sendEmailVerification(auth.currentUser).then(() => {
        alert("verify your email");
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  auth.currentUser
    .reload()
    .then(() => {
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

        // verificari

        // campuri
        if (
          nume === "" ||
          prenume === "" ||
          telnumb == "" ||
          idCard === undefined ||
          medCard === undefined ||
          workstart === "" ||
          workend === "" ||
          jud === "" ||
          loc === ""
        ) {
          alert("campurile de date personale nu sunt completate");
          return;
        }
        console.log(telnumb);
        if (telnumbRegEx.test(telnumb) === false) {
          alert("nr de telefon nu e valid");
          return;
        }

        // double file reader
        let reader_id = new FileReader();
        reader_id.readAsDataURL(idCard);
        reader_id.onload = (e) => {
          // img id format 64
          imgID = reader_id.result;

          let reader_med = new FileReader();
          reader_med.readAsDataURL(medCard);
          reader_med.onload = (e) => {
            // img med format 64
            imgMed = reader_med.result;

            // backend info push
            const UID = auth.currentUser.uid; // cod unic user
            setDoc(doc(db, "medici", UID), {
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
          };
        };
      } else alert("emailul nu e confirmat");
    })
    .catch((err) => {
      console.log(err);
    });
});
