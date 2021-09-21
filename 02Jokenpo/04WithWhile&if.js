const opt = ['0. 🌑', '1. 📄', '2. ✂']
 			//CONTADORES GLOBAIS
let pontosUser = 0; pontosPc = 0; empates = 0; totalTurnos = 0; partidas = 1;

while (true) { //COMEÇO DE UMA PARTIDA

	while(true) {  	//VERIFICAÇÃO INICIAL

    var turnos = +prompt('J O K E N P O !\nDigite quantas vezes quer perder 🤡 ')

        if (turnos > 0) {     
            break;            
    	} else { 
		console.log('Por favor coloque um número de rodadas maior que 0')
		}
    }		//FIM DA VERIFICAÇÃO INICIAL

		//CONTADORES PARA 1 PARTIDA
	let userPoints = 0; pcPoints = 0; draw = 0;	

	for (i = 1; i <= turnos; i++) {  //INÍCIO DOS TURNOS

		let user = parseInt(prompt(`Por favor digite\n${opt[0]}\n${opt[1]}\n${opt[2]}\n`))

		let pc = Math.floor(Math.random() * opt.length)
		//INÍCIO DA CONTAGEM
		if ((pc == 0 && user == 0) || (pc == 1 && user == 1) || (pc == 2 && user == 2)) {  
			empates++
			draw++          
			totalTurnos++
			console.log(`Lancei ${opt[pc]}\nVocê Lançou ${opt[user]}\nEmpatou!! 😝`)
	} else if ((pc == 0 && user == 1) || (pc == 1 && user == 2) || (pc == 2 && user == 0)) {
			pontosUser++
			userPoints++
			totalTurnos++
			console.log(`Lancei ${opt[pc]}\nVocê Lançou ${opt[user]}\nVc venceu!! 💚`)
	} else if ((pc == 1 && user == 0) || (pc == 0 && user == 2) || (pc == 2 && user == 1)) {
			pontosPc++
			pcPoints++
			totalTurnos++
			console.log(`Lancei ${opt[pc]}\nVocê Lançou ${opt[user]}\nVenci!! 🤩`)
	} else {
			console.log('Vc digitou uma opção inválida')
			i--
	}	//FIM DA CONTAGEM

	}   // FIM DOS TURNOS 

	//RESULTADOS DA PARTIDA ATUAL
	console.log(`
	RESULTADOS DESSA PARTIDA
	Jogamos por ${turnos} vez(es),
	Você fez ${userPoints} ponto(s)
	Eu fiz ${pcPoints} ponto(s)
	E empatamos ${draw} turno(s)
	`)		

	if (userPoints < pcPoints) {
		console.log('Isto quer dizer que eu venci ✌😁')
	} else if (userPoints > pcPoints) {
		console.log('Isto quer dizer que você venceu!! 🙌')
	} else if (userPoints = pcPoints) {
		console.log('Eita! Empatamos! 😂😂😂')
	}

	let again = +prompt('Gostaria de jogar novamente?\nDigite 1 para Sim e Qualquer outra tecla para Sair')

	if (again != 1) {
		break;	//VERIFICAÇÃO DE REPETIÇÃO DE PARTIDA
	}							
	partidas++
}				//FIM DO JOGO

//RESULTADOS GLOBAIS
console.log(`
RESULTADOS

Jogamos por um total de ${totalTurnos} turnos(s),
Em ${partidas} partidas(s)
Você fez: ${pontosUser} ponto(s)
Eu fiz: ${pontosPc} ponto(s)
E empatamos ${empates} turno(s)
`)         

if (pontosUser < pontosPc) {
    console.log('Isto quer dizer que eu venci ✌😁')
} else if (pontosUser > pontosPc) {
    console.log('Isto quer dizer que você venceu!! 🙌')
} else if (pontosUser = pontosPc) {
    console.log('Eita! Empatamos! 😂😂😂')
}