document.addEventListener('DOMContentLoaded', function () {
    // Header scroll effect
    const header = document.querySelector('.sp-header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 30) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Highlight current page in navigation
    const currentPage = location.pathname.split('/').pop();
    document.querySelectorAll('.sp-nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Room data
    const roomSections = document.getElementById('room-sections');

    const rooms = [
        {
            title: "Premier Suite (Private Pool)",
            desc: "Spend the night steeped in Arabic-chic opulence...",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            view: "Garden, Ocean, Private Pool",
            size: "162m²",
            bed: "King Size",
            category: "Premier Suite",
            price: "KSh83,400"
        },
        {
            title: "Deluxe Suites",
            desc: "There are 6 beautifully appointed one-bedroom suites...",
            image: "https://images.unsplash.com/photo-1600607681025-31c3c1d2c528",
            view: "Garden, Pool",
            size: "88m²",
            bed: "Queen Size",
            category: "Deluxe Suite",
            price: "KSh32,200"
        },
        {
            title: "Garden View Room",
            desc: "Overlooking lush green gardens, this room is designed for comfort and calm...",
            image: "https://images.unsplash.com/photo-1582719478174-4f7f0a7c4a6e",
            view: "Garden",
            size: "58m²",
            bed: "Queen Size",
            category: "Garden View",
            price: "KSh18,000"
        },
        {
            title: "Standard Room",
            desc: "A perfect balance of affordability and elegance...",
            image: "https://images.unsplash.com/photo-1600585152930-93c481f50349",
            view: "Courtyard",
            size: "45m²",
            bed: "Twin or Double",
            category: "Standard",
            price: "KSh12,500"
        },
        {
            title: "Family Suite",
            desc: "Spacious, cozy, and ideal for families...",
            image: "https://images.unsplash.com/photo-1606788075761-3b472b5e3fa3",
            view: "Garden & Pool",
            size: "120m²",
            bed: "1 King + 2 Twins",
            category: "Family Suite",
            price: "KSh49,500"
        }
    ];

    // Dynamically generate room sections
    rooms.forEach(room => {
        const section = document.createElement('section');
        section.className = 'sp-room-section';
        section.innerHTML = `
        <div class="container">
            <div class="row g-0">
                <div class="col-lg-7">
                    <div class="sp-room-card">
                        <h2 class="sp-room-title">${room.title}</h2>
                        <p class="sp-room-desc">${room.desc} <a href="#" class="sp-continue-link">Continue reading</a></p>
                        <img class="sp-room-image" src="${room.image}" alt="${room.title}" />
                        <div class="sp-details-box">
                            <h3 class="sp-details-title">Details</h3>
                            <ul class="sp-details-list">
                                <li><span class="sp-detail-label">View:</span> ${room.view}</li>
                                <li><span class="sp-detail-label">Size:</span> ${room.size}</li>
                                <li><span class="sp-detail-label">Bed Type:</span> ${room.bed}</li>
                                <li><span class="sp-detail-label">Category:</span> ${room.category}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="sp-booking-card">
                        <div class="sp-price-info">
                            <div class="sp-category">Category: ${room.category}</div>
                            <div class="sp-price">Price: <span>${room.price}</span> per night</div>
                        </div>
                        <div class="sp-action-buttons">
                            <a href="#" class="sp-btn sp-view-btn">VIEW DETAILS</a>
                            <a href="#" class="sp-btn sp-book-btn">BOOK</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        roomSections.appendChild(section);
    });

    // Room section animations
    const roomSectionElements = document.querySelectorAll('.sp-room-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                const roomCard = entry.target.querySelector('.sp-room-card');
                const bookingCard = entry.target.querySelector('.sp-booking-card');

                roomCard.style.transform = 'translateY(0)';
                roomCard.style.opacity = 1;

                bookingCard.style.transform = 'translateY(0)';
                bookingCard.style.opacity = 1;
            }
        });
    }, { threshold: 0.15 });

    roomSectionElements.forEach(section => {
        section.style.opacity = 0;
        section.style.transition = 'opacity 0.6s ease-out';

        const roomCard = section.querySelector('.sp-room-card');
        const bookingCard = section.querySelector('.sp-booking-card');

        roomCard.style.transform = 'translateY(40px)';
        roomCard.style.opacity = 0;
        roomCard.style.transition = 'transform 0.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.8s ease';

        bookingCard.style.transform = 'translateY(40px)';
        bookingCard.style.opacity = 0;
        bookingCard.style.transition = 'transform 0.8s cubic-bezier(0.19, 1, 0.22, 1) 0.15s, opacity 0.8s ease 0.15s';

        observer.observe(section);
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.sp-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-3px)';
        });

        button.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });
});