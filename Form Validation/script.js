function validateForm() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    // Regular Expressions
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Clear previous errors
    emailError.innerHTML = "";
    passwordError.innerHTML = "";

    let isValid = true;

    if (!email) {
        emailError.innerHTML = "Email cannot be empty.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.innerHTML = "Invalid email format.";
        isValid = false;
    }

    if (!password) {
        passwordError.innerHTML = "Password cannot be empty.";
        isValid = false;
    } else if (!passwordPattern.test(password)) {
        passwordError.innerHTML = "Password must be at least 8 characters, include uppercase, lowercase, number, and special character.";
        isValid = false;
    }

    if (isValid) {
        alert("Login Successful!");
    }

    return isValid;
}
