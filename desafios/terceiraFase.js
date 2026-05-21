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
        },
        {
            "id": 6,
            "titulo": "A Grande Rede do Cajueiro",
            "dialogo": "Vocês sabiam que o nosso Cajueiro é todo interconectado por baixo da terra e pelo céu? É como se ele formasse uma grande rede de caminhos, ligando um lugar ao outro através de suas raízes e galhos!",
            "pergunta": "Se existe uma estrada que liga a Parte A até a Parte B, e outra estrada que liga a Parte B até a Parte C, é possível que um nutriente saia da Parte A e chegue até a Parte C?",
            "opcoes": [
                "Sim, ela pode viajar passando pela Parte B",
                "Não, ela só chegaria se houvesse uma estrada direta de A para C",
                "Não, as partes nunca se comunicam"
            ],
            "correta": "Sim, ela pode viajar passando pela Parte B",
            "acerto": "Isso mesmo! Na natureza e nas redes, podemos usar pontes para chegar a lugares distantes. Tudo está conectado em Pirangi! +10 Eco-Pontos!",
            "erro": "Pense num mapa: se você quer ir para a casa de um amigo, mas precisa passar pela praça primeiro, você ainda consegue chegar lá, certo? Na nossa rede de raízes é do mesmo jeito!",
            "habilidade": "EF05C002"
        },
        {
            "id": 7,
            "titulo": "O Alarme do Pomar",
            "dialogo": "O sensor de irrigação só liga se: [Solo Seco] E [Temperatura > 30°C].",
            "pergunta": "O solo está muito seco, mas a temperatura é de 25°C. A irrigação vai ligar?",
            "opcoes": [
                "Sim",
                "Não"
            ],
            "correta": "Não",
            "acerto": "Inteligente! Você entendeu que no operador lógico 'E' as duas condições devem ser verdadeiras. +10 Eco-Pontos!",
            "erro": "Atenção ao operador lógico 'E'. Ele exige que tudo seja verdade para funcionar!",
            "habilidade": "EF05C003"
        },
        {
            "id": 8,
            "titulo": "Doce de Caju em Lote",
            "dialogo": "Para fazer 2 potes de doce, usamos 10 cajus.",
            "pergunta": "Se eu quiser fazer 6 potes de doce, de quantos cajus vou precisar?",
            "opcoes": [
                "20 cajus",
                "30 cajus",
                "60 cajus"
            ],
            "correta": "30 cajus",
            "acerto": "Precisão de mestre! A receita vai sair perfeita. +10 Eco-Pontos!",
            "erro": "Pense assim: 6 potes é o triplo de 2 potes. Então precisamos do triplo de cajus.",
            "habilidade": "EF05MA12"
        },
        {
            "id": 9,
            "titulo": "Partilha da Colheita",
            "dialogo": "Vamos dividir 90 castanhas entre dois cestos. O cesto da direita deve ter o dobro do cesto da esquerda.",
            "pergunta": "Quantas castanhas ficarão no cesto da esquerda?",
            "opcoes": [
                "30 castanhas",
                "45 castanhas",
                "60 castanhas"
            ],
            "correta": "30 castanhas",
            "acerto": "Divisão correta! 30 para um, 60 para o outro. +10 Eco-Pontos!",
            "erro": "No total temos 3 partes: 1 parte + 2 partes do dobro. Então tente dividir 90 por 3!",
            "habilidade": "EF05MA13"
        },
        {
            "id": 10,
            "titulo": "O Robô Coletor",
            "dialogo": "Programei um robô para recolher os cajus que caem no chão usando uma seleção condicional.",
            "pergunta": "Código: SE caju_no_chão == maduro ENTÃO recolher SENÃO ignorar. O robô encontrou um caju verde no chão. O que ele faz?",
            "opcoes": [
                "Recolher",
                "Ignorar",
                "Pedir ajuda"
            ],
            "correta": "Ignorar",
            "acerto": "Isso! O caju verde precisa de tempo para amadurecer. O robô acertou! +10 Eco-Pontos!",
            "erro": "O comando 'SENÃO' serve para quando a condição não é cumprida. Como o caju não é maduro, ele ignora!",
            "habilidade": "EF05C004"
        },
        {
            "id": 11,
            "titulo": "A Sequência de Plantio",
            "dialogo": "Para expandir a sombra do nosso cajueiro, os agricultores plantam novas mudas seguindo um padrão.",
            "pergunta": "Na Coluna A temos 2 mudas, na B temos 4 e na C temos 8. Quantas mudas teremos na Coluna D?",
            "opcoes": [
                "10 mudas",
                "12 mudas",
                "16 mudas"
            ],
            "correta": "16 mudas",
            "acerto": "Isso mesmo! Você descobriu que a sequência dobra a cada passo. O pomar vai ficar gigante! +10 Eco-Pontos!",
            "erro": "Estamos multiplicando por 2 a cada nova coluna. Se na C tinha 8, quanto terá na D?",
            "habilidade": "EF04MA11 + EF04CO01"
        },
        {
            "id": 12,
            "titulo": "O Segredo das Caixas",
            "dialogo": "Criei um registro para a balança digital. Ela mostra que 4 caixas de castanhas pesam o mesmo que uma caixa de 20kg de cajus.",
            "pergunta": "Se 4 caixas de castanhas pesam 20kg, qual o peso de uma única caixa?",
            "opcoes": [
                "5kg",
                "16kg",
                "80kg"
            ],
            "correta": "5kg",
            "acerto": "Perfeito! Você usou a divisão para equilibrar a balança. +10 Eco-Pontos!",
            "erro": "Se 4 caixas dão 20kg, para descobrir uma só você precisa dividir 20 por 4!",
            "habilidade": "EF04MA13"
        },
        {
            "id": 13,
            "titulo": "Propriedade do Equilíbrio",
            "dialogo": "Temos dois cestos iguais com 15 cajus cada. Se eu colocar mais 5 cajus no primeiro cesto, o que deve acontecer no segundo para manter a igualdade?",
            "pergunta": "Sentença lógica: [Adicionar 5 no Cesto A] E [ ________ no Cesto B].",
            "opcoes": [
                "Subtrair 5 cajus",
                "Adicionar 5 cajus",
                "Não fazer nada"
            ],
            "correta": "Adicionar 5 cajus",
            "acerto": "Matemática pura! Se você adiciona a mesma quantidade dos dois lados, o equilíbrio se mantém. +10 Eco-Pontos!",
            "erro": "O que acontece de um lado da balança deve acontecer igualmente do outro lado!",
            "habilidade": "EF04MA14 + EF05C003"
        },
        {
            "id": 14,
            "titulo": "A Rede de Distribuição",
            "dialogo": "Para levar o suco de caju de Pirangi para outras cidades, usamos uma rede de conexão formada por pontos e linhas.",
            "pergunta": "Existe uma linha ligando Pirangi a Natal e outra ligando Natal a Parnamirim. Se uma dessas linhas for cortada, todos os pontos continuam conectados?",
            "opcoes": [
                "Sim",
                "Não"
            ],
            "correta": "Não",
            "acerto": "Exato! Se a conexão do meio falha, a rede se divide. +10 Eco-Pontos!",
            "erro": "Imagine um cordão: se você corta o meio, as duas pontas ficam separadas.",
            "habilidade": "EF05CO02"
        },
        {
            "id": 15,
            "titulo": "O Valor da Safra",
            "dialogo": "O preço do saco de castanhas subiu, mas a igualdade se manteve porque adicionamos o mesmo valor ao pagamento total.",
            "pergunta": "Se ____ + 10 = 30 + 10, qual valor deve preencher o espaço vazio?",
            "opcoes": [
                "20",
                "30",
                "40"
            ],
            "correta": "30",
            "acerto": "Parabéns! Você percebeu que os dois lados da igualdade precisam permanecer equivalentes. +10 Eco-Pontos!",
            "erro": "Observe os dois lados da igualdade como um espelho. Quem deve ocupar o espaço vazio?",
            "habilidade": "EF05MA11 + EF05C004"
        }
    ]
}

$(document).ready(function () {
    iniciarFase(fase);
});