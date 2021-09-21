const prompt = require('prompt-sync')();

let nomes = [];

adicionar();

function adicionar() {

nomes.push(String(prompt("Adicione um nome: ")))

let add = prompt("Gostaria de adicionar mais nomes?\nDigite S ou N")
    if (add == 'S') {
        adicionar()
    } else {}
}

for (let nome of nomes) {
    console.log(`Nome: ${nome}`)
}

let count = 0

for (let i of nomes) {
    var novo = prompt(`Digite um novo nome para ${i}: `)
    nomes.splice(count,1, novo)
    count++
}

for (let nome of nomes) {
    console.log(`Nome: ${nome}`)
}