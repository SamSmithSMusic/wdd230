let date = new Date();
let year = date.getFullYear();

let nameObj = document.createElement('p');
let modified = document.createElement('p');

nameObj.setAttribute('id','name');
modified.setAttribute('id','modifi');

const parent = document.querySelector('footer');

let moddedDate = document.lastModified;

nameObj.innerHTML = `&copy${year} | Samuel Smith | America 🇺🇸`;
modified.innerHTML = `Last Modified : ${moddedDate}`;

parent.appendChild(nameObj);
parent.appendChild(modified);

const counter = document.querySelector('#counter');

let count = localStorage.getItem('pageCount') || 0;
count ++;
localStorage.setItem('pageCount', count);

counter.innerHTML = `Page Visit Number : ${count}`;


// Weather functionality
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=29.70&lon=98.12&appid=82175ebfabf6834db5939dad1beb443f&units=imperial';

async function weatherFetch() {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
        
    } catch (error) {
        console.log(error);
    }
}

const weather = document.querySelector('#weather');

function displayResults(data) {
    const iconsrc = ` https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weather.innerHTML = `<img src="${iconsrc}" alt="Weather Icon"> ${data.main.temp}&deg;F ${data.weather[0].description}`;
}

weatherFetch();