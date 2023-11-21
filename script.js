// If you want to add interactivity, you can do so using JavaScript
// For example, highlighting the active page in the navigation bar.

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Remove 'active' class from all links
            navLinks.forEach(l => l.classList.remove('active'));

            // Add 'active' class to the clicked link
            link.classList.add('active');
        });
    });
});
