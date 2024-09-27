const button = document.querySelector('#menu');
const navlist = document.querySelector('.list');

button.addEventListener('click', () => {
    navlist.classList.toggle('seen');
    button.classList.toggle('seen');
});