let itens = [];
let valor = [];
let qtd = [];

while (true) {

    item = prompt('Por favor insira o nome de um item')

    itens.push(item)

    valorUn = +prompt('Qual o valor deste item')

    valor.push(valorUn)

    quantidade = +prompt('A quantidade deste item')

    qtd.push(parseFloat(quantidade))

    var add = +prompt('Gostaria de adicionar mais? 1 para Sim')

    if (add != 1) {
        break
    }

}

index = 0

while (index < itens.length) {

console.log(`QTD  ${qtd[index]} ${itens[index]}  R$${valor[index]}`)

index++

}

somando = 0
total = 0

while (somando < valor.length) {
  total = total + (valor[somando] * qtd[somando])
  somando++
}

console.log(`O total é R$${total}`)