class Person {

    constructor(name, gender, age) {

        this.name = name
        this.gender = gender
        this.age = age

    }

}

class Friend extends Person {

    constructor(name, gender, age, birthday) {

        super(name, gender, age)

        this.birthday = birthday

    }

}

people = []

let person1 = new Person(

    "Bruno",
    "Male",
    [35, 38, 48]

) 

let person2 = new Person(

    "Elbron",
    "Male",
    [37, 456, 865]

)

people.push(person1)
people.push(person2)

console.log(people) 

console.log(people[0].name)
console.log(people[0].gender)
console.log(people[0].age[0])
people[1].age.shift()
console.log(people[1].age)
console.log(people[1].age[1] + people[1].age[0])

// let person3 = new Person(
    
//     prompt('Please enter a name '),
//     prompt('Please enter Gender '),
//     +prompt('Please enter age: ')    
    
// )

// people.push(person3)

// console.log(people) 

