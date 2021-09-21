const prompt = require('prompt-sync')();

class VoteOption {
    constructor(id, name, votes) {
        this.id = id
        this.name = name
        this.votes = votes
    }    
}

var options = []; var birthYear = 0; var auth = ''; var userVote = 0; var userOpt = 0;

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

function menu() {
    console.log('\n 🤡 2021 ELECTIONS 🤡\n') 
    birthYear = +prompt('Please Insert Your Birth Year in Format YYYY: ')
    auth = voteAuth(birthYear)
    userVote = seeOptions()
    voting(auth, userVote)
}

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

function seeOptions() {    
    console.log('\nWelcome\n\nThe Options Are:\n')
    for (ii = 0; ii < options.length; ii++) {
        console.log(`${options[ii].id}  >>  ${options[ii].name}\n`)
    }
    userOpt = +prompt('Insert Number: ')
    if (userOpt < options.length && userOpt >= 0) {
        console.log(`\nYou Choose Option\n${options[userOpt].id}. ${options[userOpt].name}`)
        let confirm = +prompt('Confirm?    1. ✔✔    2. ❌❌')    
            if (confirm == 1) {
                return userOpt
            } else {menu()}
    } else {
        console.log('❌❌ Please insert correct number ❌❌')
        menu()
    } 
}

function voting(auth, userVote) {
    if (auth == 'Denied') {
        console.log('\nIts nice that you "Want To",✌ 😁\nbut You Are Too Young to Vote.\n\nPlease Come Back when You Are 16\n')
        quit()
    } else if (auth == 'Optional') {
        console.log('Do you want to Register your Vote?')
        let res = +prompt('      1. ✔✔        Any Other Key ❌❌')
        if (res == 1) {
            options[userVote].votes++
            quit()
        } else {
            quit()
        }
    } else if (auth == 'Mandatory') {
        options[userVote].votes++
        quit()
    }
}

function results() {
    console.log('And Here is The Results:')
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
            console.log('\nThere was a tie\n\nThere Will Be a Second Round of Elections between:')

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

// Receber votos até que o usuário diga que não tem mais ninguém para votar; (1,0 ponto)
// Ter uma função chamada autorizaVoto(anoNascimento) retornando: "Negado`, "Opcional"  ou "Obrigatório"; (2,0 pontos)
// Ter uma função chamada votacao(autorizacao, voto) que valida  e contabiliza o voto (número entre 1 e 5) ou retorna a mensagem: "Você não pode votar", caso o voto não possa ser contabilizado; (2,0 pontos) 
// Contabilizar os votos de acordo com os significados (3,0 pontos):
// 1 = Candidato 1
// 2 = Candidato 2
// 3 = Candidato 3
// 4 = Voto Nulo`
// 5 = Voto em Branco
// Ter uma função chamada exibirResultados() que deve mostrar: (2,0 pontos)
//  - O total de votos para cada candidato 
//  - O total de votos nulos
//  - O total de votos em branco
//  - Qual candidato venceu a votação