//These all are arrays methods

//-------------fiter--------------

const array=[1,2,3,4,5,6,7,8,9,10]
//filter returns a value  but foreach not returns anything......

const newNum=array.filter((num)=> num>4 )

// console.log(newNum)

//-----------map------------

// const array1=[1,2,3,4,5,6,7,8,9,10]
// //map returns a value 

// const newNum1=array1.map((num)=>{
//     return num+10
// } 
// )

// console.log(newNum1)


//-------chaining(use more than one methods at one time)---------

const array2=[1,2,3,4,5,6,7,8,9,10]


const newNum2=array2
    .map((num)=>{
    return num*10
    } 
    )
    
    .map((num) =>num+1)

// console.log(newNum2)


//------------reduce(method)---------------

const numbers=[1,2,3,4,5]

// let result=numbers.reduce(function(acc,curr){
//     console.log(`aa:${acc}  curr:${curr}`)
//     return acc+curr
// },1)

let result=numbers.reduce((acc,curr)=>acc+curr,1)

console.log(result)