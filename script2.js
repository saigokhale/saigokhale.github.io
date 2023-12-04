// script.js

// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', function () {
    // Get the button element
    const alertButton = document.getElementById('alertButton');

    // Add a click event listener to the button
    alertButton.addEventListener('click', function () {
        // Display a simple alert when the button is clicked
        alert('Hello! This is a simple portfolio website.');
    });
});

function toggleProject(element) {
    // Toggle the 'flipped' class on the clicked project box
    element.classList.toggle('flipped');
}
