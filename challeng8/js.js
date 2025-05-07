// Write a JavaScript program that creates a button and add a click event listener to log a message when it's clicked

const body = document.querySelector("body");
const msg = document.querySelector("p");
const showMsg = () => {
  msg.textContent = msg.textContent === "" ? "hello World!" : "";
};
function creatBtn() {
  const btn = document.createElement("button");
  btn.textContent = "click Me";
  btn.addEventListener("click", showMsg);
  body.appendChild(btn);
}

window.addEventListener("load", creatBtn());
