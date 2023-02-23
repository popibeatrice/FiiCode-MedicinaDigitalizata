//declarari
const joinBtn = document.querySelector("#join") as HTMLElement;
const joincloseBtn = document.querySelector("#joinclose") as HTMLElement;
const joinPopup = document.querySelector("#joinpopup") as HTMLElement;
const joinWrap = document.querySelector("#joinwrap") as HTMLElement;

//events
joinBtn.addEventListener("click", (e) => {
  //Pop up
  joinPopup.classList.remove("scale-0");
  joinWrap.classList.add("opacity-[65%]");
  joinWrap.classList.remove("pointer-events-none");

  // Pop up close
  joinWrap.addEventListener("click", (e) => {
    joinPopup.classList.add("scale-0");
    joinWrap.classList.remove("opacity-[65%]");
    joinWrap.classList.add("pointer-events-none");
  });
  joincloseBtn.addEventListener("click", (e) => {
    joinPopup.classList.add("scale-0");
    joinWrap.classList.remove("opacity-[65%]");
    joinWrap.classList.add("pointer-events-none");
  });
});
