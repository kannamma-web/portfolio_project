document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); 
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let formMessage = document.getElementById("formMessage");

  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "All fields are required!";
    return;
  }

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    formMessage.textContent = "Please enter a valid email.";
    return;
  }

  formMessage.style.color = "green";
  formMessage.textContent = "Form submitted successfully! ✅";

  document.getElementById("contactForm").reset();
});

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });
  
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.style.background = "transparent";
  deleteBtn.style.border = "none";
  deleteBtn.style.cursor = "pointer";

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}