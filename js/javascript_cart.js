// Ticket Counter functionality for each item in the cart

// Wait until the entire HTML document is loaded and parsed
document.addEventListener("DOMContentLoaded", function() {
    // Select all elements with the class 'cart-item' (each represents a ticket item in the cart)
    const cartItems = document.querySelectorAll('.cart-item');

    // Loop through each cart item to add ticket counter functionality
    cartItems.forEach(cartItem => {
        // Initialize the ticket count to 1 for each cart item (default starting value)
        let ticketCount = 1;

        // Select the element that displays the ticket count value within the cart item
        const counterValueElement = cartItem.querySelector('.counter-value');

        // Function to update the displayed ticket count based on the current value of 'ticketCount'
        function updateTicketCount() {
            counterValueElement.innerText = ticketCount; // Set the displayed text to the current ticket count
        }

        // Function to increase the ticket count by 1
        function increaseCount() {
            ticketCount++; // Increment the ticket count
            updateTicketCount(); // Update the displayed count to reflect the new value
        }

        // Function to decrease the ticket count by 1, but only if it is greater than 1
        function decreaseCount() {
            if (ticketCount > 1) { // Ensure the count does not go below 1
                ticketCount--; // Decrement the ticket count
                updateTicketCount(); // Update the displayed count to reflect the new value
            }
        }

        // Attach event listeners to the increase and decrease buttons within each cart item
        cartItem.querySelector('.counter-button.decrease').addEventListener('click', decreaseCount); // Call decreaseCount() when decrease button is clicked
        cartItem.querySelector('.counter-button.increase').addEventListener('click', increaseCount); // Call increaseCount() when increase button is clicked

        // Remove item functionality (optional for each item)
        cartItem.querySelector('.icon-trash').addEventListener('click', function() {
            // Find the divider element that appears immediately after the cart item
            const divider = cartItem.nextElementSibling;

            // Remove both the cart item and the following divider (if it exists)
            cartItem.remove();
            if (divider && divider.classList.contains('divider')) { // Check if the element is a divider
                divider.remove(); // Remove the divider element
            }

            // Check if there are any remaining cart items in the cart
            if (document.querySelectorAll('.cart-item').length === 0) {
                // If no items are left, redirect to 'empty_cart.html'
                window.location.href = 'empty_cart.html';
            }
        });
    });


    
    // Function to navigate back to the previous page (for the back icon)
    function goBack() {
        window.history.back(); // Uses the browser's history to go to the previous page
    }
});