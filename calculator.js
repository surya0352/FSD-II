
// // calculator in js using callback
// function calculator(a, b, operation) {
//     return operation(a, b);
// }

// function add(a, b) {
//     return a + b;
// }

// function subtract(a, b) {
//     return a - b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// function divide(a, b) {
//     return a / b;
// }
// console.log("Addition:", calculator(10, 5, add));
// console.log("Subtraction:", calculator(10, 5, subtract));
// console.log("Multiplication:", calculator(10, 5, multiply));
// console.log("Division:", calculator(10, 5, divide));


// //calulator using arror function   higher order funciton

// const calculator = (a, b, operation) => {
//     return operation(a, b);
// };

// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// const multiply = (a, b) => a * b;
// const divide = (a, b) => a / b;

// console.log("Addition:", calculator(10, 5, add));
// console.log("Subtraction:", calculator(10, 5, subtract));
// console.log("Multiplication:", calculator(10, 5, multiply));
// console.log("Division:", calculator(10, 5, divide));





// //define an arrow function sum(a,b) that if b<0 it returns the message "Please enter positive number" otherwise,it returns the sum  of a+b;
// const sum = (a, b) => {
//     if (b < 0) {
//         return "Please enter positive number";
//     } else {
//         return a + b;
//     }
// };

// console.log(sum(10, 5));
// console.log(sum(10, -5));



// //  write a js prgram to find even nummbers fromt the given array using arrow function
// const arrr = [1, 2, 3, 4, 5, 6];
// const even = (num) => {
//     return num % 2 == 0;
// };





// for (let i = 0; i < arrr.length; i++) {
//     if (even(arr[i])) {
//         console.log(arr[i]);
//     }
// }

// let arrrr=[10,15,22,33];
// for(let[index,value] of arrrr.entries()){
//     console.log("index:",index,"value:",value);
// }

// const fun=()=>{user:"surya"}
// console.log(fun());

// const one=()=>{
//     let user="surya";
//     console.log(user);
//     console.log(this.user);
// }
// one();

// const two=()=>{
//     let user="SURYA";
//     console.log(this);
// }
// two();


// const person={
//     name:"surya",
//     greet:function(){
//         setTimeout(function(){
//             console.log(this.name);
//         },3000);
//     }
// };
// person.greet();

// const person={
//     name:"surya",
//     greet:function(){
//         setTimeout(function(){
//             console.log(this.name);
//         }.bind(this),3000);
//     }
// };
// person.greet();

// const person = {
//     name: "surya",
//     greet: function() {
//         setTimeout(() => {
//             console.log(this.name);
//         }, 3000);
//     }
// };
// person.greet();

function test(a,b){
    const show=function(){
        console.log(arguments);
    };
    show();
}
test(10,20);

function test(a,b){
    const show=()=>{
        console.log(arguments);
    };
    show();
}
test(10,20);