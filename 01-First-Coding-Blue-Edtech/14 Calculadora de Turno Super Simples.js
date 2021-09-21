//Calculadora de dano (sem contador)

let hp = prompt(`Quanto de vida tem o monstro que enfrenta?
Por favor insira um valor entre 10 e 50
`)

let str = prompt(`Quanto de força vc tem no momento?
Por favor insira um valor entre 5 e 10
`)

if (hp >= 10 && hp <= 50 && str >= 5 && str <= 10) {

 turn = hp / str
 console.log(`Você vai vencer em ${Math.ceil(turn)} turnos`)
 
} else {
  console.log("Digite números válidos")
}