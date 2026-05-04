let indiceDesafio = 0;
let podeAvancar = false;

function checarOpcao(opcao, correta, acerto, erro) {
    let mensagem;
    $(".mensagem").remove();

    if (opcao == correta) {
        mensagem = acerto;
        podeAvancar = true;
        indiceDesafio++;

        $(".button-avanco").prop("disabled", false);
    } else {
        mensagem = erro;
        podeAvancar = false;

        $(".button-avanco").prop("disabled", true);

    }

    mensagem = $("<p>", { text: mensagem, class: "mensagem" });
    $(".opcoes-container").append(mensagem);
}

function criarOpcoes(desafio) {
    let container = $("<div>", { class: "opcoes-container caixa-opcoes" });

    let perguntaEl = $("<p>", { text: desafio.pergunta, class: "caixa-pergunta" });
    container.append(perguntaEl);

    desafio.opcoes.forEach((opcao, index) => {
        let botao = $("<button>", {
            text: opcao,
            click: function () {
                checarOpcao(opcao, desafio.correta, desafio.acerto, desafio.erro);
                // console.log("Escolheu:", opcao);
            }
        });
        container.append(botao);
    });

    $("main").append(container);
}

function desafios(desafio) {
    let criarDiv = $("<div>");
    let numeroDesafio = $("<h1>", { text: `Desafio ${desafio.id}: ` });
    let nomeDesafio = $("<h2>", { text: `${desafio.titulo}` });

    let criarDivDialogo = $("<div>", { class: "caixa-dialogo" });
    let emissorDialogo = $("<h2>", { text: "Professora Luna:" });
    let textoDialogo = $("<h2>", { text: desafio.dialogo });

    $(criarDiv).append(numeroDesafio);
    $(criarDiv).append(nomeDesafio);

    $(criarDivDialogo).append(emissorDialogo);
    $(criarDivDialogo).append(textoDialogo);

    $("main").append(criarDiv);
    $("main").append(criarDivDialogo);

    setTimeout(() => {
        $(criarDivDialogo).remove();
        criarOpcoes(desafio);
    }, 3000);
}

function mostrarTituloDesafio(fase) {
    let criarDiv = $("<div>");
    let criarDivActions = $("<div>", { class: "caixa-opcoes" });
    let numeroFase = $("<h1>", { text: `Fase ${fase.fase}: ` });
    let tituloFase = $("<h1>", { text: fase.nome });
    let criarRightBtn = $("<button>", {
        text: "Próximo desafio ->",
        class: "button-avanco",
        disabled: true,
    });

    $(criarRightBtn).on("click", function () {
        if (podeAvancar) {
            $("main").empty();
            desafios(fase.desafios[indiceDesafio]);

            // reset estado
            podeAvancar = false;
            $(this).prop("disabled", true);
        }
    });

    $(".professora-imagem").attr("src", "../assets/images/luna.png");

    $(criarDiv).append(numeroFase);
    $(criarDiv).append(tituloFase);
    $(criarDivActions).append(criarRightBtn);

    $("main").append(criarDiv);
    $(".background").append(criarDivActions);

    setTimeout(() => {
        $(criarDiv).remove();
        desafios(fase.desafios[indiceDesafio]);
    }, 3000);
}

export function iniciarFase(fase) {
    mostrarTituloDesafio(fase);
}

