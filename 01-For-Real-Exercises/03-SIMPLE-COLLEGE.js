class GraduateCourse {
    constructor(courseID, courseName, courseValue) {
        this.courseID = courseID
        this.courseName = courseName
        this.courseValue = courseValue
    }
}
class PostGraduateCourse extends GraduateCourse {
    constructor(courseID, courseName, courseValue) {
        super(courseID, courseName, courseValue)
    }
}
class GraduationStudent {
    constructor(regID, name, birthday, courseID, chargePercentage) {
        this.regID = regID
        this.name = name
        this.birthday = birthday
        this.courseID = courseID
        this.chargePercentage = chargePercentage
    }
}
class PostGraduationStudent extends GraduationStudent {
    constructor(regID, name, birthday, courseID, chargePercentage, researchLine, advisor, scholarship) {
        super(regID, name, birthday, courseID, chargePercentage)
        this.researchLine = researchLine
        this.advisor = advisor
        this.scholarship = scholarship
    }
}

function addTestingValues() {
    let course1 = new GraduateCourse(1, 'Architecture', 450)
    let course2 = new GraduateCourse(2, 'Computer Science', 650)
    let course3 = new GraduateCourse(3, 'Engineering', 850)
    let course4 = new GraduateCourse(4, 'Biomedicine', 750)
    
    dbGraduate.push(course1)
    dbGraduate.push(course2)
    dbGraduate.push(course3)
    dbGraduate.push(course4)



    let choose = 4//+prompt(`Please Insert Course ID:\n`) -1

    let gradStudent = new GraduationStudent(
        1,
        'Bluemer',
        '30/02/2000',
        dbGraduate[choose],
        1.0
    )

    dbGradStudents.push(gradStudent)
    gradStudent


    let choose1 = 4//+prompt(`Please Insert Course ID:\n`) -1

    let postStudent = new PostGraduationStudent(
        2,
        'Post Bluemer',
        '30/02/1995',
        dbPostGraduate[choose1],
        1.0,
        'Research Line',
        'Gustavo',
        'Scholarship'
    )

    dbPostGradStudents.push(postStudent)
}
var fs = require('fs');
dbGraduate = []; dbPostGraduate = []; dbGradStudents = []; dbPostGradStudents = []

addTestingValues()

let postGradCourse1 = new PostGraduateCourse(1, 'Exact Sciences', 1200)
let postGradCourse2 = new PostGraduateCourse(2, 'Human Sciences', 1600)
let postGradCourse3 = new PostGraduateCourse(3, 'Education', 2000)
let postGradCourse4 = new PostGraduateCourse(4, 'Tecnology Inovation', 3400)

dbPostGraduate.push(postGradCourse1)
dbPostGraduate.push(postGradCourse2)
dbPostGraduate.push(postGradCourse3)
dbPostGraduate.push(postGradCourse4)

// var json = JSON.stringify(postGradCourse1);
   
// fs.writeFile('./students.json', json,{enconding:'utf-8',flag: 'a'}, function (err) {
//     if (err) throw err;
//     console.log('Arquivo salvo!');
// });


let userChoose

    for (t = 0; t < dbGraduate.length; t++) {

        console.log(`${dbGraduate[t].courseID}. ${dbGraduate[t].courseName} Course Value: ${dbGraduate[t].courseValue}`)

    }





    for (u = 0; u < dbPostGraduate.length; u++) {

    console.log(`${dbPostGraduate[u].courseID}. ${dbPostGraduate[u].courseName} Course Value: ${dbPostGraduate[u].courseValue}`)

    }



console.log(dbGraduate[0].courseID)
console.log(dbGradStudents)
console.log(dbPostGradStudents)

//dbGraduate = []; dbPostGraduate = []; dbGradStudents = []; dbPostGradStudents = []