let a = 11 ///SOLUÇÃO 1

let b = -1

function contador() {
    a--
    b++
}

for (i = 0; i <= 10; i++) {
    contador()
    console.log(`${a} - ${b}`)
}



let a = 10   ///SOLUÇÃO 2

for (i = 0; i <= 10; i++) {
    console.log(`${i} - ${a - i}`)
}



let a = 11      ///SOLUÇÃO 3

let b = -1

for (i = 0; i <= 10; i++) {
    a--
    b++
    console.log(`${a} - ${b}`)
}