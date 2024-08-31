document.querySelector('.login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (email === '' || password === '') {
        alert('Please fill in all fields.');
    } else {
        // Perform login (For demonstration purposes, we'll just show an alert)
        alert('Login successful! Welcome to Trip My Trip.');
        // Here you could redirect to the dashboard or perform an actual login.
    }
});
