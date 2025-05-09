const bar = document.querySelector(".div1");
const ulTasks = document.querySelector("ul");
const percent = document.querySelector(".prc");
const taskInput = document.querySelector(".task");
const addBtn = document.querySelector(".addBtn");
const year = document.querySelector("span");
let tasksStored = JSON.parse(localStorage.getItem("addedTasks")) || [];

const createTask = () => {
  ulTasks.innerHTML = "";
  tasksStored.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task.body;
    if (task.status) {
      li.classList.add(task.status);
    }
    ulTasks.appendChild(li);
  });
};

const storeToLocalStorage = () => {
  if (taskInput.value.trim() === "") return;

  const newTask = {
    body: taskInput.value,
    status: "",
  };
  tasksStored.push(newTask);
  localStorage.setItem("addedTasks", JSON.stringify(tasksStored));
  createTask();
  taskInput.value = "";
};

const updateProgress = () => {
  const total = ulTasks.children.length;
  const done = document.querySelectorAll("li.done").length;
  const percentage = total ? (done / total) * 100 : 0;
  bar.style.width = percentage + "%";
  percent.textContent = Math.round(percentage) + "%";
};

const toggleTaskDone = (li) => {
  li.classList.toggle("done");

  const items = Array.from(ulTasks.children);
  const index = items.indexOf(li);

  tasksStored[index].status = li.classList.contains("done") ? "done" : "";

  localStorage.setItem("addedTasks", JSON.stringify(tasksStored));

  updateProgress();
};

ulTasks.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    toggleTaskDone(e.target);
  }
});

window.addEventListener("load", () => {
  createTask();
  updateProgress();
});
addBtn.addEventListener("click", storeToLocalStorage);

let getyear = new Date();
year.textContent = getyear.getFullYear();
