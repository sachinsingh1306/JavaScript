// 01_oddEven.js
let num = 7;
console.log(num % 2 === 0 ? "Even" : "Odd");


// 02_gradeCalculator.js
let marks = 85;
if (marks >= 90) console.log("A");
else if (marks >= 80) console.log("B");
else if (marks >= 70) console.log("C");
else if (marks >= 60) console.log("D");
else console.log("F");

// 03_leapYear.js
let year = 2024;
if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}


// 04_maxOfThree.js
let a = 5, b = 9, c = 3;
if (a >= b && a >= c) console.log("Max:", a);
else if (b >= c) console.log("Max:", b);
else console.log("Max:", c);



// 05_vowelOrConsonant.js
let ch = 'e';
if ("aeiouAEIOU".includes(ch)) console.log("Vowel");
else console.log("Consonant");



// 06_posNegZero.js
let num = -7;
if (num > 0) console.log("Positive");
else if (num < 0) console.log("Negative");
else console.log("Zero");
