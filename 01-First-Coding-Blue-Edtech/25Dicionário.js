const produtos = [
    {descrição: "coca", valor: 9, quantidade: 10},
    {descrição: "toddynho", valor: 3.5, quantidade: 5},
    {descrição: "doritos", valor: 2, quantidade: 2}
]

let total = 0
let index = 0

while (index < produtos.length) {

    const {valor, quantidade} = produtos[index]

    total = total + valor * quantidade

    index++

}

console.log(total)