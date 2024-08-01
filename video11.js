//Strings

let name="khizra"
let num=21

console.log(`My name is ${name} and my age is ${num}`)

const str1=new String("shazia")

console.log(str1)
console.log(str1[0])
console.log(str1[1])

console.log(str1.__proto__) //to show prototype


console.log(str1.length)

console.log(str1.toUpperCase())

console.log(str1.charAt(3))

const newString=str1.substring(0,4)//count characters from 0 to 3 index
//we cannot give negative values
console.log(newString)

const newString1=str1.slice(-6,3) //we give negative in slice
console.log(newString1)

 
const newString2="      sidra    "
console.log(newString2.trim()) //trim ignores white spaces
console.log(newString2)
