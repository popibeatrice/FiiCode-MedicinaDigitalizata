import { auth, db } from "../firebase.ts";
import { doc, setDoc } from "firebase/firestore";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  EmailAuthProvider,
  linkWithCredential,
} from "firebase/auth";
import {
  collection,
  where,
  query,
  documentId,
  getDocs,
  getDoc,
} from "firebase/firestore";
import { iti } from "./intl-tel-inpt";
var telefon;
// sunt mandru de acest async function
async function getQuery(q) {
  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) throw TypeError("nu esti smecher");
}
async function getDuery(medicRef) {
  const docSnap = await getDoc(medicRef);
  if (docSnap.exists()) return docSnap.data().medic;
  else throw TypeError("nu esti docos");
}
const form = document.querySelector("#formix");
const main = document.querySelector("main");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!iti.isValidNumber()) {
    console.log("nu e bun");
    return;
  }
  const q = query(
    collection(db, "invited_users"),
    where(documentId(), "==", iti.getNumber())
  );
  getQuery(q).then(() => {
    {
      telefon = iti.getNumber();
      phoneSignIn(iti.getNumber());
    }
  });
});

function phoneSignIn(phoneNumber) {
  window.appVerifier = new RecaptchaVerifier(
    "recaptcha-container",
    {
      size: "invisible",
    },
    auth
  );
  signInWithPhoneNumber(auth, phoneNumber, window.appVerifier)
    .then(function (confirmationResult) {
      // SMS verification code is sent to the user's phone
      var verificationCode = prompt(
        "Please enter the verification code sent to your mobile phone:"
      );
      return confirmationResult.confirm(verificationCode);
    })
    .then(function (result) {
      // variabile
      const vrajeala = document.querySelector("#vrajeala");
      const form1 = document.querySelector("#formux");
      const passRef = document.querySelector("#pass");
      const passConf = document.querySelector("#passconf");
      const PasswordField = document.querySelector(".password-regex");
      const passRegEx = /^(.{0,7}|[^a-z]{1,}|[^A-Z]{1,}|[^\d]{1,})$|[\s]/;
      main.classList.remove("flex");
      main.classList.add("hidden");
      vrajeala.classList.remove("hidden");
      vrajeala.classList.add("flex");
      // pass conf
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

      form1.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = form1.email.value;
        const pass = form1.pass.value;
        const nume = form1.nume.value;
        const prenume = form1.prenume.value;
        const jud = form1.jud.value;
        const loc = form1.loc.value;
        const strada = form1.strada.value;
        const varsta = form1.varsta.value;

        // verificari
        if (
          email === "" ||
          pass === "" ||
          nume === "" ||
          prenume === "" ||
          jud === "" ||
          loc === "" ||
          varsta === "" ||
          strada === ""
        ) {
          alert("completati campurile");
          return;
        } else if (passRegEx.test(pass) === true) {
          alert("parola nu e safe");
          return;
        } else if (pass !== passConf.value) {
          alert("nu e buna confirmarea parolei");
          return;
        }

        const credential = EmailAuthProvider.credential(email, pass);
        linkWithCredential(auth.currentUser, credential)
          .then((usercred) => {
            const UID = auth.currentUser.uid;
            const medicRef = doc(db, "invited_users", telefon);
            getDuery(medicRef)
              .then((cred) => {
                const medic = cred;
                setDoc(doc(db, "pacienti", UID), {
                  nume,
                  prenume,
                  varsta,
                  jud,
                  loc,
                  strada,
                  medic,
                }).then(() => {
                  form1.reset();
                  location.href = "./patient_main.html";
                });
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      });
    })
    .catch(function (error) {
      console.error(error);
      alert("confirmarea nr a esuat");
      location.reload();
    });
}
