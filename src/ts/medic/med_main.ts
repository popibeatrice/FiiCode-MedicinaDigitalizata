import "../../styles/medic/med_main.css";
import "../../styles/index.css";

const menuBtn = document.querySelector(".meniu");
const navList = document.querySelector(".mobile-nav");
menuBtn.addEventListener("click", (e) => {
  menuBtn.classList.toggle("is-active");
});