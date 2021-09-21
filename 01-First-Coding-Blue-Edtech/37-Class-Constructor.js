//Simulador de dados de um Cassino: A ideia é simularmos o funcionamento de dados de um Cassino Clandestino: criaremos diferentes tipos de dados e de Forma Aleatória

// EXEMPLO : CELULAR
//CLASSES => "Fábrica de Objetos"
// Atributos => Características dos meus objetos (marca, peso, cor, tamanho...)
//Métodos => "Ações" (enviar mensagem, fazer chamada, abrir facebook....)

//Como boa prática, as classes iniciam com letra maiúscula

class Dado {

    //Dentro do método construtor, eu coloco os atributos do meu objeto

    constructor(faces, cor, nome) {
            //faces = número de lados de cada dado
        this.faces = faces; //Auto referência

    }

    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    Rolar() {

        console.log(
            "Resultado do dado " + this.getRandomIntInclusive(1, this.faces)
        )

    }

}









a = Math.floor(Math.random() * 6) + 1

console.log(a)

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

b = getRandomIntInclusive(1, 6)

console.log(b)