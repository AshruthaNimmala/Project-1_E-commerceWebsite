// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form elements
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Simple validation
    if (!name || !email || !password) {
        alert('Please fill in all fields.');
        return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Password validation
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
        alert('Password must be at least 8 characters long, and include at least one letter, one number, and one special character.');
        return;
    }

    // If validation passes, show a success message
    
    // Store credentials in Local Storage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('Registration successful! You can now login.');

    // Redirect to login page
    window.location.href = 'index.html';
    // Optionally, you can reset the form or redirect the user
    // document.getElementById('registrationForm').reset();
    // window.location.href = 'success.html'; // Redirect to a success page
}

// Attach event listener to the form
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
});
