let lista = [

    {
        Produto: 'chocolate',
        Valor: 55,
        QTD: 0        
    
    },
    {
        Produto: 'bolacha',
        Valor: 27,
        QTD: 0
    },
    {
        Produto: 'uper',
        Valor: 38,
        QTD: 0
    }

]

    console.log(lista)

    index = 0//+prompt('Escolha um número para comprar: ') - 1

    lista[index].QTD = 5//+prompt('Escolha um número para comprar')

    lista[index].total = lista[index].QTD * lista[index].Valor
    
    console.log(`Você escolheu ${lista[index].Produto},
    ${lista[index].QTD} unidades,
    total: ${lista[index].total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)

    console.log(lista)

    if (lista[index].total >= 100 && lista[index].total <= 400) {
        lista[index].total = lista[index].total * 0.9
    }  //DAR DESCONTO COM O IF E ATUALIZAR NO OBJETO É TRANQUILO

    console.log(`Você escolheu ${lista[index].Produto},
    ${lista[index].QTD} unidades,
    total: ${lista[index].total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)