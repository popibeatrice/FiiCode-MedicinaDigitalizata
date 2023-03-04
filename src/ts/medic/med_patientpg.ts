import "../../styles/medic/med_patientpg.css";
import "../../styles/index.css";

const menuBtn = document.querySelector(".meniu");
menuBtn.addEventListener("click", (e) => {
  menuBtn.classList.toggle("is-active");
});
