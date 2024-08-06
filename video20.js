//-----(...)rest Operator----

// function CalculateCart1(...Num1){ /* spread operator is used to enter all items
//     passed as argument*/
//     return Num1
// }

// console.log(CalculateCart1(21,23,45,65,90)) //return values as arrays when we use spread


function CalculateCart2(val1, val2, ...Num1){ 
    return Num1
}

console.log(CalculateCart2(21,23,45,65,90))


//-----------------------------

const array=[10,20,30,40]

function ToReturn(Any_array){
    return Any_array[1]
}

console.log(ToReturn(array))