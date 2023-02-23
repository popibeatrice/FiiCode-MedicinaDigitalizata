//variables
const login_popup = document.querySelector(".login-popup");
const login_button = document.querySelector("#logIN");
const wrap = document.querySelector(".wrap");
const close_login = document.querySelector(".close-login");
const main = document.querySelector("main");

//open popup
login_button.addEventListener("click", (e) => {
  const element = e.target as HTMLElement;
  login_popup.classList.remove("hidden");
  login_popup.classList.remove("scale-0");
  main.classList.add("pointer-events-none");
  ///DontYouDare.classList.remove("pointer-events-none");
  wrap.classList.add("opacity-60");
  wrap.classList.add("bg-black");
});

close_login.addEventListener("click", (e) => {
  login_popup.classList.add("scale-0");
  main.classList.remove("pointer-events-none");
  wrap.classList.remove("opacity-60");
  wrap.classList.remove("bg-black");
});
