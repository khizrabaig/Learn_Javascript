/*
keywords;
1)const (assigned value will not be changed)
2)var  (prefer not to be used due to block scope)
3)let  (assigned value will be changed)
*/

const AccountId = 465677
let Name="khizra"  
let occupation="student"
city="lahore"


//console.log() is a print function
console.log(AccountId)
console.log(Name)
console.log(occupation)
console.log(city)


Name="sidra"
city="karachi"


console.table([AccountId, Name, occupation, city])




