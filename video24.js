//----------IIFE-----------
//IIFE is used to avoid global polution.
//it call automatically

(function iife(){
    console.log(`its a immediately invoke function`)
})() ;
/*first paranthesis used for funtion defination
and second paranthesis used for function call.
*/

//focused on puttinf semicolon (;) to first iife func, otherwise it throws an error

((num)=>{
   console.log(num)
})(24)

