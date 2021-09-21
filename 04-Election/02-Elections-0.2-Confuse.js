class VoteOption {
    constructor(id, name, votes) {
        this.id = id
        this.name = name
        this.votes = votes
    }    
}

var options = []; var birthYear = 0; var auth = ''; var vote = null

let nullVote = new VoteOption(0, 'Null Vote ', 0)
let candidate1 = new VoteOption(1, '🐣 🐣 🐣  THE THREE LITTLE BIRDS ', 0)
let candidate2 = new VoteOption(2, '❤ ❤ ❤  CHAPOLIN COLORADO ', 0)
let candidate3 = new VoteOption(3, '🥕 🥕 🥕  BUGS BUNNY ', 0)
let blankVote = new VoteOption(4, '📄 Blank Vote ', 0)
        //CRIAÇÃO E INSERÇÃO DAS OPÇÕES DE VOTO
options.push(nullVote)
options.push(candidate1)
options.push(candidate2)
options.push(candidate3)
options.push(blankVote)


    console.log('\n 🤡 2021 ELECTIONS 🤡\n') 
    birthYear = +prompt('Please Insert Your Birth Year in Format YYYY: ')
    auth = voteAuth(birthYear) //ANO DE NASCIMENTO ENTRA NA FUNÇÃO VOTEAUTH E RETORNA A AUTORIZAÇÃO PARA AUTH
    insertVote = voting(auth) //AUTH É INSERIDA NA FUNÇÃO VOTING E RETORNA O NÚMERO DO VOTO
    options[insertVote].votes++ //NÚMERO DO VOTO É ITERADO DIRETAMENTE AOS OBJETOS EM OPTIONS
    quit() //É EM QUIT() QUE A PESSOA ESCOLHE VOTAR NOVAMENTE OU VER OS RESULTADOS


function voteAuth(birthYear) { //FUNÇÃO DE AUTORIZAÇÃO
    let today = new Date()
    let thisYear = today.getFullYear()
    let age = thisYear - birthYear
    if (age < 16) {
        return 'Denied'
    } else if (age < 18 || age >= 70 && age <= 123) {
        return 'Optional'
    } else if (age > 123) {
        console.log('\n👻👻👻👻👻\n👻👻👻👻 Maybe You are a ghost.\n👻👻👻\n👻👻\n👻 Please come back when you are Alive again')
        quit()
    } else {
        console.log('\nYour vote is Mandatory\n')
        return 'Mandatory'
    }
}

function voting(auth) { //FUNÇÃO DE VOTAÇÃO
    if (auth == 'Denied') {
        console.log(`\nIts nice that you "Want To",✌ 😁\nbut You Are Too Young to Vote.\n\nPlease Come Back when You Are 16\n`)
        quit()
    } else if (auth == 'Optional') {
        console.log(`\nYour vote is Optional.\n\nDo you want to Vote?\nPlease Insert:\n\n1. ✔ Yes I want to Vote.\n2. ❌ Thanks, but No`)
        let res = +prompt('Do you want to Vote?\n\nPlease Insert 1 for YES\nOr Any Other Key for NO')
        if (res == 1) {
            seeOptions() //SE A PESSOA QUISER VOTAR, A FUNÇÃO SEEOPTIONS RETORNA VOTE
            return vote //QUE RETORNA VOTE PARA MENU() KKKK isso ficou uma salada fessor
        } else {
            quit()
        }
    } else {
        seeOptions()
        return vote
    }
}

function seeOptions() {    
    console.log('\nWelcome\n\nThe Options Are:\n')
    for (ii = 0; ii < options.length; ii++) {
        console.log(`${options[ii].id}  >>  ${options[ii].name}\n`)
    }
    vote = +prompt('Insert Number: ')
    if (vote >= options.length || vote < 0) {
        console.log('❌❌ Please insert correct number ❌❌')
        seeOptions()
    } else {
        console.log(`\nYou Choose Option\n${options[vote].id}. ${options[vote].name}`)
        let confirm = +prompt(`\nConfirm?\n1. ✔✔\n2. ❌❌`)    
            if (confirm == 1) {
                return vote
            } else {seeOptions()}
    } 
}

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