const menuButt = document.querySelector('#menu');
const nav = document.querySelector('nav');

menuButt.addEventListener('click', () => {
    menuButt.classList.toggle('expanded');
    nav.classList.toggle('expanded');
})

let date = new Date();
const year = date.getFullYear();
const footer = document.querySelector('footer');
footer.innerHTML = `Samuel Smith &copy ${year}<br>WDD 230<br>Last Modified - ${document.lastModified}`;