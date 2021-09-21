let players = ['Player 1', 'Player 2', 'Player 3']

let turns = []

for (player of players) {

    result = Math.floor(Math.random() * 6) + 1

    turns.push(player, result)

}

console.log(players)
console.log(turns)

//ESTRUTURA DE LÓGICA

var lista = []


    nome: 
    dado: Math.floor(Math.random() * 6) + 1



lista.push(jogador)


lista.sort((a ,b) => {

    if (b.dado < a.dado) {
        return-1
    } else {
        return true
    }

})