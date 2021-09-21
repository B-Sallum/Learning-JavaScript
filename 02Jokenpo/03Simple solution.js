const opt = ['0. 🌑', '1. 📄', '2. ✂']

let pontosUser = 0; pontosPc = 0; empates = 0; totalTurnos = 0; //CONTADORES

jogo()

function jogo() {

jokenpo ()

function jokenpo() {

        let turnos = +prompt('J O K E N P O !\nDigite quantas vezes quer perder 🤡 ')

            if (turnos > 0) {                 
        } else { 
            console.log('Por favor coloque um número de rodadas maior que 0')
            jokenpo()
        }

        for (i = 1; i <= turnos; i++) {

            let user = parseInt(prompt(`Por favor digite\n${opt[0]}\n${opt[1]}\n${opt[2]}\n`))
    
            let pc = Math.floor(Math.random() * opt.length) //ALEATÓRIO DE ACORDO COM QUANTAS OPT
    
            if ((pc == 0 && user == 0) || (pc == 1 && user == 1) || (pc == 2 && user == 2)) {  
                empates++
                totalTurnos++
                console.log(`Lancei ${opt[pc]}\nVocê Lançou ${opt[user]}\nEmpatou!! 😝`)
        } else if ((pc == 0 && user == 1) || (pc == 1 && user == 2) || (pc == 2 && user == 0)) {
                pontosUser++
                totalTurnos++
                console.log(`Lancei ${opt[pc]}\nVocê Lançou ${opt[user]}\nVc venceu!! 💚`)
        } else if ((pc == 1 && user == 0) || (pc == 0 && user == 2) || (pc == 2 && user == 1)) {
                pontosPc++
                totalTurnos++
                console.log(`Lancei ${opt[pc]}\nVocê Lançou ${opt[user]}\nVenci!! 🤩`)
        } else {
                console.log('Vc digitou uma opção inválida')
                i--
    }  //END VALIDAÇÃO OPÇÕES
}  //END FOR TURNOS
}  //END jokenpo()

console.log(`
RESULTADOS
Jogamos por um total de ${totalTurnos} rodada(s),
Você fez: ${pontosUser} ponto(s)
Eu fiz: ${pontosPc} ponto(s)
E empatamos ${empates} turno(s)`)         //RESULTADOS

if (pontosUser < pontosPc) {
    console.log('Isto quer dizer que eu venci ✌😁')
} else if (pontosUser > pontosPc) {
    console.log('Isto quer dizer que você venceu!! 🙌')
} else if (pontosUser = pontosPc) {
    console.log('Eita! Empatamos! 😂😂😂')
}

let again = +prompt('\nGostaria de jogar novamente?\nDigite 1 para Sim e Qualquer outra tecla para Sair')

if (again == 1) {    jogo()     }

} //END jogo()