


function showText() {

    setTimeout(function() {

        console.log(`Você acorda no que parece ser uma caverna...`)
    }, 1000)

    setTimeout(function() {

        console.log(`Tudo está escuro......`)
    }, 2000)

}

async function segundaFuncao() {
    console.log("INICIOU");
  
    await showText();
  
    console.log("Agora executou isso !!!");
}
  
segundaFuncao();
  
console.log("Agora executou isso !!!");