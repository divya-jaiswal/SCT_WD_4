let taskList = document.getElementById("taskList");

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskTime = document.getElementById("taskTime");

  if (taskInput.value.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  // Create li
  let li = document.createElement("li");

  // Task text + time
  let taskText = document.createElement("div");
  taskText.className = "task-text";
  taskText.innerHTML = `
    <b>${taskInput.value}</b><br>
    <small>${taskTime.value ? "⏰ " + taskTime.value : ""}</small>
  `;

  // Action buttons
  let actions = document.createElement("div");
  actions.className = "actions";

  // Complete button
  let completeBtn = document.createElement("button");
  completeBtn.innerText = "Done";
  completeBtn.onclick = function () {
    taskText.classList.toggle("completed");
  };

  // Edit button
  let editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.className = "edit";
  editBtn.onclick = function () {
    let newTask = prompt("Edit your task:", taskInput.value);

    if (newTask !== null && newTask.trim() !== "") {
      taskText.innerHTML = `
        <b>${newTask}</b><br>
        <small>${taskTime.value ? "⏰ " + taskTime.value : ""}</small>
      `;
    }
  };

  // Delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete";
  deleteBtn.onclick = function () {
    li.remove();
  };

  // Append buttons
  actions.appendChild(completeBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  // Append task text and actions to li
  li.appendChild(taskText);
  li.appendChild(actions);

  // Add li to list
  taskList.appendChild(li);

  // Clear inputs
  taskInput.value = "";
  taskTime.value = "";
}
