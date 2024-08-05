//arrays continue........

const array_1=[1,2,3,4]

const array_2=[5,6,7,8,9,10]

// array_1.push(array_2)
//An array consider as signle element...so in this we push an array inside array

// console.log(array_1)

const Elements= array_1.concat(array_2)
//concat functions returns a value which will must store in a variable

// console.log(Elements)


//---spread Operator...its a best way to concatination

const newArray=[...array_1,...array_2]

console.log(newArray)


//converting an string into array

const string="khizra"

console.log(Array.from(string) )


