// JavaScript для работы с кнопками
document.addEventListener("DOMContentLoaded", () => {
    console.log("Interactive Buttons Loaded!");

    // Обработчики событий для кнопок
    document.getElementById("button1").addEventListener("click", () => {
        alert("У меня проблемы на работе!");
    });

    document.getElementById("button2").addEventListener("click", () => {
        alert("Меня уволили!");
    });

    document.getElementById("button3").addEventListener("click", () => {
        alert("Хочу уволиться!");
    });

    document.getElementById("button4").addEventListener("click", () => {
        alert("Меня пытаются уволить!");
    });
});
