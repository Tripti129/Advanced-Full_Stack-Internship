//  ques1
const obj={
    name:"Tripti",
    age:20,
    city:"Panipat"
}

//ques2
// console.log(obj.name)

//ques3
// obj.greet=function(){
//     console.log("Hello I am Ram")
// }

//ques4
// obj.isAdult=function(){
//     if(this.age>=18){
//         console.log("Yes it is adult")
//     }
//     else{
//         console.log("Not adult")
//     }

// }
// obj.isAdult()

//ques5
// for(let i in obj){
//     console.log(i)
// }
//ques6
// for(let i in obj){
//     console.log(obj[i])
// }
//ques7
// let found=false;
// for(let i in obj){
//     if(i=="email"){
//         found=true;
//         break;
//     }
//     else{
//         found=false;
//     }
// }
// if(found){
//     console.log("yes");
// }
// else{
//     console.log("no")
// }

//ques8
//obj.course="Mern";
//ques9
//delete(obj.age);

//ques10
// const obj1={...obj};

//ques11
const obj={
    name:"Tripti",
    age:20,
    showname(){
        console.log(this.name)
    }
}
obj.showname()
//ques12
const obj={
    name:"Ram",
    upper(){
        console.log(this.name.toUpperCase())
    }
}
obj.upper()

//ques13
const bank={
    amount:100,
    deposit(value){
        this.amount+=value;
    },
    withdraw(value){
        this.amount-=value;
    }
}
bank.deposit(100)
bank.withdraw(12)
console.log(bank.amount)

//ques14
//"ram"

//ques15
//"ram"

//ques16
// function student(name,age){
//     this.name=name;
//     this.age=age
// }


//ques17

// const s1=new student("Tripti",20);
// const s2=new student("Vivek",21);
// const s3=new student("Lovely",19)
//ques18
// student.prototype.greet=function(){
//     console.log("hello user");
// }

//ques19
//output->"Ram"
//ques20

// function Car(brand, price) {
//     this.brand = brand;
//     this.price = price;
// }

// const car1 = new Car("BMW", 5000000);
// const car2 = new Car("Audi", 4500000);

// console.log(car1);
// console.log(car2);

// ques21
// function student(name,age){
//     this.name=name;
//     this.age=age
// }
// student.prototype.greet=function(){
//     console.log("hello user");
// }
// const s1=new student("Tripti",20);
// s1.greet()

// ques23
// Student.prototype.isAdult = function() {
//     if (this.age >= 18) {
//         console.log("Adult");
//     } else {
//         console.log("Minor");
//     }
// };

//ques24
//"hi"
//ques25
// function Student(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Student.prototype.course = "B.Tech";

// const s1 = new Student("Tripti", 20);
// const s2 = new Student("Ram", 18);

// console.log(s1.course);
// console.log(s2.course);

//ques26


// console.log(s1.hasOwnProperty("course") )

//ques27
// console.log("course" in s1)

//ques29
// const Animal = {
//     eat() {
//         console.log("Animal is eating");
//     }
// };

//ques30
// const dog = Object.create(Animal);
// dog.eat();

//ques31
// const Animal = {
//     eat() {
//         console.log("Animal is eating");
//     }
// };
// const Dog = Object.create(Animal);

// Dog.bark = function() {
//     console.log("Dog is barking");
// };
// const d = Object.create(Dog);
// d.eat();
// d.bark();

//ques32
"Eating"



//ques33
class Student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}

const s1=new Student("Tripti",20);

//ques34

Students.prototype.greet=function(){
    console.log(`heelo ${this.name}`);
}
const stud=new Students("Tripti",20);
stud.greet()

// //ques35
Student.prototype.isAdult=function(){
    return this.age>=18
}

//ques36
const s1=new student("Tripti",20);
const s2=new student("Vivek",21);
const s3=new student("Lovely",19)

//ques37
class Animal{
    eat(){
        console.log("animal is eating");
    }
}
const a=new Animal();
a.eat()

// //ques38
class Dog extends Animal{

}
const d=new Dog;
d.eat();

//ques39
class Dog extends Animal {
    bark() {
        console.log("Dog is barking");
    }
}

//ques40
// Animal is eating
// Dog is barking