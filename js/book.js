document.addEventListener("DOMContentLoaded", function () {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const cartButtons = document.querySelectorAll(".card-footer .btn");

    // If the user is logged in, show the Cart button
    if (user) {
        cartButtons.forEach(button => {
            button.classList.remove("d-none"); // Show the Add to Cart button
        });
    } else {
        cartButtons.forEach(button => {
            button.classList.add("d-none"); // Hide the Add to Cart button
        });
    }
});


// Search functionality
document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting
    let query = document.getElementById('search-input').value.toLowerCase(); // Get the search input and convert it to lowercase
    let books = document.querySelectorAll('.book-card'); // Get all book cards
    let matchFound = false; // Flag to check if any match is found
    let errorMessage = document.getElementById('error-message'); // Get the error message span

    // Hide the error message initially
    errorMessage.style.display = 'none';

    books.forEach(function(book) {
        let title = book.getAttribute('data-title').toLowerCase(); // Get the book title and convert to lowercase

        if (title.includes(query)) {
            book.style.display = 'block'; // Show book if it matches the search query
            matchFound = true; // If a match is found, update the flag
        } else {
            book.style.display = 'none'; // Hide non-matching books
        }
    });

    // If no match found, show the error message
    if (!matchFound) {
        errorMessage.style.display = 'block'; // Show error message
    }
});


// Define book details as an array of objects
const books = [
    {
        id: 1,
        title: "THE POWER OF YOUR SUBCONSCIOUS MIND",
        price: 499,
        description: "Unlock your subconscious to achieve your goals.",
        image: "img/books/book-1.jpg"
    },
    {
        id: 2,
        title: "THE ART OF LETTING GO",
        price: 399,
        description: "A profound journey of self-discovery and personal growth.",
        image: "img/books/book-2.jpg"
    },
    {
        id: 3,
        title: "LIFE'S AMAZING SECRETS",
        price: 599,
        description: "Practical secrets to achieve inner peace, happiness, and success.",
        image: "img/books/book-3.jpg"
    }
];

// Function to add a book to the cart
function addToCart(bookId) {
    // Get the book object using the provided bookId
    const book = books.find(b => b.id === bookId);
    if (!book) {
        alert('Book not found!');
        return;
    }

    // Get the current cart from localStorage or initialize an empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the book is already in the cart
    const existingBook = cart.find(item => item.id === book.id);
    if (existingBook) {
        alert(`${book.title} is already in your cart.`);
    } else {
        // Add the book to the cart
        cart.push(book);
        // Save the updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${book.title} has been added to your cart!`);
        window.location.reload();
    }
}

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

// Function to add book to Reserve
function addToReserve(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book) {
        alert('Book not found!');
        return;
    }

    // Retrieve the current reservedBooks array from localStorage (or initialize it as an empty array if not found)
    let reservedBooks = JSON.parse(localStorage.getItem('reservedBooks'));

    // Ensure reservedBooks is always an array
    if (!Array.isArray(reservedBooks)) {
        reservedBooks = []; // If it's not an array, initialize it as an empty array
    }

    // Check if the book is already in the reserved list
    const existingBook = reservedBooks.find(item => item.id === book.id);
    if (existingBook) {
        alert(`${book.title} is already reserved.`);
    } else {
        // Add the book to the reserved books array
        reservedBooks.push(book);
        // Save the updated reservedBooks array to localStorage
        localStorage.setItem('reservedBooks', JSON.stringify(reservedBooks));
        alert(`${book.title} has been added to your reserved books!`);
        // Optionally, you can update the page UI or reload to reflect the changes
        window.location.reload();
    }
}
