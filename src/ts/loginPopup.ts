//variables
const login_popup = document.querySelector(".login-popup");
const login_button = document.querySelector("#login");
const wrap = document.querySelector(".wrap");
const close_login = document.querySelector(".close-login");

//events
// Pop up
login_button.addEventListener("click", (e) => {
  login_popup.classList.remove("hidden");
  login_popup.classList.add("flex");
  wrap.classList.add("opacity-[65%]");
  wrap.classList.remove("pointer-events-none");
});

// Pop up close
wrap.addEventListener("click", (e) => {
  login_popup.classList.add("hidden");
  login_popup.classList.remove("flex");
  wrap.classList.remove("opacity-[65%]");
  wrap.classList.add("pointer-events-none");
});
// Pop up close
close_login.addEventListener("click", (e) => {
  login_popup.classList.add("hidden");
  login_popup.classList.remove("flex");
  wrap.classList.remove("opacity-[65%]");
  wrap.classList.add("pointer-events-none");
});
