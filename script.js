
```javascript
// =========================
// 🌙 MODO ESCURO
// =========================

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️ Modo claro";
    } else {
        themeToggle.textContent = "🌙 Modo escuro";
    }

});


// =========================
// ❤️ 👍 CURTIDAS
// =========================

const botoes = document.querySelectorAll(".reaction-button");

botoes.forEach(function (botao) {

    let curtiu = false;

    botao.addEventListener("click", function () {

        const numero = botao.querySelector("span");

        if (curtiu === false) {

            numero.textContent = Number(numero.textContent) + 1;

            curtiu = true;

        } else {

            numero.textContent = Number(numero.textContent) - 1;

            curtiu = false;

        }

    });

});
```
