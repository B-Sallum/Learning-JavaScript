aleat = Math.floor(Math.random()*11)

resposta = prompt("Será que vc consegue adivinhar um número de 0 a 10?")

console.log(`
Eu pensei em ${aleat}`)
  
if (resposta == aleat) {
  console.log("Vc acertou")
}
else if (resposta > 9) {
  console.log("Vc digitou um número maior")
}
else {
  console.log("Errouuu")
}