// ques1 20

// ques2 error

//ques 3
// function a(){
//     let a=1;
//     function b(){
//         let b=2;
//         function c(){
//             let c=3;
//             function d(){
//                 let d=4;
//                 console.log(a);
//                 console.log(b);
//                 console.log(c);
//                 console.log(d);

//             }
//             d()
//         }
//         c()
//     }
//     b()
// }
// a()


// ques4


// ques5 undefined

//ques6 
// function gp(){
//     let a=10;
//     function p(){
//         let b=20;
//         function c(){
//             console.log(a)
//         }
//         c()
//     }
//     p()
// }
// gp()

//ques7 Mohan
//ques8
// function gp(){
//     let a=10;
//     function p(){
//         let b=20;
//         function c(){
//             let c=70;
//             console.log(a)
//             console.log(b);
//             console.log(c);
//         }
//         c()
//     }
//     p()
// }
// gp()

//ques9
// function par(){
//     let a=10;
//     function child(){
//         let b=50;
//         return b
//     }
//     console.log(child())
// }
// par()

//ques10


//ques31
// const users = [ 
// {name:"Ram",age:25}, 
// {name:"Mohan",age:30}, 
// {name:"Amit",age:22} 
// ]; 
// const result=users.map(el=>el.name);
// console.log(result)

//ques32
// const arr=[1,2,3,4,5];
// const result=arr.map(el=>el*el);
// console.log(result)

//33
// const arr=[ 
// {name:"Laptop"}, 
// {name:"Mouse"}, 
// {name:"Keyboard"} 
// ]
// const result=arr.map(el=>el.name);
// console.log(result)

//34
// let nums=[1,2,3,4,5,6];
// const result=nums.filter(el=>el%2==0);
// console.log(result)

//35
// const users = [ 
// {name:"Ram",age:25}, 
// {name:"Mohan",age:30}, 
// {name:"Amit",age:22} 
// ]; 
// const resut=users.filter(el=>el.age>24);
// console.log(resut)

//36
// const obj=[
//     {name:"pc",price:1000},
//     {name:"tv",price:500},
//     {name:"phone",price:2000}
// ]
// const ans=obj.filter(el=>el.price>1000);
// console.log(ans)

//37
// const numss=[10,20,30,40];
// const ans=numss.reduce((acc,curr)=>{
//   return  acc+curr
// },0);
// console.log(ans)

//38
// let arr=[5,12,3,45,2];
// const ans=arr.reduce((acc,curr)=>(curr>acc)?curr:acc,0)
// console.log(ans)

//39
// const arr=["JavaScript","React","Node"] 
// const result=arr.reduce((acc,curr)=>acc+curr.length,0);
// console.log(result)

//40
// const orders = [ 
//    { 
//        id:1, 
//        amount:5000, 
//        status:"completed" 
//    }, 
//    { 
//        id:2, 
//        amount:2000, 
//        status:"pending" 
//    }, 
//    { 
//        id:3, 
//        amount:7000, 
//        status:"completed" 
//    }, 
//    { 
//        id:4, 
//        amount:1000, 
//        status:"completed" 
//    } 
// ]; 
// const ans=orders.filter(ele=>ele.status=="completed");
// console.log(ans);
// const res=orders.reduce((acc,curr)=>acc+curr.amount,0);
// console.log(res)
// const aver=res/orders.length;
// console.log(aver)
// const highest = orders.reduce(
//   (max, order) => Math.max(max, order.amount),
//   0
// );
// const arr=orders.map(el=>el.id);
// console.log(arr)


//<-----IIFE---->
//ques21
// (function fntn(){
//     console.log("Welcome to JS")
// })()

//ques22
// (function fntn(a,b){
//     console.log(a*b)

// })(2,3);

//ques23
// (()=>{
// console.log("hello arrow function")
// })()


//ques24
// const counter = (function () {
//     let count = 0; // private variable

//     return {
//         increment: function () {
//             count++;
//             console.log(count);
//         },
//         decrement: function () {
//             count--;
//             console.log(count);
//         },
//         getCount: function () {
//             return count;
//         }
//     };
// })();

// counter.increment(); // 1
// counter.increment(); // 2
// counter.decrement(); // 1

// console.log(counter.getCount()); // 1
// console.log(counter.count); // undefined
//ques25
// const CounterModule = (function () {
//     let count = 0; // private variable

//     return {
//         increment: function () {
//             count++;
//             console.log("Count:", count);
//         },

//         decrement: function () {
//             count--;
//             console.log("Count:", count);
//         },

//         reset: function () {
//             count = 0;
//             console.log("Count reset to:", count);
//         }
//     };
// })();

// // Usage
// CounterModule.increment(); // Count: 1
// CounterModule.increment(); // Count: 2
// CounterModule.decrement(); // Count: 1
// CounterModule.reset();     // Count reset to: 0


// 26. 
// function add(a,b){
//     return a+b
// }
// function subtract(a,b){
//     return a-b
// }
// function divide(a,b){
//     return a/b
// }
// function multiply(a,b){
//     return a*b
// }

// function calculate(a,b,operation){
//     return operation(a,b)
// }

// const result = calculate(2,4,add)
// console.log(result)

// // 27.
// function repeat(times, callback) {
//   for (let i = 1; i <= times; i++) {
//     callback();
//   }
// }

// function sayHello() {
//   console.log("Hello");
// }

// repeat(5, sayHello);

// // 28.
// function logger(level) {
//   return function (message) {
//     console.log(`[${level}] ${message}`);
//   };
// }

// const infoLogger = logger("INFO");

// infoLogger("User Logged In");

// // 29.

// function timer(callback) {
//   const start = Date.now();

//   callback();

//   const end = Date.now();
//   console.log(`Execution Time: ${end - start} ms`);
// }

// function greet() {
//   console.log("Hello World");
// }

// timer(greet);

// // 30. Create a function wrapper that counts how many times another function was called.

// function callCounter(fn) {
//   let count = 0;

//   return function () {
//     count++;
//     console.log(`Called ${count} times`);
//     fn();
//   };
// }

// function greet() {
//   console.log("Hello");
// }

// const countedGreet = callCounter(greet);

// countedGreet();
// countedGreet();
// countedGreet();



// 10. Create a private variable using lexical scope. 

function counter() {
  let count = 0; // Private Variable

  return function () {
    count++;
    console.log(count);
  };
}

const increment = counter();

increment(); // 1
increment(); // 2
increment(); // 3

// 11. 
function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const increment = counter();

increment(); // 1
increment(); // 2
increment(); // 3

// 12. 
function reverseCounter() {
  let count = 10;

  return function () {
    console.log(count);
    count--;
  };
}

const decrement = reverseCounter();

decrement(); // 10
decrement(); // 9
decrement(); // 8
