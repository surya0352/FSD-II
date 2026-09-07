// function display(a,b)
// {
//     return a+b;
// }
// console.log(display())
// console.log(display(10,'ab'))
// console.log(display(10,20))
// console.log(display('10','20'))

// function loggedInUser(user)
// {
//     return `${user} Just logged in`;
// }
// console.log(loggedInUser("anmol"))
// console.log(loggedInUser())

// const date = new Date();

// // India
// const india = new Intl.DateTimeFormat("en-IN", {
//     timeZone: "Asia/Kolkata",
//     dateStyle: "short",
//     timeStyle: "short"
// }).format(date);

// // USA - New York
// const usa = new Intl.DateTimeFormat("en-US", {
//     timeZone: "America/New_York",
//     dateStyle: "short",
//     timeStyle: "short"
// }).format(date);

// console.log("India:", india);
// console.log("USA:", usa);

// function show()
// {
//     return new Date();
// }

// function display(d=show())
// {
//     console.log(d);
// }
// display()

// function    display(x=1,y=x,z=x+y)
// {
//     console.log(arguments.length)
//     return x+y+z;
// }
// console.log(display())

// console.log(display(10))
// console.log(display(10,5))

// const fun=function(a,b)
// {
//     return a+b;
// }
// console.log(fun(10,20))

// setTimeout(300);

// console.log(one(2))
// function one(n)
// {
//     return n+1;
// }
// console.log(two(5))
// const two=function(n)
// {
//     return n+2;
// }

// setTimeout(function(){
//     console.log("CSE_34");
// },3000)

// //////IIFE----->Immediately invoked function expression
// ///Named IIFE
// (function one()
// {
//     console.log("Hello")
// })();

// ///Normal IIFE
// (function()
// {
//     console.log("Database Connected");
// })();

// const person={
//     name:"surya",
//     age:19,
//     greet:function()
//     {
//         console.log(this);
//     }
// };
// person.greet();
// person.name="Surya kant ray"
// person.age=20;
// person.greet()

// function show(){
//     console.log(this)
// }
// show()

// const person = {
//   name: "surya",
//   age: 19,
//   greet: function () {
//     console.log(`my name is ${person.name} and age is ${person.age}`);
//     console.log(this);
//   },
// };

// console.log(person.greet());
// console.log(this);

// const person={
//     name:"SURYA",
//     age:19,
//     greet:function(){
//         console.log(`my name is ${person.name} and age is ${person.age}`);
//         console.log(this);
//     }
// };

// console.log(this)




// function one(){
//     let user="SURYA";
//     console.log(this.user);
// }
// one();


// const person={
//     name:"surya",
//     age:19,
//     greet:function(){
//         return this.name;
//     }
// };
// let p1=person.greet.bind(person);
// console.log(p1());



// function greet(city,country){
//     console.log(`i'm ${this.name} from ${city} ,${country}`);
// }
// const person={
//     name:"SURYA"
// };
// const fn=greet.bind(person,"Lucknow","India");
// fn();



// const person={
//     name:"surya",
//     greet(){
//         console.log(this.name);
//     }
// };
// setTimeout(person.greet,1000);



// function multiply(a,b){
//     return a*b;
// }
// const double =multiply.bind(null,2);
// console.log(double(5));




function person(name){
    this.name=name;
}
person.prototype.getName=function(){
    return this.name;
}
let p1=new person("SURYA");

console.log(p1.name)
console.log(p1.getName)
