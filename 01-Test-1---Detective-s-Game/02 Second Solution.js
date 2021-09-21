let res = ['Innocent', 'Suspect', 'Accomplice', 'Assassin']

let quest = ['Did you know the victim?', 'Have you been nearby when the crime happened?', 'Do you live in the neighborhood?', 'Did you owe the victim?', 'Have you ever worked with the victim?']

let yes = 0

for (i = 0; i < 5; i++) {
  answ = prompt(`${quest[i]}
Please answer Y or N`)
answ = answ.toLowerCase().charAt(0)
if (answ == 'y'){
  yes++
}
}
if (yes == 5) {
  console.log(res[3])
} else if (yes == 3 || yes == 4) {
  console.log(res[2])
} else if (yes == 2) {
  console.log(res[1])
} else {
  console.log(res[0])
}