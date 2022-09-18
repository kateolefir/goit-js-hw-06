// Завдання 10 (виконувати не обов'язково)
// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const createButton = document.querySelector('button[data-create]')
const removeButton=document.querySelector('button[data-destroy]')
const input = document.querySelector('input')
const boxes = document.querySelector('#boxes')
let amount = 0;

input.addEventListener('input',e=> handelInput(e))
createButton.addEventListener('click', () => createBoxes(amount))
removeButton.addEventListener('click', ()=> removeBoxes(amount))


function createBoxes(amount) {
  
let size = 30
  for (let i = 0; i < amount; i += 1, size+=10) {
    const container = document.createElement('div')
    container.style.height =`${size}px`
    container.style.width = `${size}px`
    container.style.background = getRandomHexColor()
    boxes.append(container)
  }

}
function removeBoxes() {
  boxes.textContent = '';
}

function handelInput(e) {
  amount = e.target.value
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

