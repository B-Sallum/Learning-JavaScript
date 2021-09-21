var player = []  //That's all Here Folks!!

class Player {
    constructor(name, round, wins) {
        this.name = name
        this.round = round
        this.wins = wins
    }
}

console.log(` 🎲🎲 W E L C O M E  T O   D I C E S 🎲🎲 `)

let players = +prompt('\nPlease insert Number of Players: ')

let rounds = +prompt('\nFor how many Rounds? ')

let diceSides = +prompt('\nHow many sides is your dice? ')

let draw = 0

function dice() { 
    valeus = []       
    for (i = 1; i <= rounds; i++) {
        diceValue = parseInt(Math.floor(Math.random() * diceSides) + 1) 
        valeus.push(diceValue)  
    }
    return valeus
}

for (naming = 1; naming <= players; naming++) { //Names Creation
    let user = new Player(
        `Player ${naming}`,//prompt(`Please insert Name for Player ${naming}`),
        dice(),
        0
    )
    player.push(user);
}

for (roundCount = 1; roundCount <= rounds; roundCount++) {
    player.sort((a, b) => { //#BOILERPLATE Sorting
        if (b.round < a.round) {
            return-1
        } else {
            return true
        }
    }) 
        if (player[0].round[0] == player[1].round[0]) {
            console.log(`Round ${roundCount} TIE. No one gets points`)
            draw++
        } else {
            console.log(`Round ${roundCount} Winner is ${player[0].name}`)
            player[0].wins++
        }
        for (roundPop = 0; roundPop < players ; roundPop++) {
            player[roundPop].round.shift()
        }
} 

player.sort((a, b) => { //#BOILERPLATE Sorting
    if (b.wins < a.wins) {
        return-1
    } else {
        return true
    }
}) 

if (player[0].wins == player[1].wins) {
    console.log(`\nThat's TIE. NO ONE WINS 😴😴😴`)
    draw++
} else {
    console.log(`\nGREAT WINNER is ${player[0].name} with ${player[0].wins} Wins\nThere was ${draw} TIE`)
}