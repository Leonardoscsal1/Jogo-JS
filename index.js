import { exit } from 'node:process';
import * as readline from 'node:readline/promises';
import fs from "fs"

function lerArquivo(){
    try{
    const arquivo = fs.readFileSync('jogo.json')
    return (JSON.parse(arquivo.toString()))

    } catch{
        return []
    }
}

const ranking = lerArquivo()


    const ordenar = (itemA, itemB) => {
        return itemB.pontuacao - itemA.pontuacao
    }
    
    function imprimirRanking(){
        console.log('----- Ranking ------')
        ranking.sort(ordenar).forEach((item) => {
        console.log(`Nome:${jogo.nome} // Pontuação: ${item.pontuacao}`)
        })
    }




const perguntas = [
    {
        pergunta:"Qual é a capital do Brasil?",
        alternativas: [
            {text: "A) São Paulo"}, 
            {text: "B) Rio de Janeiro"}, 
            {text: "C) Brasília "},
            {text: "D) Belo Horizonte"}
        ], 
        resposta: "C"

    },
    {
        pergunta:"Quanto é 7 + 5?",
        alternativas: [
            {text: "A) 10"}, 
            {text: "B) 12"}, 
            {text: "C) 14"},
            {text: "D) 11"}
        ], 
        resposta: "B"
    },
    {
        pergunta:"Qual é a língua mais falada no mundo?",
        alternativas: [
            {text: "A) Inglês"}, 
            {text: "B) Espanhol"}, 
            {text: "C) Mandarim"},
            {text: "D) Árabe"}
        ], 
        resposta: "C"
    },
    {
        pergunta:"Quem pintou a Mona Lisa?",
        alternativas: [
            {text: "A) Pablo Picasso"}, 
            {text: "B) Leonardo da Vinci"}, 
            {text: "C) Van Gogh"},
            {text: "D) Michelangelo"}
        ], 
        resposta: "B"

    },
    {
        pergunta:"Em que país se encontra a Torre Eiffel?",
        alternativas: [
            {text: "A) Itália"}, 
            {text: "B) França"}, 
            {text: "C) Inglaterra"},
            {text: "D) Alemanha"}
        ], 
        resposta: "B"

    },
    {
        pergunta:"O que é H2O",
        alternativas: [
            {text: "A) Gás Carbônico"}, 
            {text: "B) Água"}, 
            {text: "C) Hidrogênio"},
            {text: "D) Fogo"}
        ], 
        resposta: "B"

    },
    {
        pergunta:"Quantas patas tem uma aranha?",
        alternativas: [
            {text: "A) 8"}, 
            {text: "B) 6"}, 
            {text: "C) 4"},
            {text: "D) 10"}
        ], 
        resposta: "A"

    },
    {    pergunta:"Qual é o maior planeta do sistema solar?",
        alternativas: [
            {text: "A) Terra"}, 
            {text: "B) Marte"}, 
            {text: "C) Júpiter"},
            {text: "D) Saturno"}
        ], 
        resposta: "C"
    },
    {    pergunta:"Qual é o principal idioma falado na Espanha?",
        alternativas: [
            {text: "A) Espanhol"}, 
            {text: "B) Inglês"}, 
            {text: "C) Francês"},
            {text: "D) Italiano"}
        ], 
        resposta: "A"
    },
    {    
        pergunta:"Quantos Copas do Mundo o Brasil tem?",
        alternativas: [
            {text: "A) 5"}, 
            {text: "B) 3"}, 
            {text: "C) 6"},
            {text: "D) 2"}
        ], 
        resposta: "A"
    },
    {    
        pergunta:"Quanto é 10 + 10 x 9",
        alternativas: [
            {text: "A) 180"}, 
            {text: "B) 90"}, 
            {text: "C) 110"},
            {text: "D) 100"}
        ], 
        resposta: "D"
    },
    {    
        pergunta:"Qual a capital de Minas Gerais",
        alternativas: [
            {text: "A) Recife"}, 
            {text: "B) Salvador"}, 
            {text: "C) Londrina"},
            {text: "D) Belo Horizonte"}
        ], 
        resposta: "D"
    },
    {    
        pergunta:"Qual é o maior animal terrestre do mundo?",
        alternativas: [
            {text: "A) Rinoceronte"}, 
            {text: "B) Urso polar"}, 
            {text: "C) Elefante"},
            {text: "D) Girafa"}
        ], 
        resposta: "C"
    },
    {    
        pergunta:"Em qual continente está localizado o Brasil?",
        alternativas: [
            {text: "A) Europa"}, 
            {text: "B) América do Sul"}, 
            {text: "C) África"},
            {text: "D) América do Norte"}
        ], 
        resposta: "B"
    },
    {    
        pergunta:"Quantos segundos tem 1 minuto?",
        alternativas: [
            {text: "A) 30"}, 
            {text: "B) 100"}, 
            {text: "C) 90"},
            {text: "D) 60"}
        ], 
        resposta: "D"
    }
]

function randomizaPerguntas(array) {
  let currentIndex = array.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const jogo = {
    rodada: 0,
    trocas: 3,
    premiacao: {
        maxima: 1000000,
        errar: 0,
        parar: 0,
        acertar: 10,
        valorGanho: 10
    },
    encerrado: false,
    perguntas: randomizaPerguntas([...perguntas])
};

function salvarRanking(pontuacao){
    ranking.push(
        {
            nome: jogo.nome,
            pontuacao
        }
    )
}
    
    function reniciarJogo (){
    jogo.rodada = 0
    jogo.premiacao.errar = 0
    jogo.premiacao.parar = 0
    jogo.premiacao.acertar = 10
    jogo.premiacao.valorGanho = 10
    jogo.perguntas = randomizaPerguntas([...perguntas])
}

function trocarPergunta() {
if (jogo.trocas > 0) {
    console.log(`Você usou um pulo! Restam apenas ${jogo.trocas - 1} trocas.`);
    jogo.trocas--;
    jogo.rodada++;
}
}

jogo.nome = await rl.question(`Para começar o jogo digite seu nome: `);

while (!jogo.encerrado) {
    let perguntaAtual = jogo.perguntas[jogo.rodada]

    console.log("=================================");
    console.log("======== SHOW DO MILHÃO ========")
    console.log("=================================");
    console.log("Seu nome:", jogo.nome)
    console.log("Rodada:", (jogo.rodada + 1))
    console.log("Trocas:", jogo.trocas)
    console.log("Premiação Total:R$", (jogo.premiacao.maxima))
    console.log("Errar:R$", (jogo.premiacao.errar))
    console.log("Parar:R$", (jogo.premiacao.parar))
    console.log("Acertar:R$", (jogo.premiacao.acertar))
    console.log("=================================");
    console.log(perguntaAtual.pergunta)
    perguntaAtual.alternativas.forEach(alternativas => {
        console.log(alternativas.text)
    })
    
    const resposta = await rl.question("Digite a letra da resposta, P para parar ou T para trocar a pergunta: ");

        if(resposta.toUpperCase() == "P"){
            console.log(`A alternativa correta da pergunta era ${perguntaAtual.resposta}`)
            console.log(`${jogo.nome} que pena que você decidiu parar, seu prêmio foi de R$${jogo.premiacao.parar} e você parou na rodada ${jogo.rodada} faltava ${5-jogo.rodada} rodadas para você ser o vencedor! `)
            imprimirRanking()
            salvarRanking(jogo.premiacao.parar)
            jogo.encerrado = true
            
        }
        
        else if (resposta.toUpperCase() == "T") {
            trocarPergunta();
            continue;
        }   

        else if(resposta.toUpperCase() == perguntaAtual.resposta){
            console.log("Resposta Correta!")
            if(jogo.premiacao.acertar >= 1000000){
               console.log(`Parabéns ${jogo.nome} você ganhou o jogo, seu prêmio foi de R$${jogo.premiacao.acertar} e você completou todas as rodadas para ser vencedor!`)
               const jogarNovamente = await rl.question("Você gostaria de jogar novamente? (s/n)")
               salvarRanking(jogo.premiacao.acertar) 
               if(jogarNovamente.toUpperCase() === 'S'){
                    reniciarJogo()
                    imprimirRankingb()

                }
                else{
                    imprimirRanking()
                    console.log("Obrigado por jogar!!")
                    jogo.encerrado = true
                }
            }
            jogo.premiacao.parar = jogo.premiacao.acertar 
            jogo.premiacao.errar = jogo.premiacao.acertar /=2
            jogo.premiacao.acertar *=20
            jogo.premiacao.valorGanho = jogo.premiacao.parar
            jogo.rodada++
        }


        else {
            console.log(`${jogo.nome} você errou!!`)
            console.log(`A resposta correta era ${perguntaAtual.resposta}`)
            console.log(`Seu prêmio foi de R$${jogo.premiacao.errar} e você perdeu na rodada ${jogo.rodada} faltava ${5-jogo.rodada} rodadas para você ser o vencedor!`)
            const jogarNovamente = await rl.question("Você gostaria de jogar novamente? (s/n)")
            imprimirRanking()
            salvarRanking(jogo.premiacao.errar)
            if(jogarNovamente.toUpperCase() === 'S'){
                reniciarJogo()    
                
                }
                else{
                    
                    console.log("Obrigado por jogar!!")
                    jogo.encerrado = true
                }
        }
    }
fs.writeFileSync(`jogo.json`, JSON.stringify(ranking))    
rl.close()