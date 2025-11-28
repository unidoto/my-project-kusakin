// ===============================
// 1) Изменение CSS — рандомный цвет кнопки
// ===============================
document.querySelector(".change-color-btn").addEventListener("click", function () {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    this.style.background = randomColor;
});


// ===============================
// 2) Изменение стиля карточек при клике
// ===============================
document.querySelectorAll(".service-item").forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("clicked");
    });
});


// ===============================
// 3) JS-валидация новой формы
// ===============================
const form = document.getElementById("orderForm");
const result = document.getElementById("orderResult");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("p-name").value.trim();
    const email = document.getElementById("p-email").value.trim();
    const phone = document.getElementById("p-phone").value.trim();
    const count = document.getElementById("p-count").value.trim();
    const product = document.getElementById("p-product").value;

    // Проверки
    if (name.length < 2) {
        alert("Введите корректное имя (мин. 2 символа)");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Некорректный email");
        return;
    }

    if (phone.length < 6) {
        alert("Введите корректный номер телефона");
        return;
    }

    if (count <= 0 || isNaN(count)) {
        alert("Количество должно быть числом больше 0");
        return;
    }

    if (!product) {
        alert("Выберите продукт");
        return;
    }

    // Вывод данных
    result.style.display = "block";
    result.innerHTML = `
        <b>Ваш заказ:</b><br>
        Имя: ${name}<br>
        Email: ${email}<br>
        Телефон: ${phone}<br>
        Количество: ${count}<br>
        Продукт: ${product}
    `;
});
