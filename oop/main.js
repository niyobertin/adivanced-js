//creating object and refreence

//object 

const person ={};

//crearting refreence of this object person
const bertin =person;
bertin.name ="my name is niyonkuru bertin";
bertin.love = "my lovely girl is nikuze aline";
//console.log(person.name); 

//classes ibn js

class Car{
    constructor(name,height,mass){
        this.name = name;
        this.height = height;
        this.mass = mass;
    }
    showDetails(){
        console.log(`The name of this car is :${this.name} and the height of :${this.height}
        has mass of :${this.mass}`)
    }
}


const tructor = new Car("fuso",'278 meters','2000kg');
for(element in tructor){
    console.log(element +" : "+tructor[element])
}
tructor.showDetails();


//statick method
//statifck methods is a method used to creat utillity function


