document.addEventListener('DOMContentLoaded', function() {
    // Cookie consent logic
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptCookiesButton = document.getElementById('acceptCookies');
    
    acceptCookiesButton.addEventListener('click', function() {
        cookieConsent.style.display = 'none';
        // Implement cookie setting logic here
    });

document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu toggle logic
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('nav.main-nav ul');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});
