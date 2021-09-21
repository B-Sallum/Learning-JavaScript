saque = +prompt(`Caixa Eletrônico do Haha

Notas disponíveis:
1, 2, 5, 10, 20, 50 e 100

Diz aí, quanto vc precisa?
(Entre R$10 e R$500)
R$ `)

if (saque >= 10 && saque <= 500 && saque % 1 === 0) {

 nota100 = parseInt(saque / 100); saque = saque % 100
 nota50 = parseInt(saque / 50); saque = saque % 50
 nota20 = parseInt(saque / 20); saque = saque % 20
 nota10 = parseInt(saque / 10); saque = saque % 10
 nota5 = parseInt(saque / 5); saque = saque % 5
 nota2 = parseInt(saque / 2); saque = saque % 2
 nota1 = parseInt(saque / 1)

console.log(`Vc receberá
${nota100} nota(s) de 100
${nota50} nota(s) de 50
${nota20} nota(s) de 20
${nota10} nota(s) de 10
${nota5} nota(s) de 5
${nota2} nota(s) de 2
${nota1} nota(s) de 1`)

} else {
  console.log("Digite um número inteiro entre 10 e 500")
}