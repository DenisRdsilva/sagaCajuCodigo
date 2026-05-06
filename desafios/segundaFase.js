import { iniciarFase } from "./desafios.js";

const fase = {
    "fase": 2,
    "titulo": "O Labirinto do Cajueiro (3º e 4º Ano)",
    "desafios": [
        {
            "id": 1,
            "titulo": "A Escala da Colheita",
            "dialogo": "Vejam como os cestos foram organizados: 4, 8, 12... conseguimos perceber um padrão.",
            "pergunta": "Quantas castanhas haverá no quinto cesto?",
            "opcoes": ["16", "20", "24"],
            "correta": "16",
            "acerto": "Muito bem! O padrão cresce de 4 em 4. +10 Eco-Pontos!",
            "erro": "Observe o padrão: sempre soma 4."
        },
        {
            "id": 2,
            "titulo": "Lógica do Pomar",
            "dialogo": "O robô só age se o caju cair no chão.",
            "pergunta": "Se o caju ainda está no galho, o robô age?",
            "opcoes": ["Sim", "Não"],
            "correta": "Não",
            "acerto": "Correto! A condição não foi satisfeita.",
            "erro": "Ele só age quando a condição é verdadeira."
        },
        {
            "id": 3,
            "titulo": "Decomposição",
            "dialogo": "Para resolver problemas grandes, dividimos em partes menores.",
            "pergunta": "Qual o nome dessa técnica?",
            "opcoes": ["Repetição", "Decomposição", "Sequência"],
            "correta": "Decomposição",
            "acerto": "Isso mesmo! +10 Eco-Pontos!",
            "erro": "Estamos dividindo o problema."
        },
        {
            "id": 4,
            "titulo": "Múltiplos",
            "dialogo": "Estamos contando de 5 em 5.",
            "pergunta": "Qual o próximo número após 20?",
            "opcoes": ["21", "25", "30"],
            "correta": "25",
            "acerto": "Perfeito!",
            "erro": "Some mais 5."
        },
        {
            "id": 5,
            "titulo": "Dados do Cajueiro",
            "dialogo": "Cada árvore tem informações como idade e tipo.",
            "pergunta": "Qual campo indica quantos anos a árvore tem?",
            "opcoes": ["Tipo", "Idade", "Saúde"],
            "correta": "Idade",
            "acerto": "Exato!",
            "erro": "Procure o campo correto."
        }
    ]
}

$(document).ready(function () {
    iniciarFase(fase);
});