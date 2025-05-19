// === Contact Form Validation ===
const contactForm = document.getElementById('contactForm');
const nameInput = contactForm.name;
const emailInput = contactForm.email;
const nameError = nameInput.nextElementSibling;
const emailError = emailInput.nextElementSibling;

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  clearErrors();

  let isValid = true;

  if (!nameInput.value.trim()) {
    showError(nameInput, nameError, 'Name is required');
    isValid = false;
  }

  if (!emailInput.value.trim()) {
    showError(emailInput, emailError, 'Email is required');
    isValid = false;
  } else if (!isValidEmail(emailInput.value.trim())) {
    showError(emailInput, emailError, 'Invalid email format');
    isValid = false;
  }

  if (isValid) {
    alert('Thank you! Your message has been sent.');
    contactForm.reset();
  }
});

function showError(input, errorElement, message) {
  errorElement.textContent = message;
  input.focus();
}

function clearErrors() {
  nameError.textContent = '';
  emailError.textContent = '';
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// === To-Do List Logic ===
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskText;

  const removeBtn = document.createElement('button');
  removeBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  removeBtn.className = 'remove-btn';
  removeBtn.onclick = () => taskList.removeChild(li);

  li.appendChild(removeBtn);
  taskList.appendChild(li);

  taskInput.value = '';
  taskInput.focus();
}
