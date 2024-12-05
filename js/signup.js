
    document.querySelector('.signup-form').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission

        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirm-password');

        const usernameError = document.getElementById('username-error');
        const emailError = document.getElementById('email-error');
        const passwordError = document.getElementById('password-error');
        const confirmPasswordError = document.getElementById('confirm-password-error');

        // Clear previous errors
        [usernameError, emailError, passwordError, confirmPasswordError].forEach(span => {
            span.textContent = "";
            span.style.display = "none";
        });

        // Email regex pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Password regex pattern
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        let isValid = true;

        // Validate email
        if (!emailPattern.test(email.value)) {
            emailError.textContent = "Please enter a valid email address.";
            emailError.style.display = "block";
            isValid = false;
        }

        // Validate password
        if (!passwordPattern.test(password.value)) {
            passwordError.textContent =
                "Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, one number, and one special character.";
            passwordError.style.display = "block";
            isValid = false;
        }

        // Check password and confirm password match
        if (password.value !== confirmPassword.value) {
            confirmPasswordError.textContent = "Passwords do not match.";
            confirmPasswordError.style.display = "block";
            isValid = false;
        }

        // Proceed if all validations pass
        if (isValid) {
            localStorage.setItem('user', JSON.stringify({
                username: username.value,
                email: email.value,
                password: password.value
            }));

            // Redirect to login page
            window.location.href = "login.html";
        }
    });

