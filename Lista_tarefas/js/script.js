const inputNewTask = document.querySelector(".newTask");
const btnAddTask = document.querySelector(".btnAddTask");
const TaskList = document.querySelector(".task");

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
    TaskTextList.push(taskText);
  }
  const taskJSON = JSON.stringify(TaskTextList);
  console.log(taskJSON);
  localStorage.setItem("tasks", taskJSON);
}
function addSaveTask (){
    const task = localStorage.getItem('tasks');
    const taskList = JSON.parse(task);

  for (let task of taskList){
    createTask(task);
  }
}
addSaveTask()