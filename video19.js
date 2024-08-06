//---Functions-----


//function defination
function Print(){
    console.log("Hello")
    console.log("World")
}

function Add_Number(Num1,Num2){
    console.log(Num1+Num2) //its not return a value ,just print it
}

function return_Number(Num1,Num2){
    return Num1+Num2 //it return a value
}


//calling

Print()  //reference => Print.........execution => ()

Add_Number(10,60)

const result = return_Number(40,60)
console.log(result)

console.log(return_Number(40,60))

// function string(username){
//     return `${username},is loggedIn`
// }

// console.log(string("khizra"))

// console.log(string())

function string(username="DEFAULT"){
    if(!username)//if(username===undefined)  both works as same
    {
      console.log("Invalid Username")
      return
    }
     return `${username},is loggedIn`
}


console.log(string())


