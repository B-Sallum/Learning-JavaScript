var filmes = []

function criar() {

        let nome = prompt('Nome do filme: ')

        let dur = +prompt('Duração: ')

        let act = prompt('Elenco principal: ')

    filmes.push({Nome: nome, Duracao: dur, Elenco: act})

    let adicionar = prompt('Gostaria de adicionar mais?\n1. Sim\n2. Não')

    if (adicionar == 1) {
        criar()
    } else {}

}



console.log(filmes)