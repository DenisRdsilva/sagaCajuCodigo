const dialogos = [
    {
        "id": 1,
        "nome": "professora",
        "frase": "Olá! Seja bem-vindo(a) ao Cajueiro de Pirangi, o maior cajueiro do mundo!"
    },
    {
        "id": 2,
        "nome": "professora",
        "frase": "Aqui, cada galho, castanha e raiz escondem desafios, mistérios e muitas descobertas."
    },
    {
        "id": 3,
        "nome": "professora",
        "frase": "Eu sou a Professora "
    },
    {
        "id": 4,
        "nome": "eco",
        "frase": "Eu sou o Orientador Eco."
    },
    {
        "id": 5,
        "nome": "byte",
        "frase": "E eu sou o Programador Byte."
    },
    {
        "id": 6,
        "nome": "professora",
        "frase": "Hoje estamos com um pequeno problema..."
    },
    {
        "id": 7,
        "nome": "eco",
        "frase": "Os cajus estão caindo por toda parte! Temos que pegá-los antes que estraguem."
    },
    {
        "id": 8,
        "nome": "eco",
        "frase": "Você pode nos ajudar pondo cada caju na caixa certa?"
    },
    {
        "id": 9,
        "nome": "professora",
        "frase": "Os cajus vermelhos vão na caixa vermelha e os amarelos na caixa amarela!"
    },
    {
        "id": 10,
        "nome": "eco",
        "frase": "Incrível! Você ajudou a salvar nossa colheita!"
    },
    {
        "id": 11,
        "nome": "eco",
        "frase": "Cada boa ação ajuda o Cajueiro a continuar vivo e saudável."
    },
    {
        "id": 12,
        "nome": "byte",
        "frase": "UAU... você foi muito rápido(a)!"
    },
    {
        "id": 13,
        "nome": "byte",
        "frase": "Sabia que organizar cajus também é uma forma de pensar como programador?"
    },
    {
        "id": 14,
        "nome": "byte",
        "frase": "Na computação, organizamos informações, seguimos padrões e resolvemos problemas."
    },
    {
        "id": 15,
        "nome": "professora",
        "frase": "Aliás, você bem que podia nos ajudar um pouco mais. Que tal?"
    },
    {
        "id": 16,
        "nome": "professora",
        "frase": "ÓTIMO! Sabia que você nos ajudaria!"
    },
    {
        "id": 17,
        "nome": "byte",
        "frase": "Prepare-se, você vai encarar desafios de lógica, padrões, sequências e pensamento computacional!"
    },
    {
        "id": 18,
        "nome": "eco",
        "frase": "E cada desafio completado, você ganha Eco-Pontos!"
    },
    {
        "id": 19,
        "nome": "professora",
        "frase": "Vamos começar o primeiro desafio."
    }
]

let indiceDialogo = 0;

function posicaoDialogo(imagem, caixa) {
    const imgPosition = document.querySelector(imagem);
    const rect = imgPosition.getBoundingClientRect();

    // const top = rect.top;
    const dialogoAltura = rect.right;

    $(caixa).css({
        bottom: dialogoAltura + "px",
        
    });
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

function proximoDialogo() {
    indiceDialogo++;
    const dialogo = dialogos.at(indiceDialogo);

    mostrarDialogo(dialogo.nome, dialogo.frase);
}

function desafioCaju() {
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

function mostrarDialogo(nomePersonagem, frase) {
    $(".dialogo").hide();

    switch (nomePersonagem) {
        case "professora":
            $(".prof-dialogo").text(frase).show();
            break;

        case "eco":
            $(".eco-dialogo").text(frase).show();
            break;

        case "byte":
            $(".byte-dialogo").text(frase).show();
            break;
    }
}

const introDesafios = () => {
    let fase = localStorage.getItem("faseSelecionada");
    let texto = dialogos.at(indiceDialogo).frase;

    let dialogoEco = $("<div>", { class: "dialogo eco-dialogo" });
    let dialogoProf = $("<div>", { class: "dialogo prof-dialogo", text: texto });
    let dialogoByte = $("<div>", { class: "dialogo byte-dialogo" });

    let imgEco = $("<img>", { class: "eco", src: "../assets/images/eco.png", alt: "Orientador Eco" });
    let imgProf;
    if (fase == "1") {
        imgProf = $("<img>", { class: "prof", src: "../assets/images/luna.png", alt: "Professora Luna" });
        dialogos.at(2).frase = dialogos.at(2).frase + "Luna."
    } else {
        imgProf = $("<img>", { class: "prof", src: "../assets/images/laura.png", alt: "Professora Laura" });
        dialogos.at(2).frase = dialogos.at(2).frase + "Laura."
    }
    let imgByte = $("<img>", { class: "byte", src: "../assets/images/byte.png", alt: "Programador Byte" });

    $(".personagem.eco").append(imgEco);

    $(".personagem.professora").append(dialogoProf);
    $(".personagem.professora").append(imgProf);

    $(".personagem.byte").append(imgByte);

    $(".personagem.eco").append(dialogoEco);
    $(".personagem.byte").append(dialogoByte);

    posicaoDialogo(".personagem img.eco", ".eco-dialogo");
    posicaoDialogo(".personagem img.byte", ".byte-dialogo");
    posicaoDialogo(".personagem.professora img.prof", ".prof-dialogo");
    // posicaoFeedback(".feedback", ".caixa-dialogo");

    $(".dialogo.eco-dialogo").hide();
    $(".dialogo.byte-dialogo").hide();

    $(".next-button").click(function () {
        if (indiceDialogo < dialogos.length - 1) {
            if (indiceDialogo != 8) {
                proximoDialogo();
            } else {
                $("img").hide();
                $(".dialogo").hide();

                $(".background").css({ backgroundSize: 200 + "%" });

                desafioCaju();
            }
        } else {

        }
    });
}

$(document).ready(function () {
    introDesafios();
});