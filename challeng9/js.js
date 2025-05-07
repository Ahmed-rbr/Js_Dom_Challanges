// Write a JavaScript program to create a dropdown menu that shows and hides its options when clicked.

const btn = document.querySelector("button");
const ul = document.querySelector("ul");
const li = document.querySelector("li");

const showItems = () => {
  ul.classList.toggle("hide");
};

btn.addEventListener("click", showItems);
