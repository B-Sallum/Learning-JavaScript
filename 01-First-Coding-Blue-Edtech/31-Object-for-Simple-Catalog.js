const prompt = require('prompt-sync')();

var filme1 = {
    nome: "Jurassic Park",
    duracao: "110 min",
    ano: 1993,
    diretor: "Steven Spielberg",
    atores: ["T-rex","Diplodocus","Velociraptor"],
    dados: function(){
        return `O filme ${this.nome} tem ${this.duracao}, foi lançado em ${this.ano}, dirigido por ${this.diretor}, contando com a participação de ${this.atores} e grande elenco!`
    }
}

var filme2 = {
    nome: "Matrix",
    duracao: "127 min",
    ano: 1999,
    diretor: "Wachowsky brothers",
    atores: ["Keanu Reeves","Lawrence Fishburne","Carry Anne Moss"],
    dados: function(){
        return `O filme ${this.nome} tem ${this.duracao}, foi lançado em ${this.ano}, \n
        dirigido por ${this.diretor}, contando com a participação de \n
        ${this.atores} e grande elenco!`
    }
}

var filme3 = {
    nome: "Madrugada muito louca",
    duracao: "135 min",
    ano: 2006,
    diretor: "Pedro Henrique",
    atores: ["Hudson","Gabriel","Lorenzo","Frederico"],
    dados: function(){
        return `O filme ${this.nome} tem ${this.duracao}, foi lançado em ${this.ano}, \n
        dirigido por ${this.diretor}, contando com a participação de \n
        ${this.atores} e grande elenco!`
    }
}

var filme4 = {
    nome: "Filme do Pelé",
    duracao: "90 min",
    ano: 1970,
    diretor: "Pelé!",
    atores: ["Pelé","Maradona"],
    dados: function(){
        return `O filme ${this.nome} tem ${this.duracao}, foi lançado em ${this.ano}, \ndirigido por ${this.diretor}, contando com a participação de \n${this.atores} e grande elenco!`
    }
}

var filme5 = {
    nome: "As tranças do Rei careca",
    duracao: "120 min",
    ano: 2021,
    diretor: "Guilherme",
    atores: ["Ivan","Lorenzo","Soren"],
    dados: function(){
        return `O filme ${this.nome} tem ${this.duracao}, foi lançado em ${this.ano}, dirigido por ${this.diretor}, contando com a participação de ${this.atores} e grande elenco!`
    }
}


// console.log(filme1.dados());
// console.log();
// console.log(filme2.dados());
// console.log();
// console.log(filme3.dados());
// console.log();
// console.log(filme4.dados());
// console.log();
// console.log(filme5.dados());

var catalogo = [filme1, filme2, filme3, filme4, filme5];

for (let i of catalogo){
    console.log(i.dados());
}