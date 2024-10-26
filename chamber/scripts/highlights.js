const spotlightContainer = document.querySelector('#spotlight'); 
const numOfSpotlights = 3;

let url = 'scripts/directory.json';

async function fetchMembers() {
    let response = await fetch(url);
    let data = await response.json();

    estMemSpotlight(data.companys);
}

function estMemSpotlight(fullList) {
    let eligible = [];
    let i = 0;
    fullList.forEach(company => {
        if (company.membership_level != 'Gold' && company.membership_level != 'Silver') {
        }
        else {
            eligible.push(company);
        }
        i++;
    });
    
    let spotlights = [];
    for (let i =1;i<=numOfSpotlights;i++) {
        let choice =  getRandomInt(0,eligible.length-1);
        spotlights.push(eligible.splice(choice,1));
    }

    displayMembers(spotlights);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function displayMembers(members) {
    members.forEach(member => {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let img = document.createElement('img');

        h3.innerHTML = member[0].name;
        p.innerHTML = `${member[0].phone_number}<br><a href='${member[0].website}'>${member[0].website}</a>`;
        img.setAttribute('src',`${member[0].logo_link}`);

        article.appendChild(img);
        article.appendChild(h3);
        article.appendChild(p);

        spotlightContainer.appendChild(article);
    });
}

fetchMembers();



