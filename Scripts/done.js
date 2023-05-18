// Write code related to Done page here

var taskListData = JSON.parse(localStorage.getItem("done-list")) || [];

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

    tableRow.append(
      taskName,
      description,
      startDate,
      endDate,
      priority
    );

    mainBody.appendChild(tableRow);
  });
}