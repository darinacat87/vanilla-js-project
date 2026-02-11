// Імпортуємо CSS
import "./style.css";

// Імпортуємо lodash
import _ from "lodash";

// Знаходимо елемент з id="app"
const app = document.querySelector("#app");

// Вставляємо HTML на сторінку з кнопкою
app.innerHTML = `
  <h1>Привіт! Я навчаюсь JavaScript 🚀</h1>
  <p>Це мій перший Vite проєкт</p>
  <p id="randomNumber">Випадкове число зʼявиться тут</p>
  <button id="generateBtn">Згенерувати нове число</button>
`;

// Функція для генерації випадкового числа
function generateRandomNumber() {
  const randomNumber = _.random(1, 100);
  document.querySelector("#randomNumber").textContent =
    `Випадкове число: ${randomNumber}`;
  console.log("Випадкове число від 1 до 100:", randomNumber);
}

// Знаходимо кнопку
const button = document.querySelector("#generateBtn");

// Додаємо подію "click" на кнопку
button.addEventListener("click", generateRandomNumber);

// Генеруємо число одразу при завантаженні сторінки
generateRandomNumber();
