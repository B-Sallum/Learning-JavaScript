var numPlayers = 4 //+prompt('How many Players will Dice? ')

var numTurns = 2 //+prompt('For How Many Rounds? ')

var turn = []

var players = []


for (i = 1; i <= numPlayers; i++) {

    players.push(`Player ${i}`)

} //PLAYERS' ARRAY

for (i = 1; i <= numTurns; i++) {

    function dice(value) {

        result = Math.floor(Math.random() * 6) + 1 //RANDOM FOR EACH

        turn.push(result)
        //push (Player X, Result) TO turn

    } 

players.forEach(dice)

}


console.log(players)
console.log(turn)

//Pensamento geral: colocar todas as jogadas na array turns = [{Player 1: 3}, {Player 2: 2}] como objetos

// ler Objetos de turns = {key: value}, durante numPlayers

//(determinar 1 rodada e puxar os keys: values)

// colocar em uma array temporária e fazer um .sort a partir de values

// definir ganhador .................... ........
// ................. Player 1 = pontos++

// (as paradas acima dentro de um FOR)

//iterar i = i + numPlayers para pegar a próxima range de rodadas