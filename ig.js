// Highlight the active page link in the navigation
document.querySelectorAll('header ul a').forEach(link => {
    if (link.href === window.location.href) {
        link.style.color = 'red';  // Active link will be highlighted with red color
    }
});

// Add event listener to buttons to show an alert when clicked
document.querySelectorAll('.but button').forEach(button => {
    button.addEventListener('click', () => {
        alert(`You clicked the ${button.innerText} button!`);
    });
});


// Function to display a welcome message
function showWelcomeMessage() {
    alert("Welcome!");
}

// Add event listener to the button when the page loads
window.onload = function() {
    const button = document.getElementById('but');
    button.addEventListener('click', showWelcomeMessage);
};