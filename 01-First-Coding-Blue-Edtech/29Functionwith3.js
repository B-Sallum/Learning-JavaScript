function somenor(x, y, z) {
    if ((x + y) > z) {
        return true
    } else {
        return false
    }
}

let a = +prompt('Insira primeiro número ')

let b = +prompt('Insira segundo número ')

let c = +prompt('Insira parâmetro de soma maior que ')

somenor(a, b, c)