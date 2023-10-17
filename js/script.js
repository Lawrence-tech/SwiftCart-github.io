const header = document.querySelector('header');
const navbScrolled = document.getElementById('top__navbar');
window.onscroll = () => {
    if (window.scrollY > 10) {
        header.classList.add('scrolled__header');
        navbScrolled.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled__header');
        navbScrolled.classList.remove('scrolled');
    }
}

const hamburger = document.getElementById('top__navbar__hamburger');
const navMenu = document.getElementById('top__navbar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

const navLinks = document.querySelectorAll('#top__navbar__links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

