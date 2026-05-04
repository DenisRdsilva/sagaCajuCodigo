import { iniciarFase } from "./desafios.js";

const fase = {
    fase: 1,
    nome: "O Despertar no Cajueiro (1º e 2º Ano)",
    desafios: [
        {
            "id": 1,
            "titulo": "Cores de Pirangi",
            "dialogo": "Para começar nossa aventura no maior cajueiro do mundo, vamos organizar os frutos colhidos. Como podemos separar esses cajus amarelos e vermelhos para saber quantos temos de cada?",
            "pergunta": "Qual critério estamos usando para organizar os cajus?",
            "opcoes": ["Pelo sabor", "Pela cor", "Pelo peso"],
            "correta": "Pela cor",
            "acerto": "Parabéns! Identificar padrões de cores é o primeiro passo para um grande pesquisador. +10 Eco-Pontos!",
            "erro": "Erro de processamento! Se o foco é separar o 'amarelo' do 'vermelho', estamos olhando para qual característica?"
        },
        {
            "id": 2,
            "titulo": "A Trilha de Castanhas",
            "dialogo": "Lua deixou uma trilha de castanhas para não nos perdermos: uma castanha em pé, uma castanha deitada, uma em pé... Oh, a próxima sumiu!",
            "pergunta": "Qual elemento completa a sequência: [Em pé] - [Deitada] - [Em pé] - [?]?",
            "opcoes": ["Castanha deitada", "Caju", "Castanha em pé"],
            "correta": "Castanha deitada",
            "acerto": "Incrível! Você percebeu a regularidade da nossa trilha potiguar. +10 Eco-Pontos!",
            "erro": "Atenção ao padrão! O código da sequência alterna entre as posições."
        },
        {
            "id": 3,
            "titulo": "Passo a Passo da Colheita",
            "dialogo": "Para colher a castanha sem machucar o fruto, seguimos esta ordem: 1. Segurar a castanha, 2. Girar com cuidado, 3. Puxar.",
            "pergunta": "O que acontece se tentarmos 'Puxar' sem antes 'Segurar'?",
            "opcoes": ["A castanha cai no chão", "O caju vira suco", "Nada acontece"],
            "correta": "A castanha cai no chão",
            "acerto": "Exato! Respeitar a ordem da natureza garante o sucesso. +10 Eco-Pontos!",
            "erro": "Erro de execução! Um algoritmo precisa seguir a ordem correta."
        },
        {
            "id": 4,
            "titulo": "Pulo do Orientador",
            "dialogo": "O Orientador Eco está pulando as raízes do cajueiro de 2 em 2. Ele pisou no 2, depois no 4 e no 6.",
            "pergunta": "Seguindo o padrão de somar +2, qual será o próximo número?",
            "opcoes": ["7", "8", "10"],
            "correta": "8",
            "acerto": "Isso mesmo! Você calculou o próximo passo. +10 Eco-Pontos!",
            "erro": "A regra é somar 2. Quanto é 6 + 2?"
        },
        {
            "id": 5,
            "titulo": "Cestos de Castanhas",
            "dialogo": "Eco organizou as castanhas em grupos de 10. Ele já contou: 10, 20, 30... e agora parou para respirar.",
            "pergunta": "Qual o número que completa a sequência de dez em dez?",
            "opcoes": ["35", "40", "50"],
            "correta": "40",
            "acerto": "Perfeito! Você domina a contagem de dezenas. +10 Eco-Pontos!",
            "erro": "Estamos somando 10. Quanto vem depois de 30?"
        },
        {
            "id": 6,
            "titulo": "O Mapa de Pirangi",
            "dialogo": "O Cajueiro é gigante! Para não nos perdermos, desenhei um mapa simples onde o tronco é apenas um círculo marrom.",
            "pergunta": "Por que desenhamos o mapa de forma simples?",
            "opcoes": ["Porque é mais fácil de entender", "Porque não temos lápis", "Porque as folhas não importam"],
            "correta": "Porque é mais fácil de entender",
            "acerto": "Excelente! Modelos simples ajudam na compreensão. +10 Eco-Pontos!",
            "erro": "Na modelagem, focamos no essencial."
        },
        {
            "id": 7,
            "titulo": "Repetição no Robô",
            "dialogo": "Byte programou um mini-robô para colocar castanhas nos saquinhos. O comando é: Repita 5 vezes: coloque 1 castanha.",
            "pergunta": "No final dessa instrução, quantas castanhas haverá no saquinho?",
            "opcoes": ["1", "5", "0"],
            "correta": "5",
            "acerto": "Sensacional! Você entendeu a repetição. +10 Eco-Pontos!",
            "erro": "Se repete 5 vezes, soma 5 ações."
        },
        {
            "id": 8,
            "titulo": "Castanhas em Pares",
            "dialogo": "Lua está fazendo desenhos com as castanhas. Cada desenho usa 2 castanhas: 2, 4, 6, 8, 10...",
            "pergunta": "Qual é o próximo número dessa sequência?",
            "opcoes": ["11", "12", "14"],
            "correta": "12",
            "acerto": "Muito bem! Você encontrou o padrão. +10 Eco-Pontos!",
            "erro": "O padrão soma +2. Quanto é 10 + 2?"
        },
        {
            "id": 9,
            "titulo": "Contagem Regressiva",
            "dialogo": "Temos 12 cajus. O Orientador Eco deu 3 para os passarinhos. Depois tirou mais 3... A sequência está: 12, 9, 6...",
            "pergunta": "Qual o próximo número se tirarmos mais 3?",
            "opcoes": ["3", "4", "0"],
            "correta": "3",
            "acerto": "Perfeito! Você calculou corretamente. +10 Eco-Pontos!",
            "erro": "Estamos subtraindo 3. Quanto é 6 - 3?"
        },
        {
            "id": 10,
            "titulo": "Batizando a Receita",
            "dialogo": "Aprendemos que para fazer um doce de caju ou programar um robô, usamos uma lista de passos organizada.",
            "pergunta": "Qual o nome que o Programador Byte dá para essa lista de passos?",
            "opcoes": ["Algoritmo", "Fotografia", "Teclado"],
            "correta": "Algoritmo",
            "acerto": "Fantástico! Você aprendeu um conceito fundamental. +10 Eco-Pontos!",
            "erro": "Sequência de passos se chama algoritmo."
        },
        {
            "id": 11,
            "titulo": "O Padrão das Castanhas",
            "dialogo": "Olhem quantas castanhas caíram aqui perto do Cajueiro de Pirangi. Elas formam uma trilha na areia!",
            "pergunta": "Qual elemento completa a sequência: Grande, Pequena, Grande, ...?",
            "opcoes": ["Pequena", "Caju", "Siri"],
            "correta": "Pequena",
            "acerto": "Arrasou! Você percebeu o padrão. +10 Eco-Pontos!",
            "erro": "O padrão alterna entre grande e pequena."
        }
    ]
}

$(document).ready(function () {
    iniciarFase(fase);
});