// Write a JavaScript program that implements a "form" validation that displays an error message if a required field is left empty when submitting the form.

const form = document.querySelector("form");
const btn = document.querySelector(".btn");
const p = document.querySelector("p");
let fname = "";
let email = "";
let erorr = "please fill all informations";
let success = "thanke you";
const checkEmpty = () => {
  if (fname.trim() === "" || email.trim() === "") {
    p.textContent = erorr;
    p.style.color = "red";
  } else {
    p.style.color = "green";

    p.textContent = success;
  }
};

const showErorr = () => {
  let formEntries = new FormData(form);
  fname = formEntries.get("name");
  email = formEntries.get("email");
  checkEmpty();
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  showErorr();
});
