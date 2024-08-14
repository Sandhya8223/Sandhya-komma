function addToCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    let total = 0;

    // Clear previous items
    cartItems.innerHTML = '';

    // Get all checked items
    const items = document.querySelectorAll('.grocery-list input[type="checkbox"]:checked');
    items.forEach(item => {
        const name = item.getAttribute('data-name');
        const price = parseFloat(item.getAttribute('data-price'));

        // Add item to cart
        const listItem = document.createElement('li');
        listItem.textContent = `${name} - $${price.toFixed(2)}`;
        cartItems.appendChild(listItem);

        // Update total
        total += price;
    });

    // Update total amount
    totalElement.textContent = total.toFixed(2);
}

function checkout() {
    const totalElement = document.getElementById('total');
    alert(`Thank you for your order! Your total is $${totalElement.textContent}.`);
}
