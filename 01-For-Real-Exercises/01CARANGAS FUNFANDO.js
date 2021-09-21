var carros = []

var compras = []

var total = 0

console.log('Olá! A sua pessoa é Bem-Vinda ✌🙂\n')

menu()

function menu() {

    //TRECHO SEM INDENTAÇÃO PARA MELHOR VISUALIZAÇÃO DA FORMATAÇÃO
let escolha = prompt(`C A D A S T R O  C A R A N G A S  2 0 2 1
🏎🏎🏎🏎🏎🏎🏎🏎🏎🏎🏎🏎🏎🏎🏎🏎🏎🏎🏎🏎🏎🏎🏎
Por favor insira:
1. Para Adicionar um veículo

Qualquer outra tecla Para visualizar a lista e Comprar 🤑
`)

    if (escolha == 1) {
        adicionar()
    } else if (carros.length == 0) {
        console.log('Desculpe! Nossa Garagem está Vazia\nRetornando ao Menu...')
        menu()
    } else {
        comprar()
    }

}  //END MENU()

function adicionar() {

    num = carros.length + 1

    mod = prompt(`${num}. Modelo: `)

    mar = prompt(`${num}. Modelo: ${mod} Marca: `)

        while (true) {           //INSERÇÃO DE VALOR COM VALIDAÇÃO DE NÚMERO
        val = +prompt(`${num}. Modelo: ${mod} Marca: ${mar} Valor: `)
        if (val > 0) {
            break
        } else {
        console.log('Por favor digite um número válido')
        }
    }                           //END VALIDAÇÃO

    confirma = +prompt(`\n${num}. ${mod} ${mar} ${val}\n\nOs Dados estão corretos? Digite 1. para SIM\nou Qualquer Outra para Inserir Novamente!\n`)
        if (confirma !== 1) {
            adicionar()               //CONFIRMAÇÃO DOS DADOS 
        } else {                    //CASO PRECISE CORRIGIR, ADICIONAR() SERÁ ACIONADO NOVAMENTE
            carros.push({ID: num, Modelo: mod, Marca: mar, Valor: val})
            console.log(`\n${num}. ${mod} ${mar} ${val} adicionado com sucesso!`)
        }

    menu()

}   //END ADICIONAR()

function comprar() {

    console.log('P R E P A R E  S U A  G A R A G E M\n\nCOLEÇÃO DISPONÍVEL\n')

        for (i = 0; i < carros.length; i++) {  //MOSTRANDO COLEÇÃO

        const {ID, Modelo, Marca, Valor} = carros[i]

        console.log(ID, Modelo, Marca, Valor)

        }

        if (compras.length > 0) { //MOSTRANDO COMPRA ATUAL CASO SEJA > 0

            console.log('Você já tem em sua garagem:\n')

            for (e = 0; e < compras.length; e++) {

            const {ID, Modelo, Marca, Valor} = compras[e]
        
            console.log(ID, Modelo, Marca, Valor)

            }

        } else {}    //SE COMPRAS = 0 = MOSTRA NADA

    let add = parseInt(prompt('\nPor favor digite o ID\npara Adicionar à sua Garagem')) - 1

        if (add >= 0 && add < carros.length) { //VALIDAÇÃO DE OPÇÃO

            const {ID, Modelo, Marca, Valor} = carros[add]
            
            let yes = prompt(`Você selecionou --> ${ID} ${Modelo} ${Marca} ${Valor}\n\nDigite 1. para confirmar`)

                if (yes == 1) { //CONFIRMAÇÃO DA OPÇÃO

                    compras.push(carros[add]) //AQUI CARROS[ADD] ADICIONA CORRETAMENTE

                    if (compras.length < 3) {

                        addCompras = prompt('\nÓtima escolha!\n\nDigite 1. para Adicionar\nQualquer outra Tecla para Finalizar a Compra...')

                            if (addCompras == 1) {
                                comprar()
                            } else {
                                console.log('Vamos ao TOTAL')
                                finalizar()
                            }

                    } else {
                        console.log('Você já tem 3 carros em sua Garagem,\nAgora vamos ao Total')
                        finalizar()
                    }

                } else {
                    console.log('Retornando à COLEÇÃO...')
                    comprar()
                }                

        } else {
            console.log('Por favor digite um ID válido')
            comprar()
        }    

}   //END COMPRAR()

function finalizar() {

    console.log(`\nVocê escolheu os seguintes carros:`)

    for (i = 0; i < compras.length; i++) {

        const {ID, Modelo, Marca, Valor} = compras[i]

        console.log(ID, Modelo, Marca, Valor)

    }

    for (i = 0; i < compras.length; i++) {

        const {Valor} = compras[i]
        
        total = total + Valor

    }

    var f = total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    
    console.log(`O valor Total é: ${f}`)

}