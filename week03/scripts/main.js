const footer = document.querySelector('footer');
const date = new Date;
const year = date.getFullYear();
const lastMod = document.lastModified;

footer.innerHTML = `&copy ${year} | Samuel Smith | wdd230<br>Last Modified - ${lastMod}`;