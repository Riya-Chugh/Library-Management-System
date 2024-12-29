
document.querySelector('.login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Retrieve user data from sessionStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Validate email and password
    if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert("Login successful!");
        sessionStorage.setItem('user', JSON.stringify({
            username: storedUser.username,
            email: email.value,
            password: password.value
        }));
        window.location.href = "index.html"; // Redirect to homepage or dashboard
    } else {
        alert("Invalid email or password. Please try again.");
    }
});

