
let bt=document.querySelector('#button1')

bt.onclick=()=>{
    console.log("click 1 time")
    let a=19;
    a++;
    console.log(a)
}

// let bt2=document.querySelector('#button2')

// bt2.ondblclick=(evt)=>{
//    console.log(evt)
//    console.log(evt.target)
//    console.log(evt.clientY)
//    console.log(evt.type)
   
// }

let bt2=document.querySelector('#button2')

bt2.addEventListener("dblclick",()=>{
    console.log("click me 2 times");
});


bt2.addEventListener("dblclick",()=>{
    console.log("click me 2 times ,its a second trial")
});


//remove events......
//for removing callback reference should be same

const remove = ()=>{
    console.log("click me thied time");
};

bt2.addEventListener("dblclick",remove);

bt2.removeEventListener("dblclick",remove)



