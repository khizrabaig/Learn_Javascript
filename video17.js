//---constructor object---
//const room=new Object{} //sigleton object

// const student={}// nonsigleton object

// student.id=1234

// student.name="khizra"

// student.section='A'

// console.log(student)



//--------Nesting---------

let classRoom={
    section:'A',
    
    section_B:{    //... object...
        name:"khizra",
        roll:21
    },

    section_C:{
        name:"sidra",
        roll:22
    }
}

//console.log(classRoom)

// console.log(classRoom.section_B.name)

//-------Object inside Object------

let objt1={
    1:"kb",
    2:"sb"
}

let objt2={
    3:"nnb",
    4:"bb"
}

//method 1
// let ojbt_3={objt1, objt2} 

//method 2
// let ojbt_3=Object.assign({},objt1,objt2)/*by default all objects copied into first
// object we assign*/

//method 3 (...spread operator)
let ojbt_3={...objt1,...objt2}

// console.log(ojbt_3)

console.log(Object.keys(objt1))

console.log(Object.values(objt1))

console.log(Object.entries(objt1)) 

console.log(Object.hasOwnProperty("name"))
