let res = ['Innocent', 'Innocent', 'Suspect', 'Accomplice', 'Accomplice', 'Assassin']
let quest = ['Did you know the victim?', 'Have you been nearby when the crime happened?', 'Do you live in the neighborhood?', 'Did you owe the victim?', 'Have you ever worked with the victim?']

let yes = 0

for (i = 0; i < 5; i++) {
  answ = String(prompt(`${quest[i]}
Please answer Yes or No`).toLowerCase().charAt(0))

if (answ == 'y') {
   yes++
} else if (answ !== 'n') {
  console.log("Please Insert Yes or No")
  i--
} //I would need a "doAgain" here
} 
console.log(res[yes])

//In this case, the code is concise and simple
//But the array has repeated values... :(