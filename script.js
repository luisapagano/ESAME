document.addEventListener("DOMContentLoaded", function() {
    // Cookie Consent
    const cookieConsent = document.getElementById("cookieConsent");
    const acceptCookies = document.getElementById("acceptCookies");

    acceptCookies.addEventListener("click", function() {
        cookieConsent.style.display = "none";
    });

    // Carousel
    const carousel = document.querySelectorAll('.carousel img');
    let currentIndex = 0;

    function showNextImage() {
        carousel[currentIndex].style.transform = 'translateX(-100%)';
        currentIndex = (currentIndex + 1) % carousel.length;
        carousel[currentIndex].style.transform = 'translateX(0)';
    }

    setInterval(showNextImage, 3000);
});
