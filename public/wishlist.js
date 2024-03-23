// Function to add item to wishlist
function addToWishlist(event) {
    const productBox = event.target.closest('.product-box');
    const title = productBox.querySelector('.product-title').textContent;
    const author = productBox.querySelector('p').textContent.trim(); // Get the text content directly and trim whitespace
    const price = productBox.querySelector('.product-price').textContent;
    const imgSrc = productBox.querySelector('.product-img').getAttribute('src'); // Get the value of src attribute

    // Create an object representing the product
    const product = {
        title: title,
        author: author,
        price: price,
        imgSrc: imgSrc // Add imgSrc property
    };

    // Retrieve existing wishlist items from localStorage or initialize an empty array
    let wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];

    // Add the new product to the wishlist
    wishlistItems.push(product);

    // Save the updated wishlist back to localStorage
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));

    // Update the displayed wishlist
    displayWishlist();
}

// Function to display wishlist items on the wishlist page
function displayWishlist() {
    const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
    const wishlistContainer = document.getElementById('wishlist');

    wishlistContainer.innerHTML = ''; // Clear previous items

    wishlistItems.forEach((item, index) => {
        const productHTML = `
            <div class="wishlist-item">
                <img src="${item.imgSrc}" alt="Product Image">
                <h2>${item.title}</h2>
                <p>Author: ${item.author}</p>
                <p>Price: ${item.price}</p>
                <button class="delete-btn" onclick="deleteItem(${index})">Delete</button>
            </div>
        `;
        wishlistContainer.innerHTML += productHTML;
    });
}

// Function to delete item from wishlist
function deleteItem(index) {
    let wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlistItems.splice(index, 1);
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
    displayWishlist(); // Refresh the displayed wishlist
}

// Call displayWishlist function when wishlist page loads
document.addEventListener('DOMContentLoaded', function() {
    displayWishlist();
});

// Event listener for adding item to wishlist when heart icon is clicked
document.addEventListener('DOMContentLoaded', function() {
    const heartIcons = document.querySelectorAll('.heart-icon');
    heartIcons.forEach(icon => {
        icon.addEventListener('click', addToWishlist);
    });
});
