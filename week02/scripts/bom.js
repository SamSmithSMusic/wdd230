const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {

    if (input.value !='') {
        const li = document.createElement('li');
        const delButton = document.createElement('button');

        li.innerHTML = input.value;
        delButton.textContent =  '❌';

        li.append(delButton);
        list.append(li);

        delButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
            input.value = '';
        })

    }
    else {
        input.setAttribute('placeholder','Please Enter Your Book');
        input.focus();
    }
});

