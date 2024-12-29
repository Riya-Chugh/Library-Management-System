// Fetch user data from localStorage
window.onload = function () {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
        // Fill profile details with data from localStorage
        document.getElementById("profile-username").value = user.username || '';
        document.getElementById("profile-email").value = user.email || '';
        // Optional: Add more fields as necessary (e.g., phone, address)
    } else {
        // Redirect to login page if no user data or not logged in
        window.location.href = 'login.html';
    }


};
