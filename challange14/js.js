const btnPre = document.querySelector(".pre");
const btnNext = document.querySelector(".next");
const counter = document.querySelector("p");
let count = parseInt(localStorage.getItem("count")) || 0;

const showPic = () => {
  localStorage.setItem("count", count);
  counter.textContent =
    count > 0 ? (counter.style.color = "green") : (counter.style.color = "red");

  counter.textContent = count;
  console.log(count);
};

const nextPic = () => {
  count++;

  showPic();
};
btnNext.addEventListener("click", nextPic);

const prevPic = () => {
  count--;
  if (count < 0) {
  }
  showPic();
};
btnPre.addEventListener("click", prevPic);
showPic();
