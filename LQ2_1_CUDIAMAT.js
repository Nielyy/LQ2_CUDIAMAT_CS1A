let username = prompt("Enter username:");
let password = prompt("Enter password:");
let correctPassword = "Nielyy0530";

if (password === correctPassword) {
  alert("Welcome, " + username + "!");
} else {
  alert("Invalid username or password.");
}