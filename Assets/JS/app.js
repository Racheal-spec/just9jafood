const Burger = document.querySelector('.burger');
const navLinks = document.querySelector('.navlink');

Burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});
