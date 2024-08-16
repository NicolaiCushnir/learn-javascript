const text = "Это пример текста, который будет печататься по одной букве.";
let index = 0;

function typeText() {
    if (index < text.length) {
        process.stdout.write(text[index]);
        index++;
        setTimeout(typeText, 100); // Задержка в 100 миллисекунд между буквами
    } else {
        console.log(); // Переход на новую строку после завершения
    }
}

typeText();