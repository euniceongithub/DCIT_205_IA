document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            
            navLinks.forEach(l => l.classList.remove('active'));

            
            link.classList.add('active');
        });
    });
});
