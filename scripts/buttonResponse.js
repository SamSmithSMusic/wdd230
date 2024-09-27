const button = document.querySelector('#menu');
const navlist = document.querySelector('.list');

button.addEventListener('click', () => {
    navlist.classList.toggle('seen');
    button.classList.toggle('seen');
});

const darkButt = document.querySelector('#darkmode');
const background = document.querySelector('body');
const darktext =  document.querySelector('h1');
const listText = document.querySelector('.card ul');
const links = document.querySelectorAll('.card a');

darkButt.addEventListener('click', () => {
    background.classList.toggle('darkBackground');
    darktext.classList.toggle('whiteText');
    darkButt.classList.toggle('dark');
    listText.classList.toggle('whiteText');
    links.forEach((link) => {
        link.classList.toggle('whiteText');
    })

})