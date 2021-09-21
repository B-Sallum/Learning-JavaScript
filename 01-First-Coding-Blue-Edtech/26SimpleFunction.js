function comparar(x, y) {
    if (x == y) {
        console.log('Os números são idênticos')
    } else if (x < y) {
        console.log('O menor é ' + x)
    } else if (x > y) {
        console.log('O menor é ' + y)
    } else {
        console.log('Talvez vc não tenha digitado números')
    }
}

let xx = +prompt('Insira o primeiro número ')

let yy = +prompt('Insira o segundo número ')

comparar(xx, yy)