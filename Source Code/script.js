// Watch data
const watches = [
    {
        name: "Grand Complication",
        description: "A masterpiece of horological complexity",
        price: "$125,000",
        image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        details: [
            "Tourbillon movement",
            "18k white gold case",
            "Perpetual calendar",
            "Minute repeater"
        ]
    },
    {
        name: "Royal Chronograph",
        description: "Precision meets royal elegance",
        price: "$89,500",
        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
        details: [
            "Column-wheel chronograph",
            "18k rose gold case",
            "Hand-stitched alligator strap",
            "72-hour power reserve"
        ]
    },
    {
        name: "Moonphase Elegance",
        description: "Celestial beauty on your wrist",
        price: "$65,200",
        image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1466&q=80",
        details: [
            "Moonphase complication",
            "Platinum case",
            "Guilloché dial",
            "Sapphire crystal caseback"
        ]
    }
];

// Craftsmanship data
const craftsmanshipItems = [
    {
        icon: "fas fa-gem",
        title: "Materials",
        description: "Only the finest precious metals and gemstones are selected for our timepieces, ensuring lasting beauty and value."
    },
    {
        icon: "fas fa-cogs",
        title: "Movement",
        description: "Each movement is assembled by master watchmakers with decades of experience, tested for precision and reliability."
    },
    {
        icon: "fas fa-paint-brush",
        title: "Finishing",
        description: "Every surface is meticulously finished by hand, from polished bevels to intricate guilloché patterns."
    }
];

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu functionality
function setupMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    
    // Add mobile menu items
    mobileMenu.innerHTML = `
        <a href="#home" class="hover:gold-text transition">Home</a>
        <a href="#collection" class="hover:gold-text transition">Collection</a>
        <a href="#craftsmanship" class="hover:gold-text transition">Craftsmanship</a>
        <a href="#heritage" class="hover:gold-text transition">Heritage</a>
        <a href="#contact" class="hover:gold-text transition">Contact</a>
    `;
    
    document.body.appendChild(mobileMenu);
    
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
}

// Animated counters
function setupCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;
        
        if (count < target) {
            const updateCount = () => {
                const newCount = Math.ceil(count + increment);
                counter.innerText = newCount;
                
                if (newCount < target) {
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        }
    });
}

// Contact form submission
function setupContactForm() {
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will contact you soon.');
            contactForm.reset();
        });
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderWatchCollection();
    renderCraftsmanshipItems();
    setupMobileMenu();
    setupCounters();
    setupContactForm();
});

function renderWatchCollection() {
    const gallery = document.querySelector('.watch-gallery');
    
    watches.forEach(watch => {
        const detailsList = watch.details.map(detail => `<li class="mb-2">${detail}</li>`).join('');
        
        gallery.innerHTML += `
        <div class="watch-card">
            <div class="watch-card-inner bg-gray-900 rounded-lg overflow-hidden shadow-2xl relative h-full">
                <div class="watch-card-front">
                    <img src="${watch.image}" alt="${watch.name}" class="w-full h-64 object-cover">
                    <div class="p-6">
                        <h3 class="text-2xl font-bold mb-2 gold-text">${watch.name}</h3>
                        <p class="text-gray-400 mb-4">${watch.description}</p>
                        <div class="flex justify-between items-center">
                            <span class="text-xl gold-text">${watch.price}</span>
                            <button class="px-4 py-2 border gold-border text-sm hover:bg-yellow-800 transition">Details</button>
                        </div>
                    </div>
                </div>
                <div class="watch-card-back absolute inset-0 bg-gray-800 p-6 flex flex-col justify-center items-center">
                    <h3 class="text-2xl font-bold mb-4 gold-text">${watch.name}</h3>
                    <ul class="text-gray-300 mb-6 text-center">
                        ${detailsList}
                    </ul>
                    <button class="px-4 py-2 border gold-border text-sm hover:bg-yellow-800 transition">Enquire</button>
                </div>
            </div>
        </div>
        `;
    });
}

function renderCraftsmanshipItems() {
    const grid = document.getElementById('craftsmanship-grid');
    
    craftsmanshipItems.forEach(item => {
        grid.innerHTML += `
        <div class="bg-black bg-opacity-70 p-8 rounded-lg hover:bg-opacity-90 transition duration-500">
            <div class="text-4xl mb-4 gold-text text-center">
                <i class="${item.icon}"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-center gold-text">${item.title}</h3>
            <p class="text-gray-300 text-center">${item.description}</p>
        </div>
        `;
    });
}
