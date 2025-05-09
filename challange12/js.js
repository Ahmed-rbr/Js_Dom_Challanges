const bar = document.querySelector(".div1");
const tasks = document.querySelectorAll("li");
const percent = document.querySelector(".prc");
const count = tasks.length;
const doneTsks = (task) => {
  task.classList.toggle("done");

  let countDone = document.querySelectorAll(".done").length;

  if (countDone > 0) {
    const percentage = (countDone / count) * 100;
    bar.style.width = percentage + "%";
    percent.textContent = percentage + "%";
  } else {
    bar.style.width = 0 + "%";
    percent.textContent = 0 + "%";
  }
};
tasks.forEach((task) => {
  task.addEventListener("click", () => {
    doneTsks(task);
  });
});
