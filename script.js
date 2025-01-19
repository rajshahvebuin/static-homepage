// Function to toggle the side menu and overlay
function toggleMenu() {
    const sideMenu = document.getElementById('side-menu');
    const overlay = document.getElementById('overlay');
    
    // If the menu is off-screen, slide it in; otherwise, slide it out
    if (sideMenu.style.right === '-250px' || sideMenu.style.right === '') {
        sideMenu.style.right = '0'; // Slide in the menu
        overlay.style.display = 'block'; // Show overlay
    } else {
        sideMenu.style.right = '-250px'; // Slide out the menu
        overlay.style.display = 'none'; // Hide overlay
    }
}

// JavaScript function to toggle the contact form visibility
function toggleContactForm() {
    const contactForm = document.getElementById('contact-form');
    const toggleArrow = document.getElementById('toggle-arrow');
    
    // Toggle the visibility of the contact form
    contactForm.style.display = contactForm.style.display === 'block' ? 'none' : 'block';
    
    // Toggle the arrow direction
    toggleArrow.classList.toggle('arrow-up');
}

// Function to show the Back to Top button when the user scrolls down
window.addEventListener('scroll', function() {
    const backToTopButton = document.getElementById('back-to-top');
    backToTopButton.style.display = (window.scrollY > 100) ? 'block' : 'none';
});


// Function to scroll the page to the top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling
    });
}
