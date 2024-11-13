        // Wait until the entire HTML document is loaded and parsed
        document.addEventListener("DOMContentLoaded", function() {
            // Select all elements with the class 'counter' (each represents a ticket counter)
            const counters = document.querySelectorAll('.counter');

            // Loop through each counter to add functionality
            counters.forEach(counter => {
                // Initialize the ticket count to 1 for each counter (default starting value)
                let ticketCount = 1;

                // Select the element that displays the ticket count value within the counter
                const counterValueElement = counter.querySelector('.counter-value');

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

                // Attach event listeners to the increase and decrease buttons within each counter
                counter.querySelector('.counter-button.decrease').addEventListener('click', decreaseCount); // Call decreaseCount() when decrease button is clicked
                counter.querySelector('.counter-button.increase').addEventListener('click', increaseCount); // Call increaseCount() when increase button is clicked
            });
  
            // Select all "Add to Cart" buttons
        const addToCartButtons = document.querySelectorAll('.add-to-cart-button');

        // Function to show the pop-up
        function showPopup(popupId) {
            const popup = document.getElementById(popupId);
            popup.style.display = 'flex'; // Make the pop-up visible (assuming CSS handles positioning)
        }

        // Function to close the pop-up
        function closePopup(event, popupId) {
            const popup = document.getElementById(popupId);
            popup.style.display = 'none'; // Hide the pop-up
        }

        // Attach event listeners to "Add to Cart" buttons
        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                showPopup('added-to-cart'); // Show the "Added to Cart" pop-up
            });
        });

        // Attach the closePopup function globally for inline onclick usage
        window.closePopup = closePopup;

    // Function to navigate back to the previous page (for the back icon)
    function goBack() {
        window.history.back(); // Uses the browser's history to go to the previous page
    }
});

function Toggle1(button) {
    const heartIcon = button.querySelector('.fa-heart');
    if (heartIcon.style.color === 'grey') {
      heartIcon.style.color = '#f3acc3';
    } else {
      heartIcon.style.color = 'grey';
    }
  }