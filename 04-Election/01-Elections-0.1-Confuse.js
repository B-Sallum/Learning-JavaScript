class VoteOption {
    constructor(id, name, votes) {
        this.id = id
        this.name = name
        this.votes = votes
    }    
}

var options = []; var birthYear = 0; var auth = ''

let nullVote = new VoteOption(0, 'Null Vote ', 0)
let candidate1 = new VoteOption(1, '🐣 🐣 🐣  THE THREE LITTLE BIRDS ', 0)
let candidate2 = new VoteOption(2, '❤ ❤ ❤  CHAPOLIN COLORADO ', 0)
let candidate3 = new VoteOption(3, '🥕 🥕 🥕  BUGS BUNNY ', 0)
let blankVote = new VoteOption(4, '📄 Blank Vote ', 0)

options.push(nullVote)
options.push(candidate1)
options.push(candidate2)
options.push(candidate3)
options.push(blankVote)

function menu() { 

    console.log('\n 🤡 2021 ELECTIONS 🤡\n') //LEARN DATE FUNCTIONS
    birthYear = +prompt('Please Insert Your Birth Year in Format YYYY: ')
    auth = voteAuth(birthYear)
        // if (auth == 'Denied') {
        //     console.log(`\nIts nice that you "Want To",✌ 😁\nbut You Are Too Young to Vote.\n\nPlease Come Back when You Are 16\n`)
        //     quit()
        } else if (auth == 'Optional') {
            console.log(`\nYour vote is Optional.\n\nDo you want to Vote?\nPlease Insert:\n\n1. ✔ Yes I want to Vote.\n2. ❌ Thanks, but No`)
            let res = +prompt('Do you want to Vote?\n\nPlease Insert 1 for YES\nOr Any Other Key for NO')
                if (res == 1) {seeOptions()}
                else {quit()}
        } else if (auth == 'Mandatory') {seeOptions()}
}

// function voteAuth(birthYear) {

//     let today = new Date()
//     let thisYear = today.getFullYear()

//     let age = thisYear - birthYear

//     if (age < 16) {
//         return 'Denied'
//     } else if (age < 18 || age >= 70) {
//         return 'Optional'
//     } else {
//         return 'Mandatory'
//     }
// }

// function seeOptions() {
        
//     console.log('\nWelcome\n\nThe Options Are:\n')
//         for (ii = 0; ii < options.length; ii++) {
//             console.log(`${options[ii].id}  >>  ${options[ii].name}\n`)
//     }
//     let vote = +prompt('Insert Number: ')
//     console.log(`\nYou Choose Option\n${options[vote].id}. ${options[vote].name}`)
//     let confirm = +prompt(`\nConfirm?\n1. ✔✔\n2. ❌❌`)
    
//     if (confirm == 1) {
//         options[vote].votes++
//         quit()
//     } else {seeOptions()}    
// }

function results() {
    console.log(`\nAnd Here is The Results:\n`)
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
        if (options[0].votes == options[1].votes) {
            console.log(`\nThere was a tie\n\nThere Will Be a Second Round of Elections between:\n\n${options[0].name} with ${options[0].votes} votes\n\n${options[1].name} with ${options[1].votes} votes`)
        } else {
            console.log(`And Great Winner Is:\n\n${options[0].name}`)
        }
}

function quit() {
    let res = +prompt(`\nTHANK YOU FOR YOUR PARTICIPATION\n\nPlease Insert:\n\n1. to MAIN MENU\nAny other Key to See Results...`)
    if (res == 1) {
        menu()
    } else {
        results()
    }
}

menu()