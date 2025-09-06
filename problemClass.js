// 10 Problems Using Conditional Statements

// Question 1.
// Write a program to check whether a given number is odd or even using if-else.
// Odd or Even

let num = 12;
if (num % 2 === 0) {
  console.log("The Number is EVEN");
} else {
  console.log("The Number is ODD");
}

// TERNORY METHOD

let result = num % 2 === 0 ? "The Number is EVEN" : "The Number is ODD";
console.log(result);

// Question 2.
// Take a student's marks as input and print their grade using conditions:
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// < 60: F
// Grade Calculator

let marks = 100;

if (marks >= 90 && marks <= 100) {
  console.log("A Grade");
} else if (marks >= 80 && marks <= 89) {
  console.log("B Grade");
} else if (marks >= 70 && marks <= 79) {
  console.log("C Grade");
} else if (marks >= 60 && marks <= 69) {
  console.log("D Grade");
} else if (marks >= 50 && marks <= 59) {
  console.log("E Grade");
} else if (marks < 50) {
  console.log("F Grade");
} else console.log("Invalid Input");

// SWITCH METHOD

switch (true) {
  case marks >= 90 && marks <= 100:
    console.log("A Grade");
    break;
  case marks >= 80 && marks <= 89:
    console.log("B Grade");
    break;
  case marks >= 70 && marks <= 79:
    console.log("C Grade");
    break;
  case marks >= 60  && marks <= 69:
    console.log("D Grade");
    break;
  case marks >= 50 && marks <= 59:
    console.log("E Grade");
    break;
  case marks < 50:
    console.log("F Grade");
    break;
  default:
    console.log("Invalid Input");
    break;
}

//Question 3.
// Leap Year Check
// Determine whether a given year is a leap year.

let year = 2004;
if((year % 400 === 0) || (year % 4 === 0 & year % 100 !== 0)){
    console.log(`${year} is a leap year`);
}else{
    console.log(`${year} Not a Leap Year`);
}

// TERNORY METHOD
let result = ((year % 400 === 0) || (year % 4 === 0 & year % 100 !== 0))? "Leap Year": "Not A Leap Year";
console.log(`${year} is ${result}`);

// Question 4.
// Maximum of Three Numbers
// Find the largest of three numbers using nested if statements.

let a = 110;
b = 20;
c = 25;

if(a >= b && a >= c){
    console.log(`${a} is Largest Number (a)`);
}else if(b >= c){
    console.log(`${b} is Largest NUmber (b)`);
}else{
    console.log(`${c} is Largest Number (c)`);
}

// TERNORY METHOD
let largest = (a >= b && a >= c) ? a : (b >= c ? b : c);
console.log(`${largest} is Largest Number`);

// Question 5.
// Check Vowel or Consonant
// Check if a given character is a vowel or a consonant.

let char = "A";

if (
  char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ||
  char === "A" || char === "E" || char === "I" || char === "O" || char === "U"
) {
  console.log("VOWEL");
} else {
  console.log("CONSONANT");
}

// // Question 6.
// Positive, Negative, or Zero
// Check if a given number is positive, negative, or zero.

let num = 0;

if(num > 0){
    console.log("Positive");
}else if(num < 0){
    console.log("Negative");
}else{
    console.log("Zero");
}

// TERNARY METHOD
let result = (num > 0 )? "Positive" : (num < 0 )? "Negative" : "Zero";
console.log(result);

//Question 7.
// Calculator Program
// Perform addition, subtraction, multiplication, or division based on user input (e.g., using if-else or switch).

let a = 10;
let b = 0;
let operator = "/";
let result;

if (operator === "+") {
  result = a + b;
} else if (operator === "-") {
  result = a - b;
} else if (operator === "*") {
  result = a * b;
} else if (operator === "/") {
  if (b !== 0) {
    result = a / b;
  } else {
    result = "Invalid Operation";
  }
}
console.log(`${a} ${operator} ${b} = ${result}`);

// SWITCH CASE

switch(operator){
    case '+':
    result = a + b;
    break;
    case '-':
    result = a - b;
    break;
    case '*':
    result = a * b;
    break;
    case '/':
    result = b !== 0 ? a / b : "Can't Divided By Zero"
    break;
    default:
        result = "Invalid Operation"
}
console.log(`${a} ${operator} ${b} = ${result}`);

// Question 8.
// Day of the Week
// Take a number (1–7) as input and print the corresponding day of the week.

let day = 2;
if (day === 1) {
  console.log("Monday");
} else if (day === 2) {
  console.log("Tuesday");
} else if (day === 3) {
  console.log("Wednesday");
} else if (day === 4) {
  console.log("Thursday");
} else if (day === 5) {
  console.log("Friday");
} else if (day === 6) {
  console.log("Saturday");
} else if (day === 7) {
  console.log("day");
} else {
  console.log("Enter Days 1 - 7");
}

// SWITCH METHOD
switch (day) {
  case 1:
    result = "Monday";
    break;
  case 2:
    result = "Tuesday";
    break;
  case 3:
    result = "Wednesday";
    break;
  case 4:
    result = "Thursday";
    break;
  case 5:
    result = "Friday";
    break;
  case 6:
    result = "Saturday";
    break;
  case 7:
    result = "Sunday";
    break;
  default:
    result = "Enter Days 1 - 7";
}
console.log(result);


// Question 9.
// Eligible to Vote
// Check if a person is eligible to vote based on their age (age ≥ 18).

let age = 21;

if(age >= 18){
    console.log("Eligible to Vote");
}else{
    console.log("Not Eligible to Vote");
    
}

// TERNORY METHOD

let vote = (age>= 18)? "Eligible to vote": "Not Eligible to Vote";
console.log(vote);

// Question 10.
// Triangle Type
// Determine the type of triangle (Equilateral, Isosceles, or Scalene) based on the lengths of its sides.

let a = 10;
let b = 10;
let c = 10;

if(a === b && b === c){
    console.log("Equilateral Triangle");
}else if(a === b || b === c || c === a){
    console.log("Isosceles Triangle");
}else if(a + b > c && b + c > a && c + a > b){
    console.log("Scalene Triangle");
}else{
    console.log("Not a triangle.");
}


//TERNARY OPERATOR

let triangle = ((a === b && b === c)? "Equilateral": (a === b || b === c || c === a)? "Isosceles": "Scalene");
console.log(triangle);
