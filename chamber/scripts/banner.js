const banner = document.querySelector('header span');
const x = document.querySelector('span b');
const day = new Date();

if ([1,2,3].includes(day.getDay())) {
    banner.classList.toggle('hidden');
}

x.addEventListener('click', () => {
    banner.classList.add('hidden');
})