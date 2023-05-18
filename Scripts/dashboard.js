// Write code related to dashboard page here

var taskListData = JSON.parse(localStorage.getItem("task-list")) || [];

let totalTask = document.getElementById("task-count");
totalTask.textContent = taskListData.length || 0;

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
      localStorage.setItem("priority-list", JSON.stringify(arrPriorityList));
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

let filterData = document.querySelector("#filter");

filterData.addEventListener("change", (e) => {
  let filterData = document.querySelector("#filter");

  if (filterData.value == "") {
    displayData(taskListData);
  } else if (filterData.value == "Low") {
    let data = taskListData.filter((el) => {
      return el.priority === "Low";
    });
    displayData(data);
  } else if (filterData.value == "Medium") {
    let data = taskListData.filter((el) => {
      return el.priority === "Medium";
    });
    displayData(data);
  } else if (filterData.value === "High") {
    let data = taskListData.filter((el) => {
      return el.priority === "High";
    });
    displayData(data);
  }
});
