const list = document.querySelector("ul");

const items = ["Do task 1", "Do task 2", "Do task 3", "Do task 4", "Do task 5"];

const creatItems = () => {
  items.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = item;

    list.appendChild(li);
  });
};

const markDone = (e) => {
  if (e.target && e.target.tagName === "LI") {
    e.target.classList.toggle("done");
  }
};

window.addEventListener("load", creatItems);
list.addEventListener("click", markDone);
