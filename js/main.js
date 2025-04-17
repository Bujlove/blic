// JavaScript для работы с кнопками
document.addEventListener("DOMContentLoaded", () => {
    console.log("Interactive Buttons Loaded!");

    // Обработчики событий для кнопок
    document.getElementById("button1").addEventListener("click", () => {
        alert("Green button clicked!");
    });

    document.getElementById("button2").addEventListener("click", () => {
        alert("Orange button clicked!");
    });

    document.getElementById("button3").addEventListener("click", () => {
        alert("Blue button clicked!");
    });

    document.getElementById("button4").addEventListener("click", () => {
        alert("Yellow button clicked!");
    });
});
