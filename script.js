function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.textContent = taskInput.value;
        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.textContent = taskInput.value;

        // Add event listener to mark task as completed on click
        li.addEventListener("click", function() {
            this.classList.toggle("completed");
        });

        // Add delete button to each task
        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", function(event) {
            event.stopPropagation(); // Prevent li click event from triggering
            taskList.removeChild(li);
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}
