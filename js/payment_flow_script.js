//Function for back icon
function goBack() {
    window.history.back();
}

//Function for the hiding/showing CVV in Form

function toggleCVV() {
    const cvvInput = document.getElementById('cvv');
    const eyeIconImg = document.getElementById('eye-icon-img');
    if (cvvInput.type === 'password') {
        cvvInput.type = 'text';
        eyeIconImg.src = "/icons/icon-eye-open.svg"; // Path to the "eye open" icon
    } else {
        cvvInput.type = "password";
        eyeIconImg.src = "/icons/icon-eye-closed.svg"; // Path to the "eye closed" icon
    }
}

//Function to automatically insert a slash after two digits in the Form
function formatExpirationDate(input) {
    // Get the current value of the input
    let value = input.value;

    // Remove all non-numeric characters
    value = value.replace(/\D/g, '');

    // Format the value: insert a slash after two digits
    if (value.length > 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }

    // Set the formatted value back into the input
    input.value = value;
}