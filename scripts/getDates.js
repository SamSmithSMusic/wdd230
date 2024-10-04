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