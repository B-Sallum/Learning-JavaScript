// const prompt = require('prompt-sync')();

var players = +prompt('Lets Dice! How Many Players? ')

var turns = +prompt('How many Rounds? ')

var diceFaces = +prompt('How many sides does the dice have? ')

var names = []; var round = []; var wins = []; var totals = []; draw = 0;

for (t = 1; t <= players; t++) { //Creating names = [Player 1, Player 2, ...]
    player =  `Player ${t}` //Sintax    
    names.push(player)   //Add to a names = []
} 

for (play = 1; play <= turns; play++) { //Rounds

    for (i = 1; i <= players; i++) { //Random * Players
        round.push( //Joining Player with Dice => push to a Temp round = [{Name: Dice:}, ...]
            {
                name: `Player ${i}`,
                dice: Math.floor(Math.random() * diceFaces) + 1 //#BOILERPLATE Random
            })     
    } 
    round.sort((a, b) => { //#BOILERPLATE Sorting

        if (b.dice < a.dice) {
            return-1
        } else {
            return true
        }
    }) 
    
    first = round[0]
    second = round[1]

    if (first.dice == second.dice) {
        console.log(`Round ${play}  TIE. No one gets points`)
        draw++
    } else {
        winner = round[0] //Picking only First Object 😥                
        wins.push(winner.name) //Push only Name to wins = [Player 2, Player 1, ...]
        console.log(`Round ${play} >> ${winner.name} wins with ${winner.dice}`)
    }        
    round = [] //Reset Round
} //End Rounds

for (let name of names) {  //Picking First Name Player 1

    temp = {}           //Empty Object
    temp.plyr = name    //Add {plyr: Player 1}
    temp.points = 0     //Add {points: 0}

    for (uu = 0; uu < wins.length; uu++) { //Comparing with All Values of wins
        
        if (name == wins[uu]) {
            temp.points++ //Iterating points @ temp 
        }
    }
    totals.push(temp) //Push temp do totals
}

totals.sort((a, b) => { //Totals BOiLERPLATE sorting

    if (b.points < a.points) {
        return-1
    } else {
        return true
    }
})

firstTotal = totals[0]
secondTotal = totals[1]

if (firstTotal.points == secondTotal.points) {
    console.log(`That's a TIE. No one wins`)
} else {
    winner = totals[0] //Picking First (Sorry if DRAW, Maybe in v2.0)
    console.log(`The winner is ${winner.plyr} with ${winner.points} points.
    Total ties: ${draw}`)
}