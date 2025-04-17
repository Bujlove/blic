// JavaScript для работы с кнопками и попапом
document.addEventListener("DOMContentLoaded", () => {
    console.log("Interactive Buttons with Popup Loaded!");

    // Элементы
    const popup = document.getElementById("popup");
    const popupClose = document.getElementById("popupClose");
    const button2 = document.getElementById("button2");

    // Открытие попапа при нажатии на красную кнопку
    button2.addEventListener("click", () => {
        popup.classList.remove("hidden");
    });

    // Закрытие попапа
    popupClose.addEventListener("click", () => {
        popup.classList.add("hidden");
    });

    // Закрытие попапа при клике вне его области
    popup.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.classList.add("hidden");
        }
    });
});
