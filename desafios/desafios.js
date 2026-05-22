
let indiceDesafio = 0;
let faseAtual;
let podeAvancar = false;
let pontuacao = 0;
let dialogoAltura;

function posicaoDialogo(imagem, caixa) {
    const imgPosition = document.querySelector(imagem);
    const rect = imgPosition.getBoundingClientRect();

    const top = rect.top;
    dialogoAltura = rect.right;

    $(caixa).css({
        bottom: dialogoAltura + "px",
        left: top + "px"
    });
}

function posicaoFeedback(imagem, caixa) {
    const imgPosition = document.querySelector(imagem);
    const rect = imgPosition.getBoundingClientRect();

    const top = rect.top;

    $(caixa).css({
        bottom: dialogoAltura - 60 + "px",
        right: top + "px"
    });
}

function checarOpcao(opcao, correta, acerto, erro) {
    let mensagem;
    $(".caixa-dialogo").remove();

    if (opcao == correta) {
        mensagem = acerto;
        podeAvancar = true;
        $(".feedback").attr("src", "../assets/images/eco.png");

        $(".button-avanco").prop("disabled", false);
        $(".opcoes-container button").prop("disabled", true);

        $(".opcao-correta").css({ "background-color": "green" });
        $(".opcao-errada").css({ "background-color": "red" });
        pontuacao += 10;
        $(".caixa-madeira").text(`Eco-Pontos: ${pontuacao}`).show();
    } else {
        mensagem = erro;
        podeAvancar = false;
        $(".feedback").attr("src", "../assets/images/byte.png");

        $(".button-avanco").prop("disabled", true);
    }

    $(".feedback").show();

    const feedback = $("<p>", { text: mensagem, class: "caixa-dialogo" });
    $("main").append(feedback);
    posicaoFeedback(".feedback", ".caixa-dialogo");
}

function criarOpcoes(desafio) {
    let container = $("<div>", { class: "opcoes-container caixa-opcoes" });

    let perguntaEl = $("<p>", { text: desafio.pergunta, class: "caixa-pergunta" });
    container.append(perguntaEl);

    desafio.opcoes.forEach((opcao) => {
        let botao = $("<button>", {
            text: opcao,
            click: function () {
                checarOpcao(opcao, desafio.correta, desafio.acerto, desafio.erro);
            }
        });

        if (opcao === desafio.correta) {
            botao.addClass("opcao-correta");
        } else {
            botao.addClass("opcao-errada");
        }

        container.append(botao);
    });

    $("main").append(container);
    posicaoDialogo(".professora-imagem", ".caixa-pergunta");
}

function desafios(desafio) {
    let criarDivDialogo = $("<div>", { class: "caixa-pergunta" });
    let textoDialogo = $("<h2>", { text: desafio.dialogo });

    $(criarDivDialogo).append(textoDialogo);

    // primeiroDesafio();

    $(".button-avanco")
        .prop("disabled", false)
        .off("click")
        .on("click", function () {

            $(".caixa-pergunta").remove();
            $(".button-avanco").prop("disabled", true);

            criarOpcoes(desafio);

            $(".button-avanco").off("click");

            $(".button-avanco").on("click", function () {
                if (podeAvancar) {
                    $(".caixa").remove();
                    $("main .caixa-opcoes").remove();
                    $(".caixa-dialogo").remove();
                    $(".professora-imagem").hide();
                    $(".feedback").attr("src", "");
                    $(".feedback").hide();

                    indiceDesafio++;

                    if (indiceDesafio >= faseAtual.desafios.length) {
                        $("main").append("<h1>Fim da fase 🎉</h1>");
                        $(".button-avanco").off("click");
                        $(".button-avanco").text("Voltar ao início");
                        $(".button-avanco").on("click", function () {
                            window.location.href = "../index.html";
                        });
                        return;
                    }

                    introduzirDesafio(faseAtual.desafios[indiceDesafio]);

                    podeAvancar = false;
                    $(this).prop("disabled", true);
                }
            });
        });

    $(".button-avanco").show();
    $(".professora-imagem").show();

    $(".caixa-madeira").text(`Eco-Pontos: ${pontuacao}`).show();

    $("main").append(criarDivDialogo);

    posicaoDialogo(".professora-imagem", ".caixa-pergunta");
}

function introduzirDesafio(desafio) {
    let criarDiv = $("<div>", { class: "caixa" });
    let numeroDesafio = $("<h1>", { text: `Desafio ${desafio.id}:` });
    let nomeDesafio = $("<h2>", { text: `${desafio.titulo}` });

    $(".button-avanco").hide();
    $(".caixa-madeira").hide();

    $(criarDiv).append(numeroDesafio);
    $(criarDiv).append(nomeDesafio);

    $("main").append(criarDiv);

    setTimeout(() => {
        $(".caixa").remove();
        desafios(desafio);
    }, 3000);

    $(".button-avanco").off("click");
}

function mostrarTituloDesafio(fase) {
    if (fase.fase !== 1) {
        $(".professora-imagem").attr("src", "../assets/images/laura.png");
    } else {
        $(".professora-imagem").attr("src", "../assets/images/luna.png");
    }
    $(".professora-imagem").hide();
    $(".feedback").hide();
    $(".caixa-madeira").hide();

    let criarDiv = $("<div>", { class: "caixa" });
    let criarDivActions = $("<div>", { class: "caixa-opcoes" });
    let numeroFase = $("<h1>", { text: `Fase ${fase.fase}: ` });
    let tituloFase = $("<h1>", { text: fase.titulo });
    let criarRightBtn = $("<button>", {
        text: "Próximo desafio ->",
        class: "button-avanco",
        disabled: false,
    });

    $(criarRightBtn).on("click", function () {
        $(".caixa").remove();
        introduzirDesafio(fase.desafios[indiceDesafio]);
    });

    $(criarDiv).append(numeroFase);
    $(criarDiv).append(tituloFase);
    $(criarDivActions).append(criarRightBtn);

    $("main").append(criarDiv);
    $(".background").append(criarDivActions);
}

export function iniciarFase(fase) {
    faseAtual = fase;

    mostrarTituloDesafio(faseAtual);
}