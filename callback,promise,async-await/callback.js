//======================callback==========================

// function Hello(){
//     console.log("hello");
// }

// // setTimeout(Hello,2000);

//  function OnebyOne(data,callback){
//     setTimeout(()=>{
//         console.log("data",data);
//         if(callback){
//             callback();
//         }
       
//     },2000)
     
//  }
//  //its a callbacl Hell where nesting would be applied.
//  OnebyOne(20,() => {
//     OnebyOne(30,() => {
//         OnebyOne(40);
//     })
//  });


//===================promise=====================

// let promise=new Promise((resolve,reject) => {
//     console.log("I am a promise")
//     // resolve("success");
//     reject("network Error")
// })

// promise.then((result)=>{
//     console.log("fullfeild",result)
// })

// promise.catch((error)=>{
//     console.log("rejected",error)
// })


// function OnebyOne(data,callback){
//     return Promise=new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             console.log("data",data);
//             resolve();
//             if(callback){
//                 callback();
//             }
//         },2000)
//     })  
//  }

//  OnebyOne(123);


//=============promise chaining(place then within then)==============



function asyncfun1(data){
    return promise=new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data No.1:",data)
            resolve("fullfiled");
        }, 4000); 
    }) 
}

function asyncfun2(data){
    return promise=new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data No.2:",data)
            resolve("fullfiled");
        }, 4000); 
    }) 
};

function asyncfun3(data){
    return promise=new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data No.3:",data)
            resolve("fullfiled");
        }, 4000); 
    }) 
};

// console.log("Data1 is fetching...........")
//  let p1=asyncfun1("Khizra Biag")
//  p1.then(() => {
//     console.log("Data2 is fetching...........")
//     let p2=asyncfun2("shazia Jabeen")
//     p2.then(() => {})
//  }
// )

//its a better way
// console.log("Data1 is fetching...........")
// asyncfun1("Khizra Biag").then( (res) => {
//       console.log("Data2 is fetching...........")
//     return asyncfun2("shazia Jabeen")}).then( () => {
//         console.log("Data3 is fetching...........")
//         return asyncfun3("sidra baig")
//         console.log(res) 
//     }
//     )


//================async-await(keywords)====================

/*
async (its a function ,always returns a promise)

await (it pause surrounded async functions to stteld promises)
 */


// async function weather(){
//     console.log("todays weather")
// }

//we use functions defined in upper

async function fetch(){
    await asyncfun1(1);
    await asyncfun1(2);
    await asyncfun1(3);
    await asyncfun2(90)
}

fetch();