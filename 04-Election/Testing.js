const prompt = require('prompt-sync')()

class VoteOption {
	constructor(id, name, votes) {
		this.id = id
		this.name = name
		this.votes = votes
	}
}

var options = []; var birthYear = 0; var auth = ''; var vote = 0;

function addingNewOptions() {
	let nullVote = new VoteOption(0, 'Null Vote ', 0)
	
	let candidate1 = new VoteOption(1, '🐣 🐣 🐣  THE THREE LITTLE BIRDS ', 0)
	options.push(candidate1)
	let candidate2 = new VoteOption(2, '❤ ❤ ❤  CHAPOLIN COLORADO ', 0)
	options.push(candidate2)
	let candidate3 = new VoteOption(3, '🥕 🥕 🥕  BUGS BUNNY ', 0)
	options.push(candidate3)
	let blankVote = new VoteOption(4, '📄 Blank Vote ', 0)
	options.push(blankVote)
	options.push(nullVote)
	options.push(nullVote)
	options.push(nullVote)
}

addingNewOptions() 

let blankIndex = options.indexOf(0)


console.log(blankIndex)