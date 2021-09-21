const prompt = require('prompt-sync')()

class Character {
    constructor(name, inv, hp, atk) {
        this.name = name
        this.inv = inv
        this.hp = hp
        this.atk = atk
    }
}

class Monster extends Character {
    constructor(name, inv, hp, atk, loot) {
        super (name, inv, hp, atk)
        this.loot = loot
    }
}

var mainChar = new Character('', [], 100, 10); var enemies = [];

let monster1 = new Monster('Minion', [], 40, 5, 'Wooden Stick')
enemies.push(monster1)

let monster2 = new Monster('Minion', [], 50, 7, 'Rags')
enemies.push(monster2)

let monster3 = new Monster('Minion', [], 60, 8, 'Matches')
enemies.push(monster3)

const fase1 = async () => {

    next = prompt('        "Ei, acorde..."    \nPressione qualquer tecla para continuar...')

    await next

    next = prompt('    "Você está bem?"   \nPressione qualquer tecla para continuar...')

    await next

    userName = String(prompt('Insira seu nome: '))
        
    await userName

    mainChar.name = userName

    console.log(`Olá, ${mainChar.name}`)

}
    

fase1()