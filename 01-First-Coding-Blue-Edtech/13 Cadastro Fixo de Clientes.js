//A simple program that shows a few options and enable to choose and show the option chosen

const opt1 = '01. Ana'
const opt2 = '02. Julia'
const opt3 = '03. Hermione'

console.log(opt = prompt(`Cadastro Fixo de Clientes 2021
Da lista abaixo, digite 1 opção para mostrar Detalhes
${opt1}
${opt2}
${opt3}`))

if (opt == 1 || opt == 01) {
  console.log(`Você escolheu a opção
  ${opt1}`)

} else if (opt == 2 || opt == 02) {
  console.log(`Você escolheu a opção
  ${opt2}`)

} else if (opt == 3 || opt == 03) {
  console.log(`Você escolheu a opção
  ${opt3}`)

} else {console.log("Por favor escolha uma opção válida")}
