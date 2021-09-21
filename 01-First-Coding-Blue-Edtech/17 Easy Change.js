let total = +prompt("Insira o Total da Compra R$")

let valor = +prompt("Insira o valor Pago R$")

let troco = valor - total

console.log("Troco: R$" + troco.toFixed(2))