// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Set current year for copyright
document.addEventListener('DOMContentLoaded', function() {
    const year = new Date().getFullYear();
    const copyrightElement = document.querySelector('.copyright p');
    if (copyrightElement) {
        copyrightElement.textContent = `Copyright © ${year} Silver Palm Spa & Resort`;
    }
    
    // Set default dates for booking form
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const formatDate = (date) => {
        return date.toISOString().split('T')[0];
    };
    
    const checkInInput = document.querySelector('.booking-form input[type="date"]:first-of-type');
    const checkOutInput = document.querySelector('.booking-form input[type="date"]:last-of-type');
    
    if (checkInInput && checkOutInput) {
        checkInInput.value = formatDate(today);
        checkOutInput.value = formatDate(tomorrow);
        checkInInput.min = formatDate(today);
        checkOutInput.min = formatDate(tomorrow);
    }
});