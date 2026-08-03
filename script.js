//swapping of two numbers without using third variable
let a = 20;
let b = 10;

a = a + b;
b = a - b;
a = a - b;
console.log(a, b);


let x = 100,
  y = 15,
  z;
if (x < 20) z = 15;
console.log(x, y, z);

//Leap Year
let year = 1100;

    //nested if-else
    if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
        console.log("The year", year, "is a leap year");
        } else {
        console.log("The year", year, "is not a leap year");
        }
    } else {
        console.log("The year", year, "is a leap year");
    }
    } else {
    console.log("The year", year, "is not a leap year");
    }

    //logical
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
    console.log("The year", year, "is a leap year");
    } else {
    console.log("The year", year, "is not a leap year");
    }

    //ternary
    year % 4 == 0
    ? year % 100 == 0
        ? year % 400 == 0
        ? console.log("The year", year, "is a leap year")
        : console.log("The year", year, "is not a leap year")
        : console.log("The year", year, "is a leap year")
    : console.log("The year", year, "is not a leap year");
    
//switch case
let day = 1;
switch (day) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thursday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saturday");
    break;
  case 7:
    console.log("sunday");
    break;
}

//taking input from user
// const readline=require("readline");
// const rl=readline.createInterface({input:process.stdin,output:process.stdout})
// rl.question("enter your name:".function(name))
// {
//     console.log("hello"+name);
//     rl.close();
// }

//increamnet decrement
let p=5;
let q=++p+p++;
let r=p++ + p++;
let s=++p+ ++p;
console.log(p,q,r,s)

//loops
//for(initialize;condition;inc/dec)

//factorial
let n=5;
let fac=1;
for(let i=1;i<=n;i++)
{

  fac*=i;
}
console.log(fac);

//fibonacci=0,1,1,2,3,5,8,13
let num = 10;

let m = 0;
let o = 1;

for (let i = 0; i < num; i++) {
    console.log(m);
    
    let next = m + o;
    m = o;
    o = next;
}