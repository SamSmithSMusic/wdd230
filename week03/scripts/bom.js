const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if  (input.value != ''){
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    } 
    else {
        input.setAttribute('placeholder','Please Enter Your Book');
        input.focus();
    }
})

function displayList(chapter) {
    const li = document.createElement('li');
    const delButton = document.createElement('button');

    li.innerHTML = chapter;
    delButton.textContent =  '❌';

    li.append(delButton);
    list.append(li);

    delButton.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
        input.value = '';
    })
}

function setChapterList() {
    localStorage.setItem('chapList',JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('chapList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0,chapter.length -1);
    chaptersArray = chaptersArray.filter((chap) => chap != chapter);
    setChapterList();
}