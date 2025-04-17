// JavaScript для работы с кнопками
document.addEventListener("DOMContentLoaded", () => {
    console.log("Interactive Buttons Loaded!");

    // Обработчик для зеленой кнопки
    document.getElementById("button1").addEventListener("click", () => {
        window.location.href = "https://t.me/+O5kPFXq94wVhZjEy"; // Замените ссылку на нужный URL
    });

    // Обработчик для второй кнопки
    document.getElementById("button2").addEventListener("click", () => {
        alert("Меня уволили!");
    });

    // Обработчик для третьей кнопки
    document.getElementById("button3").addEventListener("click", () => {
        alert("Хочу уволиться!");
    });

    // Обработчик для четвертой кнопки
    document.getElementById("button4").addEventListener("click", () => {
        alert("Меня пытаются уволить!");
    });
});
