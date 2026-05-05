let indiceDesafio = 0;
let faseAtual;
let podeAvancar = false;

function checarOpcao(opcao, correta, acerto, erro) {
    let mensagem;
    $(".mensagem").remove();

    if (opcao == correta) {
        mensagem = acerto;
        podeAvancar = true;

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

    desafio.opcoes.forEach((opcao) => {
        let botao = $("<button>", {
            text: opcao,
            click: function () {
                checarOpcao(opcao, desafio.correta, desafio.acerto, desafio.erro);
            }
        });
        container.append(botao);
    });

    $("main").append(container);
}

function arrastarItens(item) {
    let segurando = false;
    let offsetX = 0;
    let offsetY = 0;

    item.addEventListener("mousedown", (e) => {
        segurando = true;

        offsetX = e.clientX - item.offsetLeft;
        offsetY = e.clientY - item.offsetTop;
    });

    document.addEventListener("mousemove", (e) => {
        if (!segurando) return;

        item.style.left = (e.clientX - offsetX) + "px";
        item.style.top = (e.clientY - offsetY) + "px";
    });

    document.addEventListener("mouseup", () => {
        segurando = false;
    });
}

function colisao(el1, el2) {
    const r1 = el1.getBoundingClientRect();
    const r2 = el2.getBoundingClientRect();

    return !(
        r1.top > r2.bottom ||
        r1.right < r2.left ||
        r1.bottom < r2.top ||
        r1.left > r2.right
    );
}

function primeiroDesafio() {
    let quantidadeVermelhos = 0;
    let quantidadeAmarelos = 0;

    let cajuDiv = $("<div>", { class: "caju-img" });
    let urnaDiv = $("<div>", { class: "urna-img" });
    let contadorDiv = $("<div>", { class: "contador-cajus" });

    for (let i = 0; i < 8; i++) {
        const valor = Math.random() < 0.5;
        if (valor) {
            $(cajuDiv).append("<img class='caju vermelho' src='../assets/images/primeiro-desafio/caju-vermelho.png' alt='Caju Vermelho'>");
        } else {
            $(cajuDiv).append("<img class='caju amarelo' src='../assets/images/primeiro-desafio/caju-amarelo.png' alt='Caju Amarelo'>");
        }
    }

    $(urnaDiv).append("<img class='urna vermelho' src='../assets/images/primeiro-desafio/caixa-vermelha.png' alt='Caixa Vermelha'>");
    $(urnaDiv).append("<img class='urna amarelo' src='../assets/images/primeiro-desafio/caixa-amarela.png' alt='Caixa Amarela'>");

    $(contadorDiv).append('<p>Vermelhos: <span class="count-vermelho">0</span></p>');
    $(contadorDiv).append('<p>Amarelos: <span class="count-amarelo">0</span></p>');

    $("main").append(cajuDiv);
    $("main").append(urnaDiv);
    $("main").append(contadorDiv);

    let cajuPosition = (window.innerWidth / 2) - 240;

    const cajus = document.querySelectorAll(".caju-img img");
    const caixas = document.querySelectorAll(".urna-img img");
    const contadores = document.querySelectorAll(".contador-cajus p");

    cajus.forEach((caju, index) => {
        $(caju).css({
            left: cajuPosition + 60 * index + "px",
        });

        arrastarItens(caju);

        $(caju).on("mouseup", function () { //Soltar na caixa
            caixas.forEach((caixa) => {
                if (colisao(caju, caixa)) {
                    if ($(caju).hasClass("vermelho") && $(caixa).hasClass("vermelho")) {
                        quantidadeVermelhos++;
                        $(".count-vermelho").text(quantidadeVermelhos);
                        $(caju).remove();
                    }

                    if ($(caju).hasClass("amarelo") && $(caixa).hasClass("amarelo")) {
                        quantidadeAmarelos++;
                        $(".count-amarelo").text(quantidadeAmarelos);
                        $(caju).remove();
                    }
                } else {
                    $(caju).css("border", "3px solid red");

                    setTimeout(() => {
                        $(caju).css("border", "none");
                    }, 500);
                }
            });
        });
    });

    caixas.forEach((caixa, index) => {
        $(caixa).css({
            left: cajuPosition + 240 * index + "px",
        });
    });

    contadores.forEach((contador, index) => {
        $(contador).css({
            left: cajuPosition + 240 * index + "px",
        })
    })
}

function desafios(desafio) {
    let criarDivDialogo = $("<div>", { class: "caixa-pergunta" });
    let textoDialogo = $("<h2>", { text: desafio.dialogo });

    $(criarDivDialogo).append(textoDialogo);

    primeiroDesafio();

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

                    indiceDesafio++;

                    if (indiceDesafio >= faseAtual.desafios.length) {
                        $("main").append("<h1>Fim da fase 🎉</h1>");
                        $(".button-avanco").hide();
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

    $("main").append(criarDivDialogo);
}

function introduzirDesafio(desafio) {
    let criarDiv = $("<div>", { class: "caixa" });
    let numeroDesafio = $("<h1>", { text: `Desafio ${desafio.id}:` });
    let nomeDesafio = $("<h2>", { text: `${desafio.titulo}` });

    $(".button-avanco").hide();

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
    faseAtual = fase;
    mostrarTituloDesafio(faseAtual);
}