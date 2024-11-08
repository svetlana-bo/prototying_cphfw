document.addEventListener("DOMContentLoaded", function() {
    const cartItems = document.querySelectorAll('.cart-item');

    cartItems.forEach(cartItem => {
        let ticketCount = 1;
        const counterValueElement = cartItem.querySelector('.counter-value');

        function updateTicketCount() {
            counterValueElement.innerText = ticketCount;
            console.log("Updated count:", ticketCount); // Debugging line
        }

        function increaseCount() {
            ticketCount++;
            console.log("Increased count:", ticketCount); // Debugging line
            updateTicketCount();
        }

        function decreaseCount() {
            if (ticketCount > 1) {
                ticketCount--;
                console.log("Decreased count:", ticketCount); // Debugging line
                updateTicketCount();
            }
        }

        // Attach event listeners to the buttons within each cart item
        cartItem.querySelector('.counter-button.decrease').addEventListener('click', decreaseCount);
        cartItem.querySelector('.counter-button.increase').addEventListener('click', increaseCount);
        
        // Remove item function (optional for each item)
        cartItem.querySelector('.icon-trash').addEventListener('click', function() {
            cartItem.remove();
            alert("Item removed from cart");
        });
    });

    function goBack() {
        window.history.back();
    }
    
});