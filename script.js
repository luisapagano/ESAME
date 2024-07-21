document.addEventListener('DOMContentLoaded', function() {
    // Cookie consent logic
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptCookiesButton = document.getElementById('acceptCookies');
    
    acceptCookiesButton.addEventListener('click', function() {
        cookieConsent.style.display = 'none';
        // Implement cookie setting logic here
    });
