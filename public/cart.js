// Function to add item to cart
function addToCart(event) {
    const productBox = event.target.closest('.box');
    const title = productBox.querySelector('h3').textContent;
    const price = productBox.querySelector('.price').textContent;
    const imageSrc = productBox.querySelector('img').src;

    // Create an object representing the product
    const product = {
        title: title,
        price: price,
        imageSrc: imageSrc // Add image source to the product object
    };

    // Retrieve existing cart items from localStorage or initialize an empty array
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new product to the cart
    cartItems.push(product);

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Display a success message
    alert('Item added to cart!');
}

// Event listener for adding item to cart
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
});

// Function to display cart items on the cart page
function displayCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.querySelector('.cart-items');

    cartContainer.innerHTML = ''; // Clear previous items

    cartItems.forEach((item, index) => {
        const itemHTML = `
            <div class="cart-item">
                <img src="${item.imageSrc}" alt="${item.title}">
                <div class="item-details">
                    <h3>${item.title}</h3>
                    <p>${item.price}</p>
                </div>
                <div class="item-actions">
                   
                    <button onclick="deleteCartItem(${index})">Delete</button>
                </div>
            </div>
        `;
        cartContainer.innerHTML += itemHTML;
    });
}

// Call displayCart function when cart page loads
document.addEventListener('DOMContentLoaded', function() {
    displayCart();
});

// Function to delete a specific item from the cart
function deleteCartItem(index) {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    displayCart(); // Refresh the displayed cart
}

// Function to delete all items from the cart
function deleteCart() {
    localStorage.removeItem('cart');
    displayCart(); // Refresh the displayed cart
}

// Function to handle buying now
// Function to handle buying now
function buyNow() {
    const totalBill = getTotalBill(); // Get the total bill
    const confirmation = confirm(`Your total bill is ₹${totalBill.toFixed(2)}. Do you want to proceed with the order?`);

    if (confirmation) {
        // Proceed with the order
        alert('Order placed successfully!');
    } else {
        // Cancel the order
        alert('Order canceled.');
    }
}

// Function to calculate the total bill
function getTotalBill() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let totalBill = 0;

    cartItems.forEach(item => {
        totalBill += parseFloat(item.price.replace('₹', '').replace(',', '')); // Assuming price is in format ₹X,XXX.XX
    });

    return totalBill;
}
