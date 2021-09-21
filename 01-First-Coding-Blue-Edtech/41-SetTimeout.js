

var fromFrom = prompt("From:")

var toTo = prompt("To:")

var wriWi = prompt("Write body")

var bigTime = 0

  if (toTo == 'b') {bigTime = 1000}
  else {bigTime = 3000}

function sendEmail(body, from, to) {

    setTimeout(function() {

        console.log(`

        From: ${from}

        -----------------------------------
        
        To: ${to}

        -----------------------------------

        ${body}

        
        
        
        `)
    }, bigTime)
}

console.log(`Let's write via terminal`)

sendEmail(wriWi, fromFrom, toTo)