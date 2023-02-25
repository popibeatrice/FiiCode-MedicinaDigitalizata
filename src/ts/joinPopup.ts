//declarari
const joinBtn = document.querySelector("#join") as HTMLElement;
const joincloseBtn = document.querySelector("#joinclose") as HTMLElement;
const joinPopup = document.querySelector("#joinpopup") as HTMLElement;
const joinWrap = document.querySelector("#joinwrap") as HTMLElement;

//events

// Pop up
joinBtn.addEventListener("click", (e) => {
  joinPopup.classList.remove("hidden");
  joinPopup.classList.add("flex");
  joinWrap.classList.add("opacity-[65%]");
  joinWrap.classList.remove("pointer-events-none");
});

// Pop up close
joinWrap.addEventListener("click", (e) => {
  joinPopup.classList.add("hidden");
  joinPopup.classList.remove("flex");
  joinWrap.classList.remove("opacity-[65%]");
  joinWrap.classList.add("pointer-events-none");
});

// Pop up close
joincloseBtn.addEventListener("click", (e) => {
  joinPopup.classList.add("hidden");
  joinPopup.classList.remove("flex");
  joinWrap.classList.remove("opacity-[65%]");
  joinWrap.classList.add("pointer-events-none");
});
