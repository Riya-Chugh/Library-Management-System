// Function to display reserved books and calculate total
function displayReserveBooks() {
    const reservedBooks = JSON.parse(localStorage.getItem('reservedBooks')) || [];

    const cartContainer = document.getElementById('cart-items');
    const cartEmptyMessage = document.getElementById('cart-empty-message');
    const cartTable = document.getElementById('cart-items-table'); // Table element
    let totalPrice = 0;

    // Clear the cart container before adding new items
    cartContainer.innerHTML = '';

    // If the reserved books list is empty, show the empty message and hide the table
    if (reservedBooks.length === 0) {
        cartEmptyMessage.style.display = 'block';
        cartTable.style.display = 'none'; // Hide the table when there are no reserved books
    } else {
        cartEmptyMessage.style.display = 'none';
        cartTable.style.display = 'table'; // Show the table when there are reserved books

        // Loop through the reserved books and display them
        reservedBooks.forEach((item, index) => {
            const itemHtml = `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td><img src="${item.image}" alt="${item.title}" class="img-fluid" width="50"></td>
                    <td>${item.title}</td>
                    <td>
                        <button class="btn btn-danger btn-sm" onclick="removeFromReserve(${item.id})">
                            <i class="fas fa-trash-alt"></i> Remove
                        </button>
                    </td>
                </tr>
            `;
            cartContainer.innerHTML += itemHtml;

            // Add item price to totalPrice
            totalPrice += parseFloat(item.price);
        });

        // Optionally, you can display the total price
        document.getElementById('total-price').textContent = `₹ ${totalPrice.toFixed(2)}`;
    }
}

// Function to remove item from reserve
function removeFromReserve(bookId) {
    let reservedBooks = JSON.parse(localStorage.getItem('reservedBooks')) || [];
    // Filter out the book that matches the bookId
    reservedBooks = reservedBooks.filter(item => item.id !== bookId);
    // Save the updated reservedBooks array to localStorage
    localStorage.setItem('reservedBooks', JSON.stringify(reservedBooks));

    // Re-render the reserved books list
    displayReserveBooks();
}

// Function to process checkout for reserved books
function checkout() {
    // Show checkout processed message
    alert('Checkout completed for reserved books.');

    // Clear the reserved books from localStorage
    localStorage.removeItem('reservedBooks');

    // Reload the page to update the UI
    window.location.reload();
}

// Call displayReserveBooks() to populate the reserve books list on page load
document.addEventListener('DOMContentLoaded', displayReserveBooks);
