function toggleNav() {
    var x = document.getElementById("nav-links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

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

