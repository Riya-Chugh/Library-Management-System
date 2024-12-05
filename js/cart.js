// Function to display cart items and calculate total
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const cartContainer = document.getElementById('cart-items');
    const cartEmptyMessage = document.getElementById('cart-empty-message');
    const cartTable = document.getElementById('cart-items-table'); // Table element
    let totalPrice = 0;

    // Clear the cart container before adding new items
    cartContainer.innerHTML = '';

    // If the cart is empty, show the empty message and hide the table
    if (cart.length === 0) {
        cartEmptyMessage.style.display = 'block';
        cartTable.style.display = 'none'; // Hide the table when cart is empty
    } else {
        cartEmptyMessage.style.display = 'none';
        cartTable.style.display = 'table'; // Show the table when cart has items

        // Loop through the cart items and display them
        cart.forEach((item, index) => {
            const itemHtml = `
                <style>
                table, th, td {
    border: 2px solid #124948; /* Dark teal color border */
}

th, td {
    padding: 10px;
    text-align: left;
}

table {
    background-color: #f2f2f2; /* Optional: Light background for table */
}
                </style>
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td><img src="${item.image}" alt="${item.title}" class="img-fluid" width="50"></td>
                    <td>${item.title}</td>
                    <td>₹ ${item.price}</td>
                    <td>
                        <button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.id})">
                            <i class="fas fa-trash-alt"></i> Remove
                        </button>
                    </td>
                </tr>
            `;
            cartContainer.innerHTML += itemHtml;

            // Add item price to totalPrice (assuming price is a string like '₹ 499', we need to extract the numeric value)
            const price = parseFloat(String(item.price).replace('₹', '').trim());
            totalPrice += price;
        });

        // Update the total price at the bottom-right of the table
        document.getElementById('total-price').textContent = `₹ ${totalPrice.toFixed(2)}`;
    }
}

// Function to remove item from cart
function removeFromCart(bookId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Filter out the book that matches the bookId
    cart = cart.filter(item => item.id !== bookId);
    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Re-render the cart
    displayCart();
}

// Function to process checkout
function checkout() {
    // Show checkout processed message
    alert('Done processed');

    // Clear the cart from localStorage
    localStorage.removeItem('cart');

    // Reload the page to update the UI
    window.location.reload();
}

// Call displayCart() to populate the cart on page load
document.addEventListener('DOMContentLoaded', displayCart);
