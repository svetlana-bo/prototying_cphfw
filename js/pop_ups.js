// Function to open the popup with a specific ID and show it
function openPopup(popupId, event) {
  if (event) event.preventDefault(); // Prevent default action (like form submission) if event is passed
  const popup = document.getElementById(popupId); // Find the popup element by ID
  console.log(popup); // For debugging, check if popup is found
  if (popup) {
    popup.style.display = 'flex'; // Display the popup (using 'flex' to center it, usually)
  } else {
    console.error("Popup with ID", popupId, "not found."); // Log an error if popup is not found
  }
}

// Function to close the popup when clicking outside the popup content
function closePopup(event, popupId) {
  // Check if the clicked area is the background (popup-container)
  if (event.target.classList.contains('popup-container')) {
    // Close the popup by hiding it
    document.getElementById(popupId).style.display = 'none';
  }
}

// Function to close the popup directly, used for 'No' or cancel actions
function directClosePopup(popupId) {
  console.log("Direct close function triggered for:", popupId); // Debug log
  const popup = document.getElementById(popupId); // Find the popup
  if (popup) {
    popup.style.display = 'none'; // Hide the popup
  } else {
    console.error("Popup with ID", popupId, "not found."); // Error if popup is missing
  }
}

// Function to handle form submission (email form) and validate email input
function submitForm(event) {
  event.preventDefault(); // Prevent form submission
  const emailInput = document.getElementById("your-email").value; // Get email input value
  if (emailInput) {
    console.log("Form submitted with email:", emailInput); // Log the email for debugging
    // You can process the form or send the email here
  } else {
    alert("Please enter a valid email address."); // Alert if the email is invalid
  }
}

// Function to handle the cancel button click and show cancellation confirmation
function cancelAction(event) {
  console.log("Cancel button clicked"); // Debug log
  if (event) event.preventDefault(); // Prevent the default action
  openPopup('cancel-confirmation', event); // Open the cancel confirmation popup
}

// Function to confirm cancellation (e.g., redirect to cart page)
function confirmCancellation() {
  window.location.href = '/cart.html'; // Redirect to cart page
}

// Function to confirm form submission and proceed to payment (or next step)
function confirmFormSubmission() {
  window.location.href = 'payment_flow_3ds.html'; // Redirect to payment process
}

// Function to open the 'Tickets Sent' popup and insert the email
function openPopupWithEmail(event) {
  event.preventDefault(); // Prevent form submission
  const email = document.getElementById("your-email").value; // Get the email value
  if (email) {
    document.getElementById("popup-email").textContent = email; // Insert the email into the popup
    openPopup('tickets-sent', event); // Open the tickets sent popup
  } else {
    alert("Please enter a valid email address."); // Alert if the email is invalid
  }
}

// Attach the function to the "Send Email" button click
document.querySelector('.send-email-button').addEventListener('click', openPopupWithEmail);