//==========================1
// Write a function createHelloWorld. It should return a new function that always returns "Hello World"
// const createHelloWorld=()=>{
//   return hello =()=>{
//     return "Hello World"
//   }
// }

// const f = createHelloWorld()
// f()






//==========================2
// //Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
// const createCounter = (n)=>{
//   return counterPlus = ()=>{
//     return n++
//   }
// }
// const counter = createCounter(5)
// counter()

//==========================3

//Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
//toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
//notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

// const expect = (val) => {
//   return {
//     toBe: (arg) => {
//       if (val === arg) {
//         return true
//       } else {
//         throw new Error("Not Equal");
//       }
//     },
//     notToBe: (arg) => {
//       if(val!==arg){
//         return true
//       }else {

//         throw new Error('Equal');
//       }
//     }
//   }
// }
// expect(7).toBe(75)
// console.log(expect(7).toBe(75));




//==========================4

// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
// The three functions are:
// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

// function createCounter(init) {
//   let current = init;

//   return {
//     increment: function () {
//       current++;
//       return current;
//     },
//     decrement: function () {
//       current--;
//       return current;
//     },
//     reset: function () {
//       current = init;
//       return current;
//     },
//   };
// }
// const counter = createCounter(0)
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.decrement());
// console.log(counter.reset());
// console.log(counter.reset());



//========================================5------------my creation
//Create a function that get a number and return a function that say us this number is odd or even

// const number = (n)=>{
//   return{
//     even:()=>{
//       if(n%2==0){
//         return true
//       }else{
//         return false
//       }
//     },
//     odd:()=>{
//       if(n%2!==0){
//         return true
//       }else{
//         return false
//       }
//     }
//   }
// }

// const num = number(3)
// console.log(num.even());
// console.log(num.odd());




