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


const counter = document.querySelector('#cards p');
let storedText = localStorage.getItem('lastVisit') || 0;
const storedDate = new Date(storedText);
const currentDate = new Date();

let daysSince = dateDiff(currentDate, storedDate);
let message = '';
if (storedText != 0 ) {
    if (daysSince <1) {
        message = 'Back so soon? Awesome!'
    }
    else {
        if (daysSince == 1) {
            message = `You last visited 1 day ago.`
        }
        else {
            message = `You last visited ${daysSince} days ago.`
        }
        
    }
}
else {
    message = 'Welcome! Let us know if you have any questions.';

}

if (counter) {
    counter.innerHTML = message
}

localStorage.setItem('lastVisit', currentDate);

function dateDiff(date1, date2) {
    const timeBetween = Math.abs(date1 - date2);
    const daysBetween = Math.floor(timeBetween / 86400000);
    return daysBetween
}


const timeStamp = document.querySelector('#timestamp');
timeStamp.value = date;


const dropper1 = document.querySelector('#goldCard .dropdown');
const benefits1 = document.querySelector('#goldCard ul');

dropper1.addEventListener('click',() => {
    dropper1.classList.toggle("dropped");
    benefits1.classList.toggle("dropped");
})

const dropper2 = document.querySelector('#silverCard .dropdown');
const benefits2 = document.querySelector('#silverCard ul');

dropper2.addEventListener('click',() => {
    dropper2.classList.toggle("dropped");
    benefits2.classList.toggle("dropped");
})

const dropper3 = document.querySelector('#bronzeCard .dropdown');
const benefits3 = document.querySelector('#bronzeCard ul');

dropper3.addEventListener('click',() => {
    dropper3.classList.toggle("dropped");
    benefits3.classList.toggle("dropped");
})

const dropper4 = document.querySelector('#nonpCard .dropdown');
const benefits4 = document.querySelector('#nonpCard ul');

dropper4.addEventListener('click',() => {
    dropper4.classList.toggle("dropped");
    benefits4.classList.toggle("dropped");
})