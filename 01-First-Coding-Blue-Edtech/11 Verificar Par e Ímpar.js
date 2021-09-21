//Confirmar se um número é um número
//Confirmar se é Par ou Ímpar
//Jeito simples

let numero = parseFloat(prompt("Digite um número para confirmar se é Par ou Ímpar\n")).toFixed(0) //OU parseInt no lugar de parseFloat

if (numero % 2 === 0) {
  console.log("Este número é par")
}  
else if (numero % 2 === 1) {
    console.log("Este número é ímpar")
}  
else {
    console.log("Talvez vc não tenha digitado um número")
}