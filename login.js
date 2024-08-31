// login.js

// Function to validate the login form
function validateLoginForm(event) {
    // Prevent form submission
    event.preventDefault();

    // Get form elements
    const emailInput = document.getElementById('email').value.trim();
    const passwordInput = document.getElementById('password').value.trim();

    // Check if email and password fields are filled
    if (emailInput === '' || passwordInput === '') {
        alert('Please enter both email and password.');
        return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Password validation
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(passwordInput)) {
        alert('Password must be at least 8 characters long, and include at least one letter, one number, and one special character.');
        return;
    }

    // Retrieve stored credentials
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    // Validate credentials
    if (emailInput === storedEmail && passwordInput === storedPassword) {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'home.html';
    } else {
        alert('Invalid email or password.');
    }
}

// Attach event listener to the form
document.getElementById('loginForm').addEventListener('submit', validateLoginForm);

// Redirect to dashboard if already logged in
if (localStorage.getItem('isLoggedIn') === 'true') {
    window.location.href = 'home.html';
}
