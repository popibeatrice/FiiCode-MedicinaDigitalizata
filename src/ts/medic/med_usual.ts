// password conffirmation

///variables
const MedForm= document.querySelector(".med_singup-form") as HTMLFormElement;
const Password = new Array();
const parola = document.querySelector("#pass");
parola.addEventListener("keyup", () =>{
    console.log(MedForm.pass.value); 
})