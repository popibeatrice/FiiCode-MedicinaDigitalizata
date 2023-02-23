//variables
const login_popup = document.querySelector(".login-popup");
const login_button = document.querySelector("#login");
const wrap = document.querySelector(".wrap");
const close_login = document.querySelector(".close-login");

//events
login_button.addEventListener("click", (e) => {
  //Pop up
  login_popup.classList.remove("scale-0");
  wrap.classList.add("opacity-[65%]");
  wrap.classList.remove("pointer-events-none");
});

// Pop up close
wrap.addEventListener("click", (e) => {
  login_popup.classList.add("scale-0");
  wrap.classList.remove("opacity-[65%]");
  wrap.classList.add("pointer-events-none");
});
close_login.addEventListener("click", (e) => {
  login_popup.classList.add("scale-0");
  wrap.classList.remove("opacity-[65%]");
  wrap.classList.add("pointer-events-none");
});
