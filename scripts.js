 document.addEventListener("DOMContentLoaded", function () {
  // Cookie consent logic
  const cookieConsent = document.getElementById("cookieConsent");
  const acceptCookiesButton = document.getElementById("acceptCookies");

  acceptCookiesButton.addEventListener("click", function () {
    cookieConsent.style.display = "none";
    // Implement cookie setting logic here
  });

  // Hamburger menu toggle logic
});

function toggleMenu(event) {
  // Prevent the click from propagating to the document
  event.stopPropagation();

  const navMenu = document.querySelector("nav.main-nav ul");

  if (navMenu) {
    // Check if the element exists
    navMenu.classList.toggle("active");
    console.log("Menu toggled");

    // Add event listener to close the menu when clicking outside
    document.addEventListener("click", closeMenuOnClickOutside);
  } else {
    console.error("Nav menu not found.");
  }
}

function closeMenuOnClickOutside(event) {
  const navMenu = document.querySelector("nav.main-nav ul");
  const hamburger = document.querySelector(".hamburger-menu");

  // Check if the click happened outside the menu and hamburger menu
  if (
    navMenu &&
    hamburger &&
    !navMenu.contains(event.target) &&
    !hamburger.contains(event.target)
  ) {
    navMenu.classList.remove("active");
    console.log("Menu closed");

    // Remove this event listener after closing the menu to prevent multiple bindings
    document.removeEventListener("click", closeMenuOnClickOutside);
  }
}
