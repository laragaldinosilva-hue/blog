```javascript
// MODO ESCURO

const botaoTema = document.getElementById("theme-toggle");

botaoTema.onclick = function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        botaoTema.innerHTML = "☀️ Modo claro";
    } else {
        botaoTema.innerHTML = "🌙 Modo escuro";
    }

};


// CURTIDAS

const botoes = document.querySelectorAll(".reaction-button");

botoes.forEach(function (botao) {

    let curtiu = false;

    botao.onclick = function () {

        const numero = botao.querySelector("span");

        if (curtiu === false) {

            numero.innerHTML = Number(numero.innerHTML) + 1;

            curtiu = true;

        } else {

            numero.innerHTML = Number(numero.innerHTML) - 1;

            curtiu = false;

        }

    };

});
```
