// Get the form element
var form = document.getElementById('signUp'); // Ensure this ID matches your HTML

// Add an event listener for the form submission
form.addEventListener('submit', function (event) {
    // Prevent the form from submitting right away
    event.preventDefault();

    // Clear previous error messages
    document.getElementById('usernameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('retypePasswordError').innerText = '';

    // Get values from the input fields
    var username = document.getElementById('username').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value;
    var retypePassword = document.getElementById('retypepassword').value;

    let isValid = true; // Flag for overall form validity

    // Check if the username is valid
    if (username.length < 3) {
        document.getElementById('usernameError').innerText = 'Username must be at least 3 characters long.';
        isValid = false;
    }

    // Check if the email is valid
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address.';
        isValid = false;
    }

    // Check if the password is valid
    if (password.length < 6) {
        document.getElementById('passwordError').innerText = 'Password must be at least 6 characters long.';
        isValid = false;
    }

    // Check if the retype password matches the password
    if (password !== retypePassword) {
        document.getElementById('retypePasswordError').innerText = 'Passwords do not match.';
        isValid = false;
    }

    // If everything is valid, show a success message
    if (isValid) {
        document.getElementById('successMessage').innerText = 'Form submitted successfully!';
        // Uncomment the next line to actually submit the form
        // form.submit();
    }
});
