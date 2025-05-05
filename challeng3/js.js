const colorButton = document.getElementById("jsstyle");
const paraghraph = document.querySelector("p");
const hexCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
];
let newColor = "#";
let randomIndex = "";
const changeColor = () => {
  newColor = "#";
  for (let i = 0; i < 6; i++) {
    randomIndex = Math.floor(Math.random() * hexCharacters.length);
    newColor += hexCharacters[randomIndex];
  }
  paraghraph.style.backgroundColor = newColor;
  paraghraph.textContent = `Background:${newColor}`;
};

colorButton.addEventListener("click", changeColor);
