const main = document.querySelector('.dir');

async function getBusiness() {
    const response = await fetch("scripts/directory.json");
    const data = await response.json();
    console.log(data);
    displayBusinesses(data);
}

function displayBusinesses(businesses) {
    businesses.forEach(business => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let butt = document.createElement('a');
        let logo = document.createElement('img');

        h2.innerHTML = `${business.name}<br> - ${business.membership_level} - `;
        h3.innerHTML = `${business.address} <br>${business.phone_number}`;
        butt.innerHTML = `Visit Site`;
        butt.setAttribute('href',business.website);
        logo.setAttribute('src', business.logo_link);
        logo.setAttribute('alt',`Logo of ${business.name}`);
        logo.setAttribute('loading','lazy');

        card.appendChild(logo);
        card.appendChild(h2);
        card.appendChild(h3);
        card.appendChild(butt);

        main.appendChild(card);

    });
}

getBusiness();