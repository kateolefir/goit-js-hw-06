// Завдання 5
// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputElement = document.querySelector('#name-input');
const outputElement = document.querySelector('#name-output');

const input = () => {
    if (inputElement.value.length > 0) {
        outputElement.textContent = inputElement.value;
        // return;
    } else {
        outputElement.textContent = 'Anonymous';
    }

 }

inputElement.addEventListener('input', input);