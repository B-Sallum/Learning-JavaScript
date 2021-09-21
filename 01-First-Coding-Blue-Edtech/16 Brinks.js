let a = [-1,0,1,2,3,4,45,78,1000]

let b = +prompt("Digite um número")

let entrada = a.indexOf(b)

console.log(entrada + b)

if (b === a[entrada]) {
  console.log("O número existe")
} else {
  console.log("Não existe")
}
