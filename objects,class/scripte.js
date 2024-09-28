// let employee={
//     name:"khzira",
//     age:21,
//     salary:5000,
//     caltax(){
//         console.log("tax is 10%");
//     }
// }

// let ali={
//     name(){
//         console.log("my name is ali");
//     }
// }

// ali.__proto__=employee; //for use methods of emloyee in ali


//==============classes=============


class CAR{
    constructor(brand){
        console.log("I am a parent constructor")
        this.brand=brand;
    }

    start(){
        console.log("START")
    }

    stop(){
        console.log("STOP")
    }
}


class indian_car extends CAR{

    constructor(brand){
        super(brand); //to invoke parent constructor
        console.log("child constructor")
    }
    
    work (){
        super.start();
    }
    
}

let suzuki=new indian_car("suzuki");
// let bmw=new indian_car("BMW");


