// script.js

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form elements
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // If validation passes, show a success message
    alert('Your message has been sent successfully!');

    // Optionally, you can reset the form or perform other actions
    // document.getElementById('contactForm').reset();
    // window.location.href = 'thank-you.html'; // Redirect to a thank-you page
}

function logout() {
    localStorage.setItem("isLoggedIn", "false");
    window.location.href = "index.html";
  }

  // Prevent access to dashboard if not logged in
  if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "index.html";
  }

// Attach event listener to the form
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
});
