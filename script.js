const botaoTema = document.getElementById("theme-toggle");

botaoTema.onclick = function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        botaoTema.textContent = "☀️ Modo claro";
    } else {
        botaoTema.textContent = "🌙 Modo escuro";
    }
};


const botoes = document.querySelectorAll(".reaction-button");

botoes.forEach(function (botao) {

    let curtiu = false;

    botao.onclick = function () {

        const numero = botao.querySelector("span");

        if (curtiu === false) {
            numero.textContent = Number(numero.textContent) + 1;
            curtiu = true;
        } else {
            numero.textContent = Number(numero.textContent) - 1;
            curtiu = false;
        }

    };

});
