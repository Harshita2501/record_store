const recordsData = [
    {
        id: 1,
        title: 'DARK MATTER',
        artist: 'Void Collective',
        genre: 'techno',
        price: '€18.99'
    },
    {
        id: 2,
        title: 'NEON NIGHTS',
        artist: 'Berlin Underground',
        genre: 'house',
        price: '€16.99'
    },
    {
        id: 3,
        title: 'AMBIENT DREAMS',
        artist: 'Soundscape Artists',
        genre: 'ambient',
        price: '€19.99'
    },
    {
        id: 4,
        title: 'FREQUENCY SHIFT',
        artist: 'Techno Rebels',
        genre: 'techno',
        price: '€17.99'
    },
    {
        id: 5,
        title: 'DEEP DIVE',
        artist: 'House Collective',
        genre: 'house',
        price: '€15.99'
    },
    {
        id: 6,
        title: 'SONIC EXPERIMENTS',
        artist: 'Experimental Lab',
        genre: 'experimental',
        price: '€21.99'
    },
    {
        id: 7,
        title: 'WAREHOUSE ECHOES',
        artist: 'Industrial Sound',
        genre: 'techno',
        price: '€18.99'
    },
    {
        id: 8,
        title: 'MIDNIGHT GROOVE',
        artist: 'Deep House Mafia',
        genre: 'house',
        price: '€16.99'
    },
    {
        id: 9,
        title: 'CELESTIAL WAVES',
        artist: 'Ambient Pioneers',
        genre: 'ambient',
        price: '€20.99'
    },
    {
        id: 10,
        title: 'NOISE PATTERNS',
        artist: 'Abstract Minds',
        genre: 'experimental',
        price: '€22.99'
    },
    {
        id: 11,
        title: 'UNDERGROUND PULSE',
        artist: 'Berlin Techno Crew',
        genre: 'techno',
        price: '€17.99'
    },
    {
        id: 12,
        title: 'LIQUID MOTION',
        artist: 'House Masters',
        genre: 'house',
        price: '€15.99'
    }
];

function renderRecords(filter = 'all') {
    const recordsGrid = document.getElementById('recordsGrid');
    recordsGrid.innerHTML = '';

    const filteredRecords = filter === 'all'
        ? recordsData
        : recordsData.filter(record => record.genre === filter);

    filteredRecords.forEach((record, index) => {
        const recordCard = document.createElement('div');
        recordCard.className = 'col-md-6 col-lg-4 mb-4';
        recordCard.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;

        recordCard.innerHTML = `
            <div class="record-card">
                <div class="record-image"></div>
                <div class="record-info">
                    <h3 class="record-title">${record.title}</h3>
                    <p class="record-artist">${record.artist}</p>
                    <span class="record-genre">${record.genre.toUpperCase()}</span>
                    <div class="record-price">${record.price}</div>
                </div>
            </div>
        `;

        recordsGrid.appendChild(recordCard);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    renderRecords();

    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');
            renderRecords(filter);
        });
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetSection.offsetTop - navbarHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    const navbarToggler = document.querySelector('.navbar-toggler');
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (window.getComputedStyle(navbarToggler).display !== 'none') {
                        navbarCollapse.classList.remove('show');
                    }
                }
            }
        });
    });

    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
});