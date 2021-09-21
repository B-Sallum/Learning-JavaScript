//JOKENPO COM ARRAY DE DADOS GUARDANDO CADA VITÓRIA, DERROTA OU EMPATE

let pontos = [] //AQUI O PROGRAMA INSERE v para Vitória d ou e

const options = ['🤡', '1. 🌑', '2. 📄', '3. ✂']

let userPoints = 0
let pcPoints = 0
let draw = 0

jokenpo()

function jokenpo() {

let turnos = +prompt('J O K E N P O !\nDigite quantas vezes quer perder 🤡 ')

if (turnos >= 1) {}
else { console.log('Por favor coloque um número de rodadas maior que 0')
  jokenpo()
}

for (i = 1; i <= turnos; i++) {

        var user = parseInt(prompt(`Por favor digite\n${options[1]}\n${options[2]}\n${options[3]}\n`))

        let pc = Math.floor(Math.random() * 3) + 1 //ALEATÓRIO DE 1 A 3

        if ((pc == 1 && user == 1) || (pc == 2 && user == 2) || (pc == 3 && user == 3)) {  
            pontos.push('e')
            console.log(`Lancei ${options[pc]}\nVocê Lançou ${options[user]}\nEmpatou!! 😝`)
    } else if ((pc == 1 && user == 2) || (pc == 2 && user == 3) || (pc == 3 && user == 1)) {
            pontos.push('v')
            console.log(`Lancei ${options[pc]}\nVocê Lançou ${options[user]}\nVc venceu!! 💚`)
    } else if ((pc == 2 && user == 1) || (pc == 1 && user == 3) || (pc == 3 && user == 2)) {
            pontos.push('d')
            console.log(`Lancei ${options[pc]}\nVocê Lançou ${options[user]}\nVenci!! 🤩`)
    } else {
            console.log('Vc digitou uma opção inválida')
            i--
        }  
}
} //END OF JOKENPO

function contador(item) {
    if (item == 'e') {
        draw++
    } else if (item == 'v') {       //FUNÇÃO DE COMPARAÇÃO
        userPoints++
    } else if (item == 'd') {
        pcPoints++
    }
}
pontos.forEach(contador)            //EXECUTANDO A FUNÇÃO DE COMPARAÇÃO em cada item da array pontos


console.log(`
RESULTADOS
Das ${pontos.length} vezes que jogamos,
Você fez: ${userPoints} pontos
Eu fiz: ${pcPoints} pontos
E empatamos ${draw} vezes`)         //RESULTADOS

if (userPoints < pcPoints) {
    console.log('Isto quer dizer que eu venci ✌😁')
} else if (userPoints > pcPoints) {
    console.log('Isto quer dizer que você venceu!! 🙌')
} else if (userPoints = pcPoints) {
    console.log('Eita! Empatamos! 😂😂😂')
}

console.log(pontos)
