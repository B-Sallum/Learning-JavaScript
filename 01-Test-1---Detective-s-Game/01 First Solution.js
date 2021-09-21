/*Detective's Game
Insert 5 questions
1) Did you call the victim?
2) Have you been nearby the crime?
3) Do you live in the neighborhood?
4) Did you owe the victim?
5) Have you ever worked with the victim?
Return:
Assassin = if 5 yes
Accomplice = if 3 or 4 yes
Suspect = if 2 yes
Innocent else*/

function test(a1) {
  if (a1 == 'y' || a1 == 'Y') {
    yes++;
  } else {}
}

yes = 0

let p1 = test(prompt("1) Did you call the victim? (Y/N)"))
let p2 = test(prompt("2) Have you been nearby the crime? (Y/N)"))
let p3 = test(prompt("3) Do you live in the neighborhood? (Y/N)"))
let p4 = test(prompt("4) Did you owe the victim? (Y/N)"))
let p5 = test(prompt("5) Have you ever worked with the victim? (Y/N)"))

if (yes <= 1) {
  console.log("Innocent")
}
else if (yes == 2) {
  console.log("Suspect")
}
else if (yes == 3 || yes == 4) {
  console.log("Accompplice")
}
else {
  console.log("Assassin")
}