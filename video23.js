//----this -------arrow Function-------

const user={
    name:"Khizra",
    age:21,
    
    UserLogin:function(){
        console.log(`${this.name} is LoggedIn`)
        // console.log(this)//it prints all the current context
    }
    /*
    (this) is used in current context
    */
}

// user.UserLogin()

// user.name="Sidra"

// user.UserLogin()

console.log(this)/*for node engin....it resturns empty object....
and for browser it resturs window
*/


// function add(){
//     console.log(this)
//     // console.log(this.UserLogin)
// }
// //(this) will not used in functions
// add()


// const result=function add(){
//     console.log(this)
// }

// result()

//----Arrow Function------------


// const value=(num1,num2)=>{ 
//     return num1+num2      //explicit return arrow funtion
// }

// console.log(value(5,5))


const value1=(num1,num2)=>  num1+num2 //implicit return arrow funtion
console.log(value1(5,5))

const value2=(num1,num2)=>  (num1+num2) //implicit return arrow funtion
console.log(value2(5,5))


const value3=(num1,num2)=>  ({object:"khizra"})
console.log(value3(5,5))
