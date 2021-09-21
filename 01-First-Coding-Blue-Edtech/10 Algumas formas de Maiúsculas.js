//Relembrando concatenação simples

let msg1 = "Olá";
let msg2 = "tudo bem?";

console.log(msg1+", "+msg2);

//.toUpperCase

frase1 = "Vai que vai que vai";

console.log(frase1.toUpperCase());

//.toLowerCase

frase = "Opa lele";
console.log(frase.toLowerCase());
console.log(frase.toUpperCase());

//Comando .slice(0,1) recortando caracteres

console.log(frase.slice(0,1));
console.log(frase.slice(0,3));
console.log(frase.slice(0,5).toUpperCase());
console.log(frase.slice(-4));
console.log(frase.slice(3, -2));
//Espaço conta na contagem

//Maneira cru de fazer a primeira maiúscula

let pergunta = prompt("Digite uma frase\n");

let primeira = pergunta.slice(0,1).toUpperCase();
let restante = pergunta.slice(1).toLowerCase();

console.log(primeira + restante);

//Maneiras com função de fazer Maiúscula

let nome = 'asdasd oiasdoaisd';
console.log(nome[0].toUpperCase()+nome.substr(1));
console.log(nome[0].toUpperCase()+nome.slice(1).toLowerCase());

let asdasd = "ashdashdahsd";
let first = asdasd.slice(0,1).toUpperCase();
let rest = asdasd.slice(1).toLowerCase();
console.log(first + rest);

