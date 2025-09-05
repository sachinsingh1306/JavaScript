// Question 1.
// let a = 11;
// if(a % 2 == 0){
//     console.log("the Number is even");
    
// }else{
//     console.log("the Number is Odd");
    
// }

// Question 2.
// let year = 2004;
// if(year % 4 == 0){
//     console.log("this is leap year");
// }else{
//     console.log("Not a leap year");
    
// }


// Question 3.

// let days = 6;

// switch(days){
//     case 1:
//         console.log("Monday");
//         break;
//         case 2:
//         console.log("Tuesday");
//         break;
//         case 3:
//         console.log("Wedday");
//         break;
//         case 4:
//         console.log("Thursday");
//         break;
//         case 5:
//         console.log("Friday");
//         break;
//         case 6:
//         console.log("Saturday");
//         break;
//         case 7:
//         console.log("Sunday");
//         break;
// }

// Question 4.
// let a = -1;

// if(a < 0){
//     console.log("Negative");
// }else if(a > 0){
//     console.log("Positive");
//  }else{
//     console.log("Zero");
// }


// Question 5.
let a = 1;
let b = 2;
let c = 1;

// if (a >= b && a >= c) {
//     console.log("A is greater Number");
// } else if (b >= a && b >= c) {
//     console.log("B is greater Number");
// } else {
//     console.log("C is greater Number");
// }

// Question 6.
let arr1 = [1,2,3,4,5,6];

// for(let i=1; i< arr1.length; i++ ){
//     console.log(i)
// }


// for of loop
// for(let  i of arr1){
//     console.log(i);
// }

// for in loop
// for(let  i of arr1){
//     console.log(arr1[i]);
// }


// Question 7.
// let num = 1;

// for (let i = 1; i <= 10; i++) {
//     console.log(`${num} x ${i} = ${num * i}`);
// }

// Question 8.
// let num = 10;
// let fact = 1;

// for (let i = 1; i <= num; i++) {
//     fact = fact * i;
// }
// console.log("The factorial of", num, "is", fact);


// Question 9.
let num = 5;
let sum = 0;

for (let i = 1; i <= num; i++) {
    sum += i;
}

console.log("Sum =", sum);

