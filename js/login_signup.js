function toggleEyeIcon() {
    const eyeIconInput = document.getElementById('password');
    const eyeIconImg = document.getElementById('eye-icon-img');
    if (eyeIconInput.type === 'password') {
        eyeIconInput.type = 'text';
        eyeIconImg.src = "../icons/icon-eye-open.svg"; // Path to the "eye open" icon
    } else {
        eyeIconInput.type = "password";
        eyeIconImg.src = "../icons/icon-eye-closed.svg"; // Path to the "eye closed" icon
    }
}

function goBack() {
    window.history.back();
}