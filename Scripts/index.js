// Write code related to Home page here

let formData = document.querySelector("form");
let taskListArray = [];

formData.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let taskName = document.querySelector("#name").value;
    let desc = document.querySelector("#desc").value;
    let dateStart = document.querySelector("#start").value;
    let dateEnd = document.querySelector("#end").value;
    let priority = document.querySelector("#priority").value;
    
    let obj = {
        taskName: taskName,
        description: desc,
        startDate: dateStart,
        endDate: dateEnd,
        priority: priority,
    };

  taskListArray.push(obj)

  localStorage.setItem("task-list",JSON.stringify(taskListArray))
});
