const inputNewTask = document.querySelector(".newTask");
const btnAddTask = document.querySelector(".btnAddTask");
const TaskList = document.querySelector(".task");
const completedTaskList = document.querySelector(".completed_task");
addSaveTask();

btnAddTask.addEventListener("click", function (event) {
  if (!inputNewTask.value) return;
  createTask(inputNewTask.value);
});
inputNewTask.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    if (!inputNewTask.value) return;
    createTask(inputNewTask.value);
  }
});
document.addEventListener("click", function (event) {
  const el = event.target;
  if (el.classList.contains("delete")) {
    el.parentElement.remove();
    saveTask();
  }
});

function createLi() {
  const li = document.createElement("li");
  return li;
}
function createTask(InputText) {
  const li = createLi();
  li.innerHTML = InputText;
  TaskList.appendChild(li);
  clearInput();
  createDeleteBtn(li);
  saveTask();
  createCompletedBtn(li);
  completedTask();
}

function clearInput() {
  inputNewTask.value = "";
  inputNewTask.focus();
}
function createDeleteBtn(li) {
  const btnDelete = document.createElement("button");
  btnDelete.innerText = "Apagar";
  li.innerText += "";
  li.appendChild(btnDelete);
  btnDelete.setAttribute("class", "delete");
}
function saveTask() {
  const liTask = TaskList.querySelectorAll("li");
  const TaskTextList = [];
  for (let task of liTask) {
    let taskText = task.innerText;
    taskText = taskText.replace("Apagar", "");
    taskText = taskText.replace("Concluir", "");
    TaskTextList.push(taskText);
  }
  const taskJSON = JSON.stringify(TaskTextList);
  console.log(taskJSON);
  localStorage.setItem("tasks", taskJSON);
}
function addSaveTask() {
  const task = localStorage.getItem("tasks");
  const taskList = JSON.parse(task);

  for (let task of taskList) {
    createTask(task);
  }
}
function createCompletedBtn(li) {
  const completedBtn = document.createElement("button");
  completedBtn.innerHTML = "Concluir";
  li.appendChild(completedBtn);
  completedBtn.setAttribute("class", "completed");
}
function completedTask() {
  document.addEventListener("click", function (event) {
    const el = event.target;
    const father = el.parentElement;
    const child = document.createElement("p");
    child.innerHTML = "Bom trabalho !";
    if (el.classList.contains("completed")) {
      father.classList.add("completedTask");
      el.remove();
      father.appendChild(child);
      child.classList.add('greatWork');
    }
  });
}
