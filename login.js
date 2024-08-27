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
    
    // If validation passes, you can handle form submission here
    // For example, you can send an AJAX request or redirect the user
    // For now, we'll just show a success message
    alert('Login successful!');
    
    // Here you would normally submit the form data to the server
    // For example:
    // document.getElementById('loginForm').submit();
}

// Attach event listener to the form
document.getElementById('loginForm').addEventListener('submit', validateLoginForm);
