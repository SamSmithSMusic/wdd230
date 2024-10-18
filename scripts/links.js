const urlLink = "../data/activities.json";
const list = document.querySelector('#learning');

async function getLinks() {
    const response = await fetch(urlLink);
    const data = await response.json();
    console.log(data);
    displayActivities(data)
}

function displayActivities(data) {
    data.forEach(week => {
        let section = document.createElement('section');
        
        let h3 = document.createElement('h3');
        h3.innerHTML = `${week.week} :`;
        section.appendChild(h3);

        week.activities.forEach(activity => {
            let a = document.createElement('a');
            a.setAttribute('href',activity.link);
            a.textContent = activity.title;
            section.appendChild(a);
        });

        list.appendChild(section);
    });
}

getLinks();