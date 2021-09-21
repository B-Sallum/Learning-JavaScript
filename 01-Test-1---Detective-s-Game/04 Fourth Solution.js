let yes = 0

let wrong = "Please answer Yes or No. Anything different we'll consider as a Yes"

let res1 = String(prompt("Did you call the victim?\nYes or No: ")).toLowerCase().charAt(0)

if (res1 == 'y') {
  yes++
} else if (res1 !== 'n') {
  console.log(wrong)
  yes++
}

let res2 = String(prompt("Have you been nearby?\nYes or No: ")).toLowerCase().charAt(0)

if (res2 == 'y') {
  yes++
} else if (res2 !== 'n') {
  console.log(wrong)
  yes++
}

let res3 = String(prompt("Have you been nearby?\nYes or No: ")).toLowerCase().charAt(0)

if (res3 == 'y') {
  yes++
} 
else if (res3 !== 'n') {
  console.log(wrong)
  yes++
}

let res4 = String(prompt("Did you owe the victim?\nYes or No: ")).toLowerCase().charAt(0)

if (res4 == 'y') {
  yes++
} 
else if (res4 !== 'n') {
  console.log(wrong)
  yes++
}

let res5 = String(prompt("Have you ever worked with the victim?\nYes or No: ")).toLowerCase().charAt(0)

if (res5 == 'y') {
  yes++
} 
else if (res5 !== 'n') {
  console.log(wrong)
  yes++
}

if (yes === 0 || yes === 1) {
  console.log("Innocent")
} else if (yes === 2) {
  console.log("Suspect")
} else if (yes === 3 || yes === 4) {
  console.log("Accomplice")
} else if (yes === 5) {
  console.log("Assassin")
} else {
  console.log('You filled something wrong, please restart')
  }