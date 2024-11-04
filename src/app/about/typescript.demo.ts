interface Transport{
    //prop and func declaration
    code:number;
    GetInfo():string;
}
 
class Vehicle implements Transport{
 
    vid:number;
    vname:string;
    code: number;
 
    constructor(id:number,nm:string,code:number){
        this.vid=id,
        this.vname=nm
        this.code = code;
    }
 
 
   
    GetInfo(): string{
        console.log("Method of interface");
        return "car1";
    }
    start():void{
        console.log("Starting the car..");
        console.log(this.vid+":is the ID of the Car")
    }
}
 
let car=new Vehicle(1,"BMW",101);
car.start();
car.GetInfo();