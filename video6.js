
//datatype conversions
let marks=60

console.log(typeof marks)

console.log(typeof (marks))

let changeType=String(marks)

console.log(typeof changeType)
console.log(changeType)
// Now 60 will considered as string


let str1="60abc"

console.log(typeof str1)

console.log(typeof (str1))

let ChangeType=Number(str1)

console.log(typeof ChangeType)
console.log(ChangeType)


/*
-> 60 convert into string
-> 60abc convert into int but value inside it will NaN(Not a Number).
*/


let login1=1

let ChangetypeBoolean1=Boolean(login1)

console.log(ChangetypeBoolean1)


let login2=0

let ChangetypeBoolean2=Boolean(login2)

console.log(ChangetypeBoolean2)

let login3=+true
let ChangetypeBoolean3=Boolean(login3)
console.log(login3)
