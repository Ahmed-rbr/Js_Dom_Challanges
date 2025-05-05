const sub = document.querySelector(".submt");
const p = document.querySelector(".fullName");
const form = document.getElementById("form1");
let fname = "";
let lname = "";
function getInputs(form) {
  fname = form.fname.value;
  lname = form.lname.value;
  p.textContent = fname + " " + lname;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getInputs(form);
});
