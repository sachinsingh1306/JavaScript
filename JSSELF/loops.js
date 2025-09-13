// Print 1 to 10 Number
for( let i = 1; i <= 10; i++){
    console.log("Count :-");
    console.log(i);
}

// ----------------------------------------------------------------------|

// Calculate Sum Of 1 to 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + i;
  console.log(sum);
}
console.log(sum);
console.log("Loop Ended");

//--------------------------------------------------------------------------|

// Infinite Loop does not use anytime OR A loop never Ends


//---------------------------------------------------------------------------|

// WHILE LOOPS
// while(stoping conditions / inistilization){
// updation work inside the loop
// }

let a = 1;
while(a <= 10){
    console.log(a);
    a++;
}

//----------------------------------------------------------------------------|

// DO WHILE LOOPS
// it runs one time atleast one time
let i = 1;
do {
    console.log("SACHIN SINGH", i);
    i++;
}while (i <= 10);

//-------------------------------------------------------------------------------|

// FOR OF LOOPS
// it helps to looping the string and the array

let str = "Sachin Software Develeper"
for(let i of str){
    console.log(i);
}

let size = 0;
for(let i  of str ){
    console.log(i);
    size++;
}
console.log("String Size = ", size);

//------------------------------------------------------------------------------------|

// FOR IN LOOPS
// it is used for the object and array

let student = {
    name : "Sachin Singh",
    age : 25,
    cgpa : 7.3,
    isPassed : true
};

// console.table(student);

for (let key in student){
    console.log(key, " :-" ,student[key]);
}

//------------------------------------------------------------------------|

// QUESTION 01.
// Print all even number from 0 to 100.

for(let num = 0; num <= 100; num++){
    if( num % 2 === 0){
        console.log(num ,"EVEN");
    }else if( num % 2 !== 0){
        console.log(num, "ODD");
    }
}

//------------------------------------------------------------------------|

//QUESTION 02.
// Create a game wher you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

let prompt = require("prompt-sync")();
let gameNumber = 25;
let userNumber = prompt("GUSSE THE GAME NUMBER : ");
while (userNumber != gameNumber) {
  userNumber = prompt("GUSSE THE NUMBER AGAIN : ");
}
console.log("COngratulation You WIN the Game & Enter right Number");

//------------------------------------------------------------------------|

// if (gameNumber === userNumber) {
//   console.log("You WIN the Game");
// } else {
//   userNumber = prompt("GUESS THE NUMBER AGAIN : ");
//   console.log("Enter the Right Number : ");
// }


//---------------------------------------------------------------|

// Question 03.
// Write a program that takes a string as input and prints the reverse of it using a loop.

let prompt = require("prompt-sync")();

let input = prompt("INPUT DATA :- ");
let output = "";

for (let i = input.length - 1; i >= 0; i--) {
  output += input[i];
}
console.log(`Reversed String : ${output}`);



//---------------------------------------------------------------------|

// Question 04.
// Print Numbers 1 to 10
for(let i = 1; i<= 10; i++){
    console.log("num = " , i);
}


//------------------------------------------------------------------|

// Question 05.
// Take a number n as input and print the sum of numbers from 1 to n ?
let number = 5;
let sum = 0;

for(let i = 1; i <= number; i++){
    sum += i;
}
console.log("Sum of Frist " + number + " number is :" + sum);

//---------------------------------------------------------------------|

// Question 05.
// Print the multiplication table of a given number ?
let prompt = require("prompt-sync")();
let num = prompt("Table Of :-")
for (i = 1; i <= 10; i++) {
    result  = num *i
    console.log(`${num} X ${i} = ${result}`);
}

//-----------------------------------------------------------------|

// Question 06.
// Even Numbers Between 1 to 50

let prompt = require("prompt-sync")();

let num = prompt("Enter a Number :- ");

for (let i = 1; i <= num; i++) {
  if (i % 2 === 0) {
    console.log(i, "EVEN");
  }
}
console.log("Printed all Even number Between 1 to ", num);

//---------------------------------------------------------------------|

// Question 07.
// Factorial of a Number

let prompt = require("prompt-sync")();
let num = prompt("Enter a Factorial Number :- ");
let fact = 1;

for(let i = 1; i <= num; i++){
    fact = fact * i;
}
console.log(`Factorial of ${num} is ${fact}`);

//--------------------------------------------------------------------|

// Question 09.
// Reverse a Number

let number = 1234567890;
let reversed = 0;

while (number > 0) {
    let digit = number % 10;
    reversed = reversed * 10 + digit;
    number = Math.floor(number / 10);  
}
console.log("Reversed Number:", reversed);
