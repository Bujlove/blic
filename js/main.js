document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const text = button.querySelector("span").textContent;
            alert(`Вы нажали на кнопку: "${text}"`);
        });
    });
});
