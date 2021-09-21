//Simple % Tip Calculator

let bill = +prompt("Quanto deu a conta?")

let tip = +prompt("Qual a porcentagem da gorjeta?")

total = bill * (tip / 100 + 1)

if (bill > 0) {
  
console.log(`Humm comeu bem hein :)
O total com gorjeta é
R$ ${total.toFixed(2)}
${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
  `)

} else {
  console.log("Por favor digite um Valor em números")
}