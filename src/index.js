document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  taskForm.addEventListener("submit", function(event) {
    // Prevent form default submission
    event.preventDefault();

    const taskInput = document.getElementById("new-task-description").value.trim();
    const userInput = document.getElementById("user").value.trim();
    const durationInput = document.getElementById("duration").value;
    const dueDateInput = document.getElementById("due-date").value;

    if (taskInput !== "" && userInput !== "" && durationInput !== "" && dueDateInput !== "") {
      const taskItem = document.createElement("li");
      taskItem.innerHTML = `<strong>${taskInput}</strong> (Assigned to: ${userInput}, Duration: ${durationInput} hrs, Due: ${dueDateInput}) 
        <button class="delete-btn">❌</button>`;

      taskList.appendChild(taskItem);

      // Attach delete functionality
      taskItem.querySelector(".delete-btn").addEventListener("click", function() {
        taskItem.remove();
      });

      // Clear input fields
      document.getElementById("create-task-form").reset();
    }
  });
});