//ques1
// const name="Geeta university"
// console.log(name)

//ques2 
// let a=1;
// a=2;
// a=4;
// a=5;

//ques3
// {
//     let a=9;
// }
// console.log(a);

//ques4




//ques5
// const cube=num=>num*num*num
// console.log(cube(6))

//ques6
// const check=(num)=>{
//     if(num%2==0){
//         return "even";
//     }
//     else {
//         return "odd";
//     }
// }
// console.log(check(5))

//ques7
// const maxx=(n1,n2,n3)=>{
//     if(n1>n2 && n1>n3) return n1;
//     else if(n2>n3 && n2>n1 ) return n2;
//     else return n3;
// }
// console.log(maxx(3,8,2));

//ques8
// const nums = [10, 20, 30, 40, 50]; 
// const [first,sec,...rem]=nums;
// console.log(first)
// console.log(sec);
// console.log(rem)

//ques 9
// const greet=(name,age)=>{
//     console.log(`Hello ${name},you are ${age} old`);
// }
// greet("Tripti",20)


//ques10
// const url=(port)=>{
//     console.log(`/api/users/${port}`);
// }
// url(101)


//ques11
// const student = { 
// name: "Ram", 
// age: 25, 
// course: "MERN" 
// };
// const {name,age,course}=student;
// console.log(name,age,course);

//ques12
// const {course:technology}=student


//ques13
// function createUser(name,role="Student"){
//     return `hello ${name}`;
// }
// console.log(createUser("tripti"));


//ques14
// const cal=(n1,n2,op="add")=>{
//     if(op=="add"){
//         return n1+n2;
//     }
//     else if(op=="mul"){
//         return n1*n2;
//     }
//     else if(op=="sub"){
//         return n1-n2;
//     }
//     else {
//         return n1/n2;
//     }
// }

// console.log(cal(4,2));

//ques15
// const fntn=(...arr)=>{
//    return  arr.reduce((acc,el)=>{
//         return acc+el
//     },0)
// }
// console.log(fntn(1,2,7,3,9))

//ques16
// const lar=(...arr)=>{
//     return Math.max(...arr);
// }
// console.log(lar(3,7,9,4,12));


//ques17
// const frontend = ["HTML", "CSS"]; 
// const backend = ["Node", "Express"]; 
// const result=[...frontend,...backend];
// console.log(result)

//ques18
// const nums=[1,2,3,4,5];
// const res=[...nums];
// res.push(2);

//ques19

// const student = { 
// name: "Ram", 
// age: 25, 
// course: "MERN" ,
// email:"tripti@12gmail.com"
// };
// const obj={
//     ...student,
//     email:"triptimittal2gmail.com"
// }

//ques20
// const products={
//     name:"TV",
//     price:1200
// }
// const updated={
//     ...products
//     ,
//     discouted:100
// }
// console.log(updated)

//ques21
const users = [ 
{ name: "Ram", age: 25 }, 
{ name: "Mohan", age: 30 }, 
{ name: "Amit", age: 22 } 
];
// const result=users.map((el)=>{
//     return el.name;

// })
// console.log(result);


//ques22
// const ans=users.filter((el)=>{
//    return el.age>24;

// })
// console.log(ans)

//ques23
//  const ans=users.reduce((acc,el)=>{
//     return acc+el.age

// },0)
// console.log(ans);

//ques24
//  function createInvoice(customerName, amount) {
//     return `hello ${customerName}, your balance is ${amount}`
//  }

//ques25
const student = {
  name: "Ram",
  marks: [80, 90, 70, 85]
};

// Destructuring
const { name, marks } = student;

// Arrow function to calculate total
const totalMarks = (...nums) => nums.reduce((sum, mark) => sum + mark, 0);

const total = totalMarks(...marks); // Spread operator
const average = total / marks.length;

// Template Literal
console.log(`Student: ${name}
Total Marks: ${total}
Average Marks: ${average}`);