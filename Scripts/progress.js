// Write code for the Progress page here

var taskListData = JSON.parse(localStorage.getItem("priority-list")) || [];

let arrPriorityList = [];

let mainBody = document.querySelector("tbody");
displayData(taskListData);

function displayData(taskListData) {
  mainBody.innerHTML = "";
  taskListData.forEach((el, i) => {
    let tableRow = document.createElement("tr");

    let taskName = document.createElement("td");
    taskName.textContent = el.taskName;

    let description = document.createElement("td");
    description.textContent = el.description;

    let startDate = document.createElement("td");
    startDate.textContent = el.startDate;

    let endDate = document.createElement("td");
    endDate.textContent = el.endDate;

    let priority = document.createElement("td");
    priority.textContent = el.priority;

    let progress = document.createElement("td");
    progress.textContent = "Add";

    progress.addEventListener("click", () => {
      taskListData.splice(i, 1);
      arrPriorityList.push(el);
      localStorage.setItem("done-list",JSON.stringify(arrPriorityList))
      displayData(taskListData);
      localStorage.removeItem("task-list", i);
    });

    tableRow.append(
      taskName,
      description,
      startDate,
      endDate,
      priority,
      progress
    );

    mainBody.appendChild(tableRow);
  });
}