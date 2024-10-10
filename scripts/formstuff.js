const rangevalue = document.querySelector('#rangevalue');
const range = document.querySelector('#rating');

range.addEventListener('change', displayRating);
range.addEventListener('input', displayRating);

function displayRating() {
    rangevalue.innerHTML = range.value;
}


const pass1 = document.querySelector('#pass1');
const pass2 = document.querySelector('#pass2');
const message = document.querySelector('#passworderror');

pass2.addEventListener('focusout',checkPass)

function checkpass() {

}
