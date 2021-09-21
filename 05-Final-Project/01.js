// var texts = ['First Phrase', 'Second', 'Third', 'Fourth']


// async function primeiraFuncao() {

//      setTimeout(function() {

//       console.log(`

//       ${texts}        
        
//         `)

//     }, 1000)
  
// }

// async function segundaFuncao() {
//   console.log("INICIOU");

//   await primeiraFuncao();

//   console.log("Agora executou isso !!!");
// }

// segundaFuncao();

function primeiraFuncao() {
  console.log("Esperou isso");
}

async function segundaFuncao() {
  console.log("INICIOU");

  await primeiraFuncao();

  console.log("Agora executou isso !!!");
}

segundaFuncao();
