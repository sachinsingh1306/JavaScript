/**
 * Question 1: Print numbers 1 to 10
Use a loop to print all numbers from 1 to 10

let num = 10;
for(let i = 1; i <= 10; i++){
    console.log(i);
 */

//----------------------------------------------------------------|

/**
 * Question 2: Print only odd numbers from 1 to 20
Use a loop and logic (if) to print only odd numbers.

let num = 20;
for (let i = 1; i <= num; i++) {
  if (i % 2 !== 0) {
    console.log("Odd :",i);
  }
}
 */

//---------------------------------------------------------------------|

/**
 * Question 3: Sum of first 5 numbers
Calculate the sum of numbers from 1 to 5 using a loop

let sum = 0;

for(let i = 1; i <= 5; i++){
    sum = i + sum;
}
console.log(sum);
 */

//------------------------------------------------------------------------|

/**
 * Exercise 1: Print a number pattern.

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += j;
    }
    console.log(row);
}
 */

//---------------------------------------------------------------------|

/**
 * Object Question :-
 * let car = {
    brand : "BMW",
    model : "Sport-X5",
    year : 2005
}
console.log(car);

car.brand = "Toyota"
car.year = 2024
car.model = "Fortuner"
console.log(car);
 */

//------------------------------------------------------------------------------------|

/**
 * Exercise 1: Student Object
1. Create an object called student with keys: name, age, grades (array of numbers).
2. Print the student’s name and age.
3. Loop through grades and print each grade.

let student = {
    name : "Alok Ram",
    age : 25,
    gardes : {
        sem1 : "A",
        sem2 : "B",
        semFinal : "A++"
    }
}
console.log(Object.keys(student).length);

console.log(student.name, student.age);

for (let sem in student.grades) {
    console.log(sem + ": " + student.grades[sem]);
}

 */










