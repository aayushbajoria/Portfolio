// JavaScript for Menu Navigation
const menuLinks = document.querySelectorAll('.menu-link');
const sections = document.querySelectorAll('.page-section');

menuLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        
        // Set active class on the clicked menu item
        menuLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
        
        // Show the selected section and hide others
        const targetPage = link.getAttribute('data-page');
        sections.forEach(section => {
            section.classList.remove('active');
            if (section.id === targetPage) {
                section.classList.add('active');
            }
        });
    });
});

// JavaScript for Contact Modal
const contactBtn = document.getElementById('contactBtn');
const contactModal = document.getElementById('contactModal');
const closeBtn = document.querySelector('.close');

// Open modal when button is clicked
contactBtn.addEventListener('click', () => {
    contactModal.style.display = 'block';
});

// Close modal when 'X' is clicked
closeBtn.addEventListener('click', () => {
    contactModal.style.display = 'none';
});

// Close modal when clicking outside of modal content
window.addEventListener('click', (event) => {
    if (event.target == contactModal) {
        contactModal.style.display = 'none';
    }
});
