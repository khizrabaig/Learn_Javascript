//--------For Loop----------

// for (let i = 0; i <=10; i++) {
//     const element = i;
//     if(element==5){
//         console.log(`5 is the Best Number`)
//     }
//     console.log(element)
    
// }

//-----Nested For Loop----------

// for (let i = 1; i <=5; i++) {

//     console.log(`Outer_Loop no:${i}`)

//     for (let j = 1; j <=5; j++) {
     
//         console.log(`Outer_Loop no:${i},Inner_Loop no:${j}`)
        
//     }
// }



// for (let i = 1; i <=5; i++) {

//     console.log(`Outer_Loop no:${i}`)

//     for (let j = 1; j <=5; j++) {

//         console.log(`${i}*${j} =`,i*j)
        
//     }
// }

const array=["khizra","sidra","zaibi","omer"]

console.log(`Length of array is`,array.length)

for (let index = 0; index < array.length; index++) {
    // if(index==1){
    //     break;
    // }

    if(index==1){
            continue;//it will skip next index execution and move on
        }

        
    const element = array[index];

    console.log(element);
    
}