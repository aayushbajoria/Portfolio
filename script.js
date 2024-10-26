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

// JavaScript for Modal Contact Form
const contactBtn = document.getElementById('contactBtn');
const modal = document.getElementById('contactModal');
const closeModal = document.querySelector('.close');

contactBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
