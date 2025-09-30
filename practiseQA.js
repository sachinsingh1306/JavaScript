// let name = "SACHIN";
// let age  = 25;
// let isStudent = true;
// console.log(name,age, isStudent);


//------Sawap Number-----------
// let a = 5;
// let b = 10;

// a =  a + b;
// b = a - b;
// a = a - b;
// console.log(a,b);

//-----Area Of rectangle------------
// let lenght = 10;
// let width = 5;
// let areaRectangle = lenght * width;
// console.log("Area = ",areaRectangle);
 

// function areaRectangle(lenght, width){
//     result = lenght * width;
//     console.log( "Area of Rectangle  : ", result);
// }
// areaRectangle(10,5)

//----------------Write a program to check if a number is even or odd.-------------

// let num = 9;
// if(num % 2 == 0 ){
//     console.log( num," :is Even");
// }else{
//     console.log(num ,": is Odd");
// }

// ----OR----
// console.log(num % 2 === 0 ? `${num} is Even` : `${num} is Odd`);

//----Write a program that takes two numbers and prints which one is larger.---------------

// let a = 12;
// let b = 12;

// if(a > b){
//     console.log(a ,"is larger");
// }else if (b > a){
//     console.log(b, "is larger");
// }else{
//     console.log("Both are equal");
// }

//---Question 3, which is a time-based greeting:----

// let hour = 14;
// if(hour < 12){
//     console.log("Good morning");
// }else if (hour >= 12 && hour < 18){
//     console.log("Good Afternoon");
// }else{
//     console.log("Good evening");
// }

//-----Print Numbers 1 to 20
// let n = 20;
// for(let i = 1; i <= n; i++){
//     console.log(i);
// }

//------Print Even Numbers 1 to 50--------

// let n = 50;
// for(let i = 1; i <= n; i++ ){
//     if(i % 2 === 0 ){
//         console.log(i, "is Even");
//     }
// }

//----Multiplication Table--------

// let num = 7;
// for(let i = 1; i <= 10; i++){
//     console.log(`${num} X ${i} = ${i*num}`);   
// }

//----Question 1: Add Two Numbers----------

// function add(a,b){
//     return a + b;
// }
// let result = add(5,7);
// console.log(result);

//--------------Check Prime Number------------
// Function to check if a number is prime
// function isPrime(num) {
//     if (num <= 1) return false; // 0 and 1 are not prime

//     for (let i = 2; i <= Math.sqrt(num); i++) { // check divisors
//         if (num % i === 0) {
//             return false; // divisible → not prime
//         }
//     }
//     return true; // no divisors → prime
// }

// Test numbers from 1 to 10
// for (let i = 1; i <= 10; i++) {
//     if (isPrime(i)) {
//         console.log(i, "is prime");
//     } else {
//         console.log(i, "is not prime");
//     }
// }

//-----------------------------------------------------------------

// function greet() {
// console.log("Sachin");
// }
// greet();

// function greet(name){
//     console.log("Hello", name);
// }
// greet("Sachin");

// function add(a,b){
//     return a + b;
    
// }
// let result = add(10,20);
// console.log(result);

