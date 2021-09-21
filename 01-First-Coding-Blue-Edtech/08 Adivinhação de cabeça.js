//Generating a random number between 10

random = Math.floor(Math.random()*11)

//This is a poor type of random
//Because the 10th is only 1% chance instead of 10%

answer = +prompt(`Jogo de Adivinhação
Será que vc consegue acertar
o número que estou pensando?

Diga um número entre 0 e 10:
`)

if (answer == random) {
  console.log(`
  ACERTOU 👌
  Pensei em ${random} mesmo!
  `)
}

else {
  console.log(`
  Pensei em ${random}, vc errou!
  Tente novamente!
  `)
}