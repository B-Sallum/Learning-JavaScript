const lista = [];

let rodadas = 1//prompt("quantas rodadas?");

for(var i = 0; i < rodadas; i++){
const objetos = {}

objetos.nome = 'bruno' //prompt("digite seu nome");
objetos.idade = 15//prompt ("digite sua idade")
objetos.escola = 'marillac'//prompt("digite sua escola")

lista.push(objetos)
}
console.log (lista)

let breja = {produto:"skol", preço:50, }

breja.quantidade = 4//prompt("Digite a quantidade que quer comprar: ");

breja.total = breja.quantidade * breja.preço;


console.log(breja)