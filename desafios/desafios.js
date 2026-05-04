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
    let criarDivDialogo = $("<div>", { class: "caixa-pergunta" });
    // let emissorDialogo = $("<h2>", { text: "Professora Luna:" });
    let textoDialogo = $("<h2>", { text: desafio.dialogo });

    // $(criarDivDialogo).append(emissorDialogo);
    $(criarDivDialogo).append(textoDialogo);
    $(".button-avanco").prop("disabled", false);

    $(".button-avanco").on("click", function () {
        $(".caixa-pergunta").remove();
        $(".button-avanco").prop("disabled", true);
        criarOpcoes(desafio);
        $(".button-avanco").on("click", function () {
            if (podeAvancar) {
                $("main").empty();
                introduzirDesafio(fase.desafios[indiceDesafio]);

                // reset estado
                podeAvancar = false;
                $(this).prop("disabled", true);
            }
        });
    });

    $(".button-avanco").show();
    $(".professora-imagem").show();

    // $("main").append(criarDiv);
    $("main").append(criarDivDialogo);
}

function introduzirDesafio(desafio) {
    let criarDiv = $("<div>", { class: "caixa" });
    let numeroDesafio = $("<h1>", { text: `Desafio ${desafio.id}:` });
    let nomeDesafio = $("<h2>", { text: `${desafio.titulo}` });

    // $(".button-avanco").hide();

    $(criarDiv).append(numeroDesafio);
    $(criarDiv).append(nomeDesafio);

    $("main").append(criarDiv);

    $(".button-avanco").on("click", function () {
        $(".caixa").remove();
        desafios(desafio);
    });

    // setTimeout(() => {
    //     $(criarDiv).remove();
    //     desafios(desafio);
    // }, 3000);
}

function mostrarTituloDesafio(fase) {
    let criarDiv = $("<div>", { class: "caixa" });
    let criarDivActions = $("<div>", { class: "caixa-opcoes" });
    let numeroFase = $("<h1>", { text: `Fase ${fase.fase}: ` });
    let tituloFase = $("<h1>", { text: fase.nome });
    let criarRightBtn = $("<button>", {
        text: "Próximo desafio ->",
        class: "button-avanco",
        disabled: false,
    });

    $(criarRightBtn).on("click", function () {
        $(".caixa").remove();
        introduzirDesafio(fase.desafios[indiceDesafio]);
    });

    $(".professora-imagem").attr("src", "../assets/images/luna.png");
    $(".professora-imagem").hide();

    $(criarDiv).append(numeroFase);
    $(criarDiv).append(tituloFase);
    $(criarDivActions).append(criarRightBtn);

    $("main").append(criarDiv);
    $(".background").append(criarDivActions);
}

export function iniciarFase(fase) {
    mostrarTituloDesafio(fase);
}

