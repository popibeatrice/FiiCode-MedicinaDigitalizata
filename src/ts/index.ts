import "../styles/index_extra.css";
import "../styles/index.css";
import "../ts/joinPopup.ts";
import "../ts/loginPopup.ts";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARl4rSXKeeb0x_9jDvWaIFzGdPhyhGOP8",
  authDomain: "fiicode-menumed-74334.firebaseapp.com",
  projectId: "fiicode-menumed-74334",
  storageBucket: "fiicode-menumed-74334.appspot.com",
  messagingSenderId: "346484946737",
  appId: "1:346484946737:web:bc8cb025dcdb66e6c7a210",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

const colRef = collection(db, "users");
getDocs(colRef)
  .then((snapshot) => {
    let users = Array();
    snapshot.docs.forEach((doc) => {
      users.push({ ...doc.data() });
    });
    console.log(users);
  })
  .catch((err) => {
    console.log(err.message);
  });
