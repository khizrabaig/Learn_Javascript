//All these loops are mostly used for an arrays

//------------For_IN Loop---------------


const string="hello world"

for (const str of string) {
    // console.log(`value is;${str}`)
}

//----------map--------------
//it rejects duplication and maintain sequence

const map=new Map()

map.set('name',"khizra")

map.set('age',"21")

map.set('age',"21")

// console.log(map)

// for (const key of map) {
//     console.log(key)
// }

for (const [key,value] of map) { //it will not work for objects
    // console.log(key,",",value)
}



const object={
    name:"khizra",
    age:21
}

for (const key in object) {//forof not used for objects but forin will be
//    console.log(`${key} is ${object[key]}`)
}


//------------For_each Loop(its a method)-----------

const array=["khizra","sidra","omer"]

//Also use arrow function
// array.forEach(function(item){ //callback functoion will define as this
//     console.log(item)
// })


function print(item,index,arr){ // commonly used
    console.log(item,index,arr)
}

array.forEach(print) //just give it a function reference not call it
//another method

const coding = [
    {
        name:"khizra",
        age:21
    },
    {
        name:"sidra",
        age:22
    },
    {
    name:"zaibi",
    age:23
    }
]
    
coding.forEach(function(item){
     console.log(item.name)
    // console.log(item)
})

//const val=coding.forEach(function(item)//foreach not return any value..remember
