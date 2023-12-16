function toggleNav() {
    var navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

// Close the navigation menu when clicking outside of it on mobile screens
document.addEventListener('click', function(event) {
    var navbar = document.getElementById('navbar');
    var hamburger = document.getElementById('hamburger-icon');
    if (!navbar.contains(event.target) && event.target !== hamburger && window.innerWidth <= 580) {
        navbar.classList.remove('active');
    }
});

// Close the navigation menu when the window is resized to a larger screen
window.addEventListener('resize', function() {
    var navbar = document.getElementById('navbar');
    if (window.innerWidth > 580) {
        navbar.classList.remove('active');
    }
});
document.addEventListener('DOMContentLoaded', function () {
    var navbarHeight = document.getElementById('navbar').offsetHeight - 20; // Decrease by 10 pixels
    var sections = document.querySelectorAll('section');

    sections.forEach(function (section) {
        section.style.paddingTop = navbarHeight + 'px';
    });
});

function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Replace the URL with your actual Google Apps Script URL
    google.script.run.withSuccessHandler(function (response) {
        alert(response);
        document.getElementById("contactForm").reset();
    }).withFailureHandler(function (error) {
        alert("Error: " + error.message);
    }).doPost({ name: name, email: email, message: message });
}

