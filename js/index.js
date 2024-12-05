document.addEventListener("DOMContentLoaded", function () {
    const loginSignupBtn = document.getElementById("login-signup-btn");
    const welcomeUser = document.getElementById("welcome-user");
    const logoutBtn = document.getElementById("logout-btn");
    const usernamePlaceholder = document.getElementById("username-placeholder");
    const reserveBook = document.getElementById("reserve-book"); // Reserve Book link
    const cart = document.getElementById("cart"); // cart

    // Check if a user is logged in
    const user = JSON.parse(sessionStorage.getItem("user")); // Assume user data is stored in sessionStorage

    if (user) {
        // Show "Welcome, Username" dropdown and Reserve Book link
        usernamePlaceholder.textContent = user.username; // Replace with actual username from user object
        welcomeUser.classList.remove("d-none");
        reserveBook.classList.remove("d-none");
        cart.classList.remove("d-none");

        // Hide Login/Signup button
        loginSignupBtn.classList.add("d-none");

        
    } else {
        // Show Login/Signup button
        loginSignupBtn.classList.remove("d-none");

        // Hide "Welcome, Username" dropdown and Reserve Book link
        welcomeUser.classList.add("d-none");
        reserveBook.classList.add("d-none");
    }

    // Logout functionality
    logoutBtn.addEventListener("click", function () {
        sessionStorage.removeItem("user"); // Clear user session
        window.location.reload(); // Refresh the page
    });
});


// Optional: Display cart count or update UI based on cart contents
document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.length;

    if(cartCount === 0){
        document.getElementById('cart').innerHTML = `<a class="nav-link" href="cart.html"><i class="fas fa-shopping-cart"></i> Cart</a>`;
    }
    
    // Update the cart link with the count
    document.getElementById('cart').innerHTML = `<a class="nav-link" href="cart.html"><i class="fas fa-shopping-cart"></i> Cart(${cartCount})</a>`;
});
