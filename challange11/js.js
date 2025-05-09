const allImgs = [
  "img/dog1.jpeg",
  "img/dog2.webp",
  "img/dog3.webp",
  "img/dog4.webp",
];
const btnPre = document.querySelector(".pre");
const btnNext = document.querySelector(".next");
const img = document.querySelector("img");
let index = 0;

const showPic = () => {
  img.src = allImgs[index];
  console.log(allImgs[index]);
};

const nextPic = () => {
  index++;

  if (index > allImgs.length - 1) {
    index = 0;
  }

  showPic();
};
btnNext.addEventListener("click", nextPic);

const prevPic = () => {
  index--;

  if (index < 0) {
    index = allImgs.length - 1;
  }

  showPic();
};
btnPre.addEventListener("click", prevPic);
showPic();
