const weather = document.querySelector('#dynWeather');
const url = "https://api.openweathermap.org/data/2.5/weather?lat=29.75&lon=-98.64&appid=82175ebfabf6834db5939dad1beb443f&units=imperial";

async function fetchweather() {
    const response = await fetch(url);

    if (response.ok)  {
        const data = await response.json();
        displayWeather(data);
    }
    else{
        console.log("error");
    }
}

function displayWeather(data) {
    let p = document.createElement('p');
    p.innerHTML = `${data.main.temp}&deg;F and ${data.weather[0].main}`;

    let ico = document.createElement('img');
    ico.setAttribute('src',`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`);
    ico.setAttribute('alt','Active Weather Icon');

    weather.appendChild(ico);
    weather.appendChild(p);
}

fetchweather();