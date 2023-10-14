const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', handlerName);

input.addEventListener('blur', handlerChangeFocus);


function handlerName(e) {
    if (e.currentTarget.value.trim() === '') {
        span.innerText = 'Anonymous';
    } else {
        span.innerText = e.currentTarget.value;
    }
}

function handlerChangeFocus(e){
    if(!e.currentTarget.value){
        span.innerText = 'Anonymous'
    }
}