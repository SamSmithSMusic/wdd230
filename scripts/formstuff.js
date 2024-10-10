const rangevalue = document.querySelector('#rangevalue');
const range = document.querySelector('#rating');

range.addEventListener('change', displayRating);
range.addEventListener('input', displayRating);

function displayRating() {
    rangevalue.innerHTML = range.value;
}