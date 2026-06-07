const input = document.querySelector("input");
const button = document.querySelector("button");

// Create a list dynamically
const ul = document.getElementById("task-list");

button.addEventListener("click", () => {
  const task = input.value.trim();

  if (task === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = task;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(deleteBtn);
  ul.appendChild(li);

  input.value = "";
});
