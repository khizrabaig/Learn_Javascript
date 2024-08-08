//----Scope Level----


function One(){
    console.log("Number One")
    let name="khizra"

    function Two(){
        console.log("Number Two")  
        console.log(name)
    }
            Two()
            console.log("Default Number")
}

// One()
// Two()

//--------------------------------------

console.log(addOne(5))

function addOne(num){
    return num+1
}

console.log(addTwo(5)) //it returns an error

//when function holds in a variable ,it will call as function....

const variable=function addTwo(num) //hoisting
{
    return num+2
}