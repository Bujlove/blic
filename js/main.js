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
    document.addEventListener('DOMContentLoaded', () => {
    const orangeButton = document.getElementById('button2');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');

    // Открытие попапа по нажатию на оранжевую кнопку
    orangeButton.addEventListener('click', () => {
        popup.style.display = 'flex';
    });

    // Закрытие попапа по нажатию на крестик
    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Закрытие попапа при клике вне его содержимого
    popup.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
});
