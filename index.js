import * as readline from 'node:readline/promises';

const perguntas = [
    {
        pergunta:"Qual é a capital do Brasil?",
        alternativas: [
            {text: "A) São Paulo", correct:false}, 
            {text: "B) Rio de Janeiro", correct: false}, 
            {text: "C) Brasília ", correct: true},
            {text: "D) Belo Horizonte", correct: false}
        ], 
        resposta: "C"

    },
    {
        pergunta:"Quanto é 7 + 5?",
        alternativas: [
            {text: "A) 10", correct:false}, 
            {text: "B) 12", correct: true}, 
            {text: "C) 14", correct: false},
            {text: "D) 11", correct: false}
        ], 
        resposta: "B"
    },
    {
        pergunta:"Quem descobriu o Brasil?",
        alternativas: [
            {text: "A) Cristóvão Colombo", correct:false}, 
            {text: "B) Pedro Álvares Cabral", correct: true}, 
            {text: "C) Dom Pedro I", correct: false},
            {text: "D) Vasco da Gama", correct: false}
        ], 
        resposta: "B"
    },
    {    pergunta:"Qual é o maior planeta do sistema solar?",
        alternativas: [
            {text: "A) Terra", correct:false}, 
            {text: "B) Marte", correct: false}, 
            {text: "C) Júpiter", correct: true},
            {text: "D) Saturno", correct: false}
        ], 
        resposta: "C"
    },
    {    pergunta:"Qual é o principal idioma falado na Espanha?",
        alternativas: [
            {text: "A) Espanhol", correct:true}, 
            {text: "B) Inglês", correct: false}, 
            {text: "C) Francês", correct: false},
            {text: "D) Italiano", correct: false}
        ], 
        resposta: "A"
    },
    {    
        pergunta:"Quantos Copas do Mundo o Brasil tem?",
        alternativas: [
            {text: "A) 5", correct:true}, 
            {text: "B) 3", correct: false}, 
            {text: "C) 6", correct: false},
            {text: "D) 2", correct: false}
        ], 
        resposta: "A"
    }
]

const jogo = {
    rodada: 0,
    premiacao: {
        maxima: 1000000,
        errar: 0,
        parar: 0,
        acertar:  10,
        valorGanho: 10
    },
    encerrado: false

}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

jogo.nome = await rl.question(`Para começar o jogo digite seu nome: `);

console.log(jogo.nome)

while (!jogo.encerrado) {
    let perguntaAtual = perguntas[jogo.rodada]

    console.log("=================================");
    console.log("Seu nome:", jogo.nome)
    console.log("Rodada:", (jogo.rodada + 1))
    console.log("Premiação Total: ", (jogo.premiacao.maxima))
    console.log("Errar: ", (jogo.premiacao.errar))
    console.log("Parar: ", (jogo.premiacao.parar))
    console.log("Acertar: ", (jogo.premiacao.acertar))
    console.log("=================================");
    console.log(perguntaAtual.pergunta)
    perguntaAtual.alternativas.forEach(alternativas => {
        console.log(alternativas.text)
    })
    

    const resposta = await rl.question("Digite a letra da resposta ou P para parar: ");
    console.log(resposta)

        if(resposta == "P"){
            console.log(`${jogo.nome} que pena que voce decidiu parar e seu premio foi de $${jogo.premiacao.parar}, voce parou na rodada ${jogo.rodada} `)
            jogo.encerrado = true
        }
        

        else if(resposta == perguntaAtual.resposta){
            console.log("Resposta Correta!")
            jogo.premiacao.acertar
            jogo.premiacao.parar = jogo.premiacao.acertar 
            jogo.premiacao.errar = jogo.premiacao.acertar /=2
            jogo.premiacao.acertar *=20
            jogo.premiacao.valorGanho = jogo.premiacao.parar
            jogo.rodada++
            if(jogo.rodada >= 5){
               console.log(`Parabéns ${jogo.nome} você ganhou o jogo, seu prêmio foi de ${jogo.premiacao.valorGanho} e voce completou todas as rodadas para ser vencedor`)
               const jogardenovo = await rl.question("Voce gostaria de jogar novamente? (s/n)")
                if(jogardenovo === 's'){
                    console.log(jogardenovo)
                    perguntaAtual

                }
                else{
                    console.log("Obrigado por jogar!!")
                    jogo.encerrado = true
                }
            }
            
        }


        else {
            console.log(`${jogo.nome} voce errou!!`)
            console.log(`A resposta correta era ${perguntaAtual.resposta}`)
            console.log(`Seu premio foi de ${jogo.premiacao.errar}`)
            const jogardenovo = await rl.question("Voce gostaria de jogar novamente? (s/n)")
            if(jogardenovo === 's'){
                console.log(jogardenovo)    
                perguntaAtual
                }
                else{
                    console.log("Obrigado por jogar!!")
                    jogo.encerrado = true
                }
        }
    }
    console.log("Fim!")

