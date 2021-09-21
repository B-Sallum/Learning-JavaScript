jokenpo()

function jokenpo() {

var turns = +prompt('J O K E N P O\nQuantas vezes você quer perder? 😜 ')

  if (turns >= 1) {}
  else { console.log('Por favor coloque um número de rodadas maior que 0')
    jokenpo()
}

console.log(`Vamos jogar ${turns} vezes, se prepare!`)

var turn = 1

var userPoints = 0

var pcPoints = 0

var empate = 0

const options = ['', '1. 🌑', '2. 📄', '3. ✂']

jogo()

function jogo() {

    if (turn <= turns) {

var user = parseInt(prompt('Por favor digite\n1. 🌑\n2. 📄\n3. ✂\n'))

let pc = Math.floor(Math.random() * (4 - 1)) + 1

        if ((pc == 1 && user == 1) || (pc == 2 && user == 2) || (pc == 3 && user == 3)) {
            turn++
            empate++
            console.log(`Lancei ${options[pc]}\nVocê Lançou ${options[user]}\nEmpatou!! 😝`)
            jogo()
    } else if ((pc == 1 && user == 2) || (pc == 2 && user == 3) || (pc == 3 && user == 1)) {
        turn++
        userPoints++
        console.log(`Lancei ${options[pc]}\nVocê Lançou ${options[user]}\nVc venceu!! 💚`)
        jogo()
    } else if ((pc == 2 && user == 1) || (pc == 1 && user == 3) || (pc == 3 && user == 2)) {
        turn++
        pcPoints++
        console.log(`Lancei ${options[pc]}\nVocê Lançou ${options[user]}\nVenci!! 🤩`)
        jogo()
    } else {
        console.log('Vc digitou uma opção inválida')
        jogo()
}  //End of Validating & Counting
    
} else  {}   //END if turns

} //END jogo()

// RESULTADOS:

console.log(`Vamos aos resultados!!
Jogamos ${turns} vez(es),
Você fez: ${userPoints} ponto(s)
E eu fiz: ${pcPoints} ponto(s)
E ${empate} empate(s)`)

if (userPoints < pcPoints) {
    console.log('Isto quer dizer que eu venci ✌😁')
} else if (userPoints > pcPoints) {
    console.log('Isto quer dizer que você venceu!! 🙌')
} else if (userPoints = pcPoints) {
    console.log('Eita! Empatamos! 😂😂😂')
}

// JOGAR DE NOVO
let again = +prompt('Gostaria de jogar novamente?\nDigite 1 para Sim e Qualquer outra tecla para Sair')

if (again == 1) {

    jokenpo()
    
}

} // END jokenpo()