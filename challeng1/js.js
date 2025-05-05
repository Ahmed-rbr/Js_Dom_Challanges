const btn = document.getElementById("jsstyle");
const p = document.querySelector("p");

function changP(element, font, size, color) {
  element.style.fontFamily = font;
  element.style.fontSize = size;
  element.style.color = color;
}
const font = "Calibri";
const color = "red";
const size = 23 + "px";

btn.addEventListener("click", () => changP(p, font, size, color));
