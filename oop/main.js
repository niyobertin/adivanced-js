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
   // console.log(element +" : "+tructor[element])
}
//tructor.showDetails();


//statick method
//static methods is a method used to creat utillity function.

//example of static method

class Staticaamethod{
static onCall(){
    return "this is a static methods";
}
}
//creating instance for demo
const stat = new Staticaamethod();
//calling static methods

//console.log(Staticaamethod.onCall());

//inhertance in javacript;

//inheritnance helps to access properties of old class with the help of child class
//example


class Person{
    constructor(fname,lname){
        this.fname = fname;
        this.lname = lname;
    }
}
//creating child class

class Discription extends Person{
   constructor(job,salary){
       super("Niyonkuru","Bertin");
       this.job = job;
       this.salary = salary;
   }
   show(){
       console.log(`${this.fname} ${this.lname} I am a ${this.job} and with ${this.salary} rewards per day`)
   }
}

const aline = new Discription("student","$0.9");
aline.show();


