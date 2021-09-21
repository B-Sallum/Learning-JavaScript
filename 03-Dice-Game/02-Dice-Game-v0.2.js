var numPlayers = 4//+prompt('How many Players will Dice? ')

var numTurns = 1 //+prompt('For How Many Rounds? ')

var turn = []

var players = []

var victory = []


for (i = 1; i <= numPlayers; i++) { //filling PLAYERS' ARRAY

    players.push(`Player ${i}`)

} 


for (i = 1; i <= numPlayers; i++) {

    result = Math.floor(Math.random() * 6) + 1 //RANDOM FOR EACH

    turn.push(result) //push (Result) TO turn

} 




console.log(players)
console.log(turn)
console.log(turn.length)
console.log(victory)

//Line of Thought: insert all Plays in array turn as Objects [{Player 1: 4}, {Player 2: 6}, ...] to relate keys: values

//Read Objects from turns = {key: value}, for numPlayers

//Insert Objects in array turnTemp.sort(value) = [{Player 2: 6}, {Player 1: 4}, ...]

//Insert key: in victory = [Player 2, ...]

//Iterate all this in a for or while <= numTurns

//Get next range and so on...

//After all processing done, read victory "how many Player 1"