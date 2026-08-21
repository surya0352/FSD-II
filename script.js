// //swapping of two numbers without using third variable
// let a = 20;
// let b = 10;

// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a, b);


// let x = 100,
//   y = 15,
//   z;
// if (x < 20) z = 15;
// console.log(x, y, z);

// //Leap Year
// let year = 1100;

//     //nested if-else
//     if (year % 4 == 0) {
//     if (year % 100 == 0) {
//         if (year % 400 == 0) {
//         console.log("The year", year, "is a leap year");
//         } else {
//         console.log("The year", year, "is not a leap year");
//         }
//     } else {
//         console.log("The year", year, "is a leap year");
//     }
//     } else {
//     console.log("The year", year, "is not a leap year");
//     }

//     //logical
//     if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
//     console.log("The year", year, "is a leap year");
//     } else {
//     console.log("The year", year, "is not a leap year");
//     }

//     //ternary
//     year % 4 == 0
//     ? year % 100 == 0
//         ? year % 400 == 0
//         ? console.log("The year", year, "is a leap year")
//         : console.log("The year", year, "is not a leap year")
//         : console.log("The year", year, "is a leap year")
//     : console.log("The year", year, "is not a leap year");
    
// //switch case
// let day = 1;
// switch (day) {
//   case 1:
//     console.log("monday");
//     break;
//   case 2:
//     console.log("tuesday");
//     break;
//   case 3:
//     console.log("wednesday");
//     break;
//   case 4:
//     console.log("thursday");
//     break;
//   case 5:
//     console.log("friday");
//     break;
//   case 6:
//     console.log("saturday");
//     break;
//   case 7:
//     console.log("sunday");
//     break;
// }

// //taking input from user
// // const readline=require("readline");
// // const rl=readline.createInterface({input:process.stdin,output:process.stdout})
// // rl.question("enter your name:".function(name))
// // {
// //     console.log("hello"+name);
// //     rl.close();
// // }

// //increamnet decrement
// let p=5;
// let q=++p+p++;
// let r=p++ + p++;
// let s=++p+ ++p;
// console.log(p,q,r,s)

// //loops
// //for(initialize;condition;inc/dec)

// //factorial
// let n=5;
// let fac=1;
// for(let i=1;i<=n;i++)
// {

//   fac*=i;
// }
// console.log(fac);

// //fibonacci=0,1,1,2,3,5,8,13
// let num = 10;

// let m = 0;
// let o = 1;

// for (let i = 0; i < num; i++) {
//     console.log(m);
    
//     let next = m + o;
//     m = o;
//     o = next;
// }

// let x=4,y=0,z;
// while(x>=0){
//     x--;
//     y++;
//     if(x==y)
//     {
//       continue;
//     }
//     else{
//       console.log(x,y);
//     }
// }


////reverse an array using comma operator

// let arr=[0,1,2,3,4,5]

// for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
//     [arr[i], arr[j]] = [arr[j], arr[i]];
// }

// console.log(arr)

// console.log(name);
// if(true){
//   var name="c++";
//   console.log(name);
// }
// console.log(name)

// const person= new Object();
// person.name='c++';
// person.age=19;
// console.log(person);

// function person(name,age)
// {
//   this.name =name;
//   this.age=age;
// }
// const p1=new person("surya",19)
// console.log(p1)

// const person={
//   name:"surya",
//   age:19,
//   'job type':"student"
// }
// person.company="ABES"
// console.log(person)
// console.log(person.name)
// console.log(person.age)
// console.log(person['job type'])

// const person={
//   namr:"surya",
//   age:19,

//   company:{
//     id:1,
//     dept:"cse"
//   }
// }

// let person={
//   name:"surya",
//   age:19
// };
// person.greet=funtion(){
//   console.log("hello, i am " + this.name);
// };
// person.greet();

