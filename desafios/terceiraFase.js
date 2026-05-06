import { iniciarFase } from "./desafios.js";

const fase = {
    "fase": 3,
    "titulo": "O Enigma do Grande Cajueiro (4º e 5º Ano)",
    "desafios": [
        {
            "id": 1,
            "titulo": "Sequência Avançada",
            "dialogo": "Agora os padrões estão mais complexos.",
            "pergunta": "Qual o próximo número: 2, 6, 12, 20?",
            "opcoes": ["30", "28", "26"],
            "correta": "30",
            "acerto": "Excelente! Você percebeu o padrão crescente.",
            "erro": "Observe a diferença entre os números."
        },
        {
            "id": 2,
            "titulo": "Algoritmo do Robô",
            "dialogo": "O robô segue instruções em ordem.",
            "pergunta": "O que acontece se mudarmos a ordem?",
            "opcoes": ["Nada muda", "Pode dar erro", "Fica mais rápido"],
            "correta": "Pode dar erro",
            "acerto": "Correto! Ordem importa.",
            "erro": "A ordem é essencial."
        },
        {
            "id": 3,
            "titulo": "Condição Complexa",
            "dialogo": "O robô só coleta se o caju for vermelho E estiver no chão.",
            "pergunta": "Se for amarelo e estiver no chão, ele coleta?",
            "opcoes": ["Sim", "Não"],
            "correta": "Não",
            "acerto": "Perfeito!",
            "erro": "Ambas condições precisam ser verdadeiras."
        },
        {
            "id": 4,
            "titulo": "Repetição",
            "dialogo": "Repetir ações economiza tempo.",
            "pergunta": "Qual estrutura representa repetição?",
            "opcoes": ["If", "Loop", "Variável"],
            "correta": "Loop",
            "acerto": "Muito bem!",
            "erro": "Loops são repetições."
        },
        {
            "id": 5,
            "titulo": "Pensamento Computacional",
            "dialogo": "Programar é resolver problemas de forma lógica.",
            "pergunta": "Qual habilidade estamos usando?",
            "opcoes": ["Força", "Pensamento computacional", "Velocidade"],
            "correta": "Pensamento computacional",
            "acerto": "Excelente!",
            "erro": "Estamos pensando logicamente."
        }
    ]
}

$(document).ready(function () {
    iniciarFase(fase);
});