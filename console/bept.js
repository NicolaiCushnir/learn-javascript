
// Browser Effect printing text :
const text = "Это пример текста, который будет печататься по одной букве.";
const outputElement = document.getElementById("output"); // Предположим, у вас есть элемент с id="output"
let index = 0;

function typeText() {
    if (index < text.length) {
        outputElement.textContent += text[index];
        index++;
        setTimeout(typeText, 100); // Задержка в 100 миллисекунд между буквами
    }
}

// Запуск функции печатания текста
typeText();