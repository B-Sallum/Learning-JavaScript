const prompt = require('prompt-sync')()

class VoteOption {
	constructor(id, name, votes) {
		this.id = id
		this.name = name
		this.votes = votes
	}
}
//PROGRAM BEGINS AT THE END
var options = []; var birthYear = 0; var auth = ''; var vote = 0;
//INSERTING VOTE OPTIONS TO options = []
let nullVote = new VoteOption(0, 'Null Vote ', 0)
options.push(nullVote)
let candidate1 = new VoteOption(1, '🐣 🐣 🐣  THE THREE LITTLE BIRDS ', 0)
options.push(candidate1)
let candidate2 = new VoteOption(2, '❤ ❤ ❤  CHAPOLIN COLORADO ', 0)
options.push(candidate2)
let candidate3 = new VoteOption(3, '🥕 🥕 🥕  BUGS BUNNY ', 0)
options.push(candidate3)
let blankVote = new VoteOption(4, '📄 Blank Vote ', 0)
options.push(blankVote)

function voteAuth(birthYear) { //GETTING AUTHORIZATION

	let currentYear = new Date().getFullYear()

	let age = currentYear - birthYear //GETTING AGE

		if (age < 0) {
			console.log('You are not Born Yet.')
			return 'Denied'
		} else if (age < 16) {
			console.log('You are too young to vote 🐣')
			return 'Denied'
		} else if (age < 18 || (age > 69 && age < 124)) {			
			console.log('Your vote is optional.')
				while (true) { //CONFIRMATION FOR OPTIONALS
					let userOption = String(prompt('Do you want to vote? Y / N > ')).toLowerCase().slice(0,1)
					if (userOption === 'y') {false; return 'Valid'}
					else if (userOption === 'n') {false; return 'Denied'}
					else {console.log('Please Enter Y / N')}
				}
		} else if (age > 17 && age < 70) {
			console.log('Your vote is mandatory')
			return 'Valid'       
		} else {
			console.log('Please come back in Next Life 👻👻👻')
			return 'Denied'
		}
}

function voting(auth, vote) {

	if (auth === 'Denied') { //CHECKING AUTHORIZATION
		console.log('Thank You\nReturning to Menu...')

	} else if (auth === 'Valid') {

		while (true) { //SHOW OPTIONS AND CONFIRM
			for (ii = 0; ii < options.length; ii++) {
				console.log(`${options[ii].id}  >>  ${options[ii].name}\n`)
			}
			vote = +prompt('Please Choose an Option > ')
			if (vote < options.length) {

				let confirm = String(prompt(`You Choose ${options[vote].name} Do you Confirm? Y / N > `)).slice(0,1).toLowerCase()

				if (confirm == 'y') { //ITERATING WHEN CONFIRMATION IS OK
					options[vote].votes++; break
				} else {console.log('Please choose an Option')}

			} else {console.log('Please choose an Option')}		
		}

	} else {console.log('Something goes Wrong, returning to Menu...')}	
}

function results() {

	console.log('\n⬇⬇⬇ And Here is The Results ⬇⬇⬇\n')
		for (tt = 0; tt < options.length; tt++) {
				console.log(`${options[tt].votes} vote(s) for  >>  ${options[tt].name}\n`)
		}

		options.sort((a, b) => { //#BOILERPLATE Sorting
				if (b.votes < a.votes) {
						return-1
				} else {
						return true
				}
		})
	
	if (options[0].votes == 0) { //CONFIRMING ANY VOTES

		console.log('\nThere are Zero Votes!\n')

	} else if (options[0].votes == options[1].votes) {

		if (options[0].name == '📄 Blank Vote ') { //HANDLING BLANK VOTES

			options[1].votes = options[0].votes + options[1].votes
			console.log(`Blank Votes goes to: ${options[1].name}
			and Becomes the Great Winner with ${options[1].votes}`)

		} else if (options[1].name == '📄 Blank Vote ') {

			options[0].votes = options[0].votes + options[1].votes
			console.log(`Blank Votes goes to: ${options[0].name}
			and Becomes the Great Winner with ${options[0].votes} votes`)

		} else { //CHECKING TIE

			console.log('There was a tie\n\nThere Will Be a Second Round of Elections between:')
			console.log(`${options[0].name} and ${options[1].name}`)
		}

	} else {
		console.log(`And Great Winner Is:\n\n${options[0].name}`)
	}
}

while (true) {
		console.log('Welcome to Elections 2021 🏴🏳🏴🏳')
		birthYear = +prompt('Please Insert your Birth Year format YYYY > ')
		auth = voteAuth(birthYear)
		voting(auth, vote)
		let again = String(prompt('Do you want to vote again? Y / N > ')).toLowerCase().slice(0,1)
		if (again == 'y') {}
		else {break}
}
	
results()