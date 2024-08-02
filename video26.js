// // CONTROL FLOWS

//----if ------- else ---------

let Marks=300

if(Marks>=300){
    console.log(`Marks=${Marks}`)
}
else{
    console.log("Marks lesser than 300")
}


//==== (it checks both data and datatype)
if(2==="2"){
    console.log("true")
}
else{
    console.log("false")
}

if(2=="2"){ // it only check data not datatypes
    console.log("true")
}


//-------------------Nested if--------
Marks=250
if(Marks==300){
    console.log(`Marks=${Marks}`)
}
else if(Marks>300){
    console.log("Marks > 300")
}
else if(Marks<300){
    console.log("Marks < 300")
}
else{
    console.log("wrong value")
}


//----AND Operator(&&)-------OR Operator(||)---------

const UserEmail="TRUE"
let UserCard="TRUE"

if(UserEmail && UserCard){
    console.log("Executed")
}
else{
    console.log("Not Executed")
}

UserCard="FALSE"

if(UserEmail || UserCard){
    console.log("Executed")
}
else{
    console.log("Not Executed")
}


//-----Switch Statment-------
let Score="800"

switch (Score) {
    case "400":
        console.log("Score :400")
        break;

    case "500":
        console.log("Score :500")
        break;
    
    case "600":
        console.log("Score :600")
          break; //used to stop executing statments
    default:
        console.log("Default")
        break;
}


//----Truthy Values-------Falsy Values----------

/*Falsy Values;
   0, -0, null, undefined, fale, "", Nan, BigInt
   ->instead of these all are truthy values.
*/

/*Truthy Values;
   '0', "false", [], {}, function(){}, " "
*/
let Email="khizrabaig@0653gmail.com"
Email=" "
// Email=0
// Email=-0
// Email=null
// Email=undefined

if(Email){
     console.log("VALID")
}
else{
    console.log("INVALID")
}

//---Nullish Coalescing Operator ??(it choose best option for code execution)

let val;

val= 5 ?? 10 ?? 20

// val=null ?? 20

console.log(val)


//-----Ternary Opeartor-----
//provide multiple options in one line and separated by colon(:)


let val2=700

val2 >=600 ? console.log("greater than 700") : console.log("leeser than 700")
