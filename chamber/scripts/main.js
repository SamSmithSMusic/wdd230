const menuButt = document.querySelector('#menu');
const nav = document.querySelector('nav');

menuButt.addEventListener('click', () => {
    menuButt.classList.toggle('expanded');
    nav.classList.toggle('expanded');
})