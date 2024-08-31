document.querySelector('.signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Basic validation
    if (name === '' || email === '' || password === '' || confirmPassword === '') {
        alert('Please fill in all fields.');
    } else if (password !== confirmPassword) {
        alert('Passwords do not match.');
    } else {
        // Perform signup (For demonstration purposes, we'll just show an alert)
        alert('Sign up successful! Welcome to Trip My Trip.');
        // Here you could redirect to the login page or perform an actual signup.
    }
});
