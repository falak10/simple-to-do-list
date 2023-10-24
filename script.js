function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value !== "") {
        var newTask = document.createElement("li");
        var checkbox = document.createElement("span");
        checkbox.className = "checkbox";
        checkbox.onclick = function() {
            this.classList.toggle("checked");
            newTask.classList.toggle("completed");
        };

        var taskText = document.createElement("span");
        taskText.innerText = taskInput.value;

        newTask.appendChild(checkbox);
        newTask.appendChild(taskText);
        taskList.appendChild(newTask);

        taskInput.value = "";
    }
}