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

var mainChar = new Character('', [], 50, 10); var enemies = [];

let monster1 = new Monster('Minion', [], 105, 5, 'Wooden Stick')
enemies.push(monster1)

let monster2 = new Monster('Minion', [], 200, 6, 'Rags')
enemies.push(monster2)

let monster3 = new Monster('Minion', [], 300, 7, 'Matches')
enemies.push(monster3)

function sleep(delay) {
    var start = new Date().getTime()
    while (new Date().getTime() < start + delay) {true}
}

function primeiraParte() {

    mainChar.hp = 50; enemies[0].hp = 105; enemies[1].hp = 200; enemies[2].hp = 300

    prompt('                 "Ei, acorde..."    \nPressione Enter para continuar...')

    prompt('            "Você apagou durante horas..."   \nPressione Enter...')

    prompt('        (Você vê um ponto de luz voando...)')

    while (true) {    
        console.log('                               Você está bem....?')
        console.log('           1 - Sim, mas não enxergo nada')                    
        res = +prompt('           2 - Não, e não enxergo nada! > ')
        if (res == 1 || res == 2) {break}
    }

    while (true) {

        if (res == 1) {
            console.log('       Que bom que está bem')
            userName = String(prompt('      Me diga seu nome: '))
            if (userName !== '') {break}
                            
        } else if (res == 2) {
            console.log('       Vou te ajudar')
            userName = String(prompt('   Vc se lembra do seu nome? '))
            if (userName !== '') {break}
            
        } else {
            console.log('    Estou tentando te ajudar...')
            userName = String(prompt('       Me diga o seu nome... '))
            if (userName !== '') {break}
        }      
    }
    
    mainChar.name = userName

    setTimeout(function(){
        console.log(`               Olá, ${mainChar.name}  `)        
    }, 2000) 

    setTimeout(function() {
        console.log('                 🧚‍♀️  ')
        console.log('           Eu Sou Fairy   ')
    }, 4000)
    
    setTimeout(function(){
        segundaParte()
    }, 6000)
}

function segundaParte () {
      
    prompt('        Você deve estar com fome\nVenha, sei onde tem alguma comida pra você...')

    prompt('        \nPegue estes cogumelos. Não são venenosos')

    prompt(`        Sua saúde no momento é ${mainChar.hp}  `)

    console.log('           \nO que você deseja fazer?')
    console.log('                   Confiar na Fairy ou comer os outros cogumelos? \n')
    console.log('           1 - Fairy me parece de confiança')
    eat = prompt('          2 - Ela me parece DUMAL, vou comer os outros! > ')

    if (eat == 1) {

        mush = 60

        mainChar.hp = mainChar.hp + mush

        prompt(`       Agora sua saúde é ${mainChar.hp} `)

        terceiraParte()

    } else {

        prompt('Não é a primeira vez que vc come esses cogumelos venenosos...')
        
        prompt('                                    Vai dormir novamente...')

        prompt('                                        Confie na sua Luz!')

        primeiraParte()

    }    
}

async function terceiraParte() {

    prompt('(Falta história) Vc pisou em uma armadilha!')

    prompt('Acho que vc vai cair!!')

    index = 0

    while (index < 9) {
        console.log('.'); sleep(25)
        console.log(' .'); sleep(25)
        console.log('  .'); sleep(25)
        console.log('   .'); sleep(25)
        console.log('    .'); sleep(25)
        console.log('     .'); sleep(25)
        console.log('    .'); sleep(25)
        console.log('   .'); sleep(25)
        console.log('  .'); sleep(25)
        console.log(' .'); sleep(25)
        index++
    }

    prompt('CATAPLUFT 😂    Se lascou mas não quebrou nada!!')

    quartaParte()
}

function quartaParte() {

    prompt('Com a Luz de Fairy, Vc encontrou um esqueleto (Enter para Continuar...')
    prompt('Parece ser o de um guerreiro azarado que preferiu não comer cogumelo algum')
    console.log('Deseja checar por itens? ')
    console.log('1 - Sim ')
    checkLoot = +prompt('2 - Agora não > (FESSOR, COMEÇA ESCOLHENDO 2!!) ')

    if (checkLoot == 1) {
        console.log('Tinha uma espada embaixo dos ossos!!')

        let espatinha = 30

        mainChar.atk = mainChar.atk + espatinha

        prompt(`Agora seu ataque é ${mainChar.atk}`)

        quintaParte()
    } else if (checkLoot == 2) {
        quintaParte()
    }
}

function quintaParte() {

    console.log('Vc encontrou monstros, BORA BATALHAR')

    while (true) {

        enemies[0].hp = enemies[0].hp - mainChar.atk

        console.log(`Vc atacou causando ${mainChar.atk} de dano. HP do monstro > ${enemies[0].hp}`)

        sleep(300)

        mainChar.hp = mainChar.hp - enemies[0].atk

        console.log(`O monstro te atacou causando ${enemies[0].atk} de dano. Seu HP > ${mainChar.hp}`)

        sleep(300)

        if (enemies[0].hp <= 0) {
            console.log('                               VOCÊ VENCEU')
            console.log('                   E encontrou um pedaço de madeira')
            let stick = 'Wooden Stick'
            mainChar.inv.push(stick)            
            break

        } else if (mainChar.hp <= 0) {
            console.log('                           XII TU MORREU 😂😂😂  Retornando...')
            break
        }

    }
    if (mainChar.hp <= 0) {
        primeiraParte()
    }
    else if (enemies[0].hp <= 0) {
        prompt(`Sua saúde é ${mainChar.hp} e seu inventário contém ${mainChar.inv}`)
        sextaParte()
    }
}

function sextaParte() {

    console.log('Vc encontrou monstros, BORA BATALHAR')

    while (true) {

        enemies[1].hp = enemies[1].hp - mainChar.atk

        console.log(`Vc atacou causando ${mainChar.atk} de dano. HP do monstro > ${enemies[1].hp}`)

        sleep(300)

        mainChar.hp = mainChar.hp - enemies[1].atk

        console.log(`O monstro te atacou causando ${enemies[1].atk} de dano. Seu HP > ${mainChar.hp}`)

        sleep(300)

        if (enemies[1].hp <= 0) {
            console.log('                               VOCÊ VENCEU')
            console.log('                   E encontrou FÓSFOROS')
            let matches = 'Matches'
            mainChar.inv.push(matches)          
            break

        } else if (mainChar.hp <= 0) {
            console.log('                           XII TU MORREU 😂😂😂  Retornando...')
            break
        }

    }
    if (mainChar.hp <= 0) {
        primeiraParte()
    }
    else if (enemies[1].hp <= 0) {
        prompt(`Sua saúde é ${mainChar.hp} e seu inventário contém ${mainChar.inv}`)
        setimaParte()
    }

}

function setimaParte() {

    console.log('Vc encontrou monstros, BORA BATALHAR')

    while (true) {

        enemies[2].hp = enemies[2].hp - mainChar.atk

        console.log(`Vc atacou causando ${mainChar.atk} de dano. HP do monstro > ${enemies[2].hp}`)

        sleep(300)

        mainChar.hp = mainChar.hp - enemies[2].atk

        console.log(`O monstro te atacou causando ${enemies[2].atk} de dano. Seu HP > ${mainChar.hp}`)

        sleep(300)

        if (enemies[2].hp <= 0) {
            console.log('                               VOCÊ VENCEU')
            console.log('                   E encontrou TRAPOS')
            let rags = 'Rags'
            mainChar.inv.push(rags)          
            break

        } else if (mainChar.hp <= 0) {
            console.log('                           XII TU MORREU 😂😂😂  Retornando...')
            break
        }

    }
    if (mainChar.hp <= 0) {
        primeiraParte()
    }
    else if (enemies[2].hp <= 0) {
        prompt(`Sua saúde é ${mainChar.hp} e seu inventário contém ${mainChar.inv}`)
        oitavaParte()
    }

    console.log(mainChar)
}

function oitavaParte() {


    prompt('Vc tem em seu inventário')

    prompt('O suficiente para fazer uma tocha')

    prompt('Pressione Enter para produzir uma tocha')

    prompt('Produzindo tocha...')

    if (mainChar.inv.includes('Wooden Stick') && mainChar.inv.includes('Matches') && mainChar.inv.includes('Rags')) {
        let torch = 'Torch'
        mainChar.inv.push(torch)
        mainChar.inv.shift()
        mainChar.inv.shift()
        mainChar.inv.shift()
        
    } else {}

    console.log(`Agora vc tem em seu inventário ${mainChar.inv}`)
}

primeiraParte()

