// DOM elements
const timeDisplay = document.getElementById('time');
const greetingDisplay = document.getElementById('greeting');
const userNameDisplay = document.getElementById('userNameDisplay');
const nameInput = document.getElementById('nameInput');

// Display time and update every second
function updateTime() {
  const now = new Date();
  timeDisplay.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  setTimeout(updateTime, 1000);
}

// Display greeting based on the time of day
function updateGreeting() {
  const hours = new Date().getHours();
  let greeting = "Good Day";
  if (hours < 12) {
    greeting = "Good Morning";
  } else if (hours < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }
  greetingDisplay.textContent = `${greeting}, `;
}

// Load name from localStorage or prompt for it
function loadName() {
  const savedName = localStorage.getItem('userName');
  if (savedName) {
    userNameDisplay.textContent = savedName;
    nameInput.style.display = "none";
  } else {
    nameInput.style.display = "inline-block";
    nameInput.addEventListener("change", saveName);
  }
}

// Save name and update greeting
function saveName() {
  const name = nameInput.value.trim();
  if (name) {
    localStorage.setItem('userName', name);
    userNameDisplay.textContent = name;
    nameInput.style.display = "none";
  }
}

// Initialize functions on load
updateTime();
updateGreeting();
loadName();
