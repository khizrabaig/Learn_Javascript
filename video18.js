//----Object de-structuring----


const classRoom={
    Name:"khizra",
    Age:21,
    Seciton: 'A',
}

const {Name}=classRoom
console.log(Name)

const {Name:n}=classRoom // provide nickname for de-structuring
console.log(n)


//----JSON API(JS object notation----

/*
=> API is URL value or a VALUE return by backend in the form of JSON object


syntax; of JSON Object
{
   " Name":"khizra",
    "Age":21,
   " Seciton": 'A'
}

//JSON in form of array
[
   {},
   {},
   {}
]


*/