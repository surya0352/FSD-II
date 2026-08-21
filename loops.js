/*let i=0
for(;;i+=2)
{
    if(i>10)
        {
            break;
        }
        console.log(i)
}*/

//sum of digit of 5digit number

/*let n=12345,sum=0;
while(n>0)
{
    let dig=n%10;
    sum+=dig;
    n=Math.floor(n/10);
}
console.log(sum)*/

//reverse

/*let n=12345,rev=0;
while(n>0)
{
    let dig=n%10;
    rev=rev*10+dig;
     n=Math.floor(n/10);
}
console.log(rev)*/

//fibonacci

/*let length = 10;
let a = 0;
let b = 1;

for (let i = 0; i < length; i++)
{
    console.log(a);
    let c = a + b;
    a = b;
    b = c;
}*/

//prime number

/*let n = 11;
let isPrime = true;
if (n < 2) {
    isPrime = false;
}

for (let i = 2; i < n; i++) {
    if (n % i == 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log("Prime");
} else {
    console.log("Not Prime");
}*/


let sum=0;
for(let i=0;i<=9;i++,sum+=i);
    console.log(sum);