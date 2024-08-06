//Objects....
/*
1) Constructor Objects  (The object created through this method called "sigleton")
    e.g; Object.cc...
2)Literal Objects

*/

//-------Literal Objects-----
 
const mysymbol=Symbol("key1")
// console.log(typeof mysymbol)//if we use this in object...then type will be string

const classRoom={
    Name:"khizra",//keys in obkects like(name,age....) are consider as an string
    Age:21,
    Seciton: 'A',
    department:"Computer_Science",
    subject:["DSA","DAA","MATH"],
    //how symbols used as object key...correct syntax..
    [mysymbol]:"key1"
}

// console.log(classRoom.Name)

// console.log(classRoom.Age)

// console.log(classRoom.department)


//Another way to call objects


// console.log(classRoom["Age"])
/*keys in obkects like(name,age....) are consider as an string...So we give it as 
an string ,when object call*/

// console.log(classRoom [mysymbol])


//how to freez an object

// Object.freeze(classRoom)//it propogate changes


classRoom.greeting = function(){
   console.log("hello folks")
}

classRoom.greetingTwo = function(){
    console.log(`hello folks ,${this.Name}`)//reference in function
 }

console.log(classRoom.greeting())
console.log(classRoom.greetingTwo())


