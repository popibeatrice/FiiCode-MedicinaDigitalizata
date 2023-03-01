import intlTelInput from "intl-tel-input";
const number = document.querySelector("#phoneNumber");
export var iti = intlTelInput(number, {
  // any initialisation options go here
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.min.js",
  initialCountry: "ro",
  formatOnDisplay: true,
});
export const UIfollow = () => {
  const body = document.querySelector("body");
  body.innerHTML = `<main
      class="m-4 flex w-56 max-w-xl flex-col items-center justify-center rounded-lg bg-white p-4 opacity-95 shadow-2xl shadow-black xs:w-64 sm:w-80 md:w-[40rem] md:p-8"
    >
      <h1 class="mt-6 font-poppins font-semibold md:text-lg">
        Login to your account
      </h1>
      <form class="mt-8 ml-8 flex w-full flex-col gap-8 rounded-lg">
        <div class="flex flex-col gap-8 md:flex-row">
          <div class="flex flex-col">
            <!-- <label for="nume" class = "text-sm hidden">Nume</label> -->
            <input
              type="text"
              id="nume"
              class="w-[10rem] border-b-2 border-black text-sm xs:w-[12rem] md:w-[14rem] md:text-base"
              placeholder="Nume"
              required
            />
          </div>
          <div class="flex flex-col">
            <!-- <label for="prenume" class = "text-sm hidden">Prenume</label> -->
            <input
              type="text"
              id="prenume"
              class="w-[10rem] border-b-2 border-black text-sm xs:w-[12rem] md:w-[14rem] md:text-base"
              placeholder="Prenume"
              required
            />
          </div>
        </div>
        <div class="flex flex-col">
          <!-- <label for="email" class = "text-sm hidden">Email</label> -->
          <input
            type="email"
            id="email"
            class="w-[10rem] border-b-2 border-black text-sm xs:w-[12rem] md:w-[14rem] md:text-base lg:w-[14rem]"
            placeholder="Email"
            required
          />
        </div>
        <div class="flex flex-col gap-8 md:flex-row">
          <div class="flex flex-col">
            <!-- <label for="password" class = "text-sm hidden">Parola</label> -->
            <input
              type="password"
              id="pass"
              class="w-[10rem] border-b-2 border-black text-sm xs:w-[12rem] md:w-[14rem] md:text-base"
              placeholder="Parola"
              autocomplete="new-password"
              required
            />
            <p
              class="password-regex mt-2 w-[11rem] text-xs text-gray-600 xs:w-[12rem] md:w-[14rem]"
            >
              At least 1 uppercase, 1 lowercase, and 1 numeric character.
              Minimum 8 characters.
            </p>
          </div>
          <div class="flex flex-col">
            <!-- <label for="passconf" class = "text-sm hidden">Confirmarea parolei</label> -->
            <input
              type="password"
              id="passconf"
              class="w-[10rem] border-b-2 border-black text-sm xs:w-[12rem] md:w-[14rem] md:text-base"
              placeholder="Confirmare Parola"
              autocomplete="new-password"
              required
            />
          </div>
        </div>
        <button
          id="formBtn"
          class="text-md self-start rounded-md bg-logo_blue px-4 py-2 text-white transition-colors duration-300 hover:bg-logo_d_blue lg:text-xl"
        >
          Submit
        </button>
      </form>
    </main>`;
};
