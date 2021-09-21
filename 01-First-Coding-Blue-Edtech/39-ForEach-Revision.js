// O for each é um método utilizado sob uma lista, logo ao ao usarmos o for each devemos usar também uma função

let numberList = [54, 235, 155, 43, 46, 47, 52, 8, 4, 5]

let numberEven = []; numberOdd = []; testArray = []

function verifyEven(element) {

    if (element % 2 == 0) {

        console.log(`Number ${element} is Even`)
        numberEven.push(element)

    } else {
        console.log(`Number ${element} is Odd`)
        numberOdd.push(element)
    }

}

numberList.forEach(verifyEven)

console.log(numberList)

console.log(numberEven)

console.log(numberOdd)

console.log(testArray)

let numbers = [1,2,3,4,5,6,7,8,9,10]

function tabuada(item) {

    console.log(item*2)

}

numbers.forEach(tabuada)

let num = [0,1,2,3,4,5,6,7,8,9,10];

function tab(num){
console.log(num * 5);
};
num.forEach(tab);