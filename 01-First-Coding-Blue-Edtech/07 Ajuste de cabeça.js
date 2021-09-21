console.log("Ajuste Salarial 2021")

salario = +prompt("Por gentileza, insira o salário atual: \nR$ ")
percentual = 0
aumento = 0
novo = 0

if (salario <= 280) {
    percentual = 20
}
  else if (salario <= 700) {
    percentual = 15
}
  else if (salario <= 1500) {
    percentual = 10
  }
  else {
    percentual = 5
  }

percentual = percentual / 100

aumento = salario * percentual

novo = salario + aumento

console.log(`
Salário atual é   R$ ${salario}
Faixa de aumento  ${percentual * 100}%
Valor do aumento  R$ ${aumento.toFixed(2)}
Novo Salário      R$ ${novo.toFixed(2)}
`)