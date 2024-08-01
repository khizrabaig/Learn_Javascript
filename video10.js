/*
stack;
-> used by primitive datatypes
-> In this copy of memory will provide

*/

let Name="Omer"

let anotherName="Omerkhan"

anotherName="muhammad omer khan"
console.log(anotherName)
console.log(Name)


/*
heap;
-> used by non-primitive datatypes
-> It provides direct reference to memeory
*/

let Object1={
    Name:"khizra",
    age:21
}

let Object2=Object1

Object1.Name="sidraBiag"

console.log(Object1.Name)

console.log(Object2.Name)