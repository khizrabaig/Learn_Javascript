//Date

const date=new Date()

console.log(date)

console.log(date.toDateString())

console.log(date.toISOString())

console.log(date.toJSON())

console.log(date.toLocaleDateString())

console.log(date.toLocaleString())


let Mydate= new Date(2024,0,23) //months start from 0 in js

console.log(Mydate.toDateString())



let Mydate2= new Date("01=04-2024") 

console.log(Mydate2.toLocaleString())

//time

let time=Date.now()

console.log(time)

console.log(Mydate2.getTime())

console.log(Date.now())


