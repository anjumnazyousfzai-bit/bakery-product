// Bakery Website Interactive Features

document.addEventListener("DOMContentLoaded", function () {
    // Select all 'Order Now' buttons
    const orderButtons = document.querySelectorAll(".btn-order");

    // Add click event listener to each button
    orderButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Get product name from data attribute
            const productName = this.getAttribute("data-product");
            
            // Show a user-friendly alert
            alert(`🎉 Thank you! Your order for "${productName}" has been added to the cart.`);
        });
    });
});
