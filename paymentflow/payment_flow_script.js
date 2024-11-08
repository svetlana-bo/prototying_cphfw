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

function goBack() {
    window.history.back();
}