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
