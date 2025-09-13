// FUNCTION
// block of code that performs a specific task can be invoke whenever needed

console.log("hello !");
"abc".toUpperCase();
[1, 2, 3, 4].push(6);

//--------------------------------------------------------------------------------------------|

// //Function Defination
function functionName(){
    do some work
}

function functionName(param1, param2...){
    do some work
}

Function Call 

functionName();

//--------------------------------------------------------------------------------------------|

function myFunction (){
    console.log("Welcome to the Noida !");
    console.log("I am learning JS");
}
myFunction();
myFunction();

//--------------------------------------------------------------------------------------------|

// redendency --> minimise the repeat of code

function myFunction(msg){
    parameter --> input
    console.log(msg);
}
myFunction("I love JS.."); //argument

//--------------------------------------------------------------------------------------------|

// Function sum of number

function sum(a, b){

    console.log("Before Return");
    local variables -> scope
    add = a + b;
    return add;
    console.log("After return");
}

let value = sum(3,9);
console.log(value);

Sum of 2 number
function sum(a ,b){
    return a + b;
}

let result = sum(23, 45);
console.log(result);

//--------------------------------------------------------------------------------------------|

// Multiplication function
function multiply(x, y){
    return x * y;
}
let result = multiply(98,2);
console.log(result);

//--------------------------------------------------------------------------------------------|


// ARROW FUNCTION 
// compact way to writing a function

const functionName (param1, param2,......) =>{
    do some work 
}

let arrowSum = (a, b) =>{
    console.log( a + b);
}
arrowSum(3,8);

function multiply(a, b){
    return a*b;
}
let result = multiply(2.4);
console.log(multiply);


let sumFunction = (a,b) =>{
    return a + b;
}
let result = sumFunction(3,14)
console.log(result);

let printHello = () =>{
    console.log("Hello");
}
printHello();

//--------------------------------------------------------------------------------------------|

// Question 02.
// Vowels...

function countVowels(string){
    let count = 0
    for(let char of string ){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }console.log(count);
}
countVowels("sachin singh")


let countVowels = (string) => {
    let count = 0
    for(let char of string ){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }console.log(count);
}
countVowels("hello every one in the world");

//--------------------------------------------------------------------------------------------|


// FOR EACH in ARRAYS

let arr = [1,2,3,4,5,6];

arr.forEach(function printValue(value) {
    console.log(value);
});


let arr = ["pune", "mumbai", "delhi", "gujrat"];

arr.forEach((val, indx, arr) => {
    console.log(val.toUpperCase(), indx, arr);
});


let num = [1,2,3,4,5,6];

num.forEach((num) => {
    console.log(num * num);
    
})

//--------------------------------------------------------------------------------------------|


// ARRAY IN MAP

let num = [67,52,45,68,98];

let newArr = num.map((val) => {
    return val * 5;
})

console.log(newArr);
console.log(num);

//--------------------------------------------------------------------------------------------|
 
// FILTER ARRAY

let num = [23,45,65,78,90,10,24,12,6,8,26,99]

let evenArr = num.filter((val) => {
    return val % 2 === 0;
});
console.log(evenArr);


let marks = [23,45,65,78,90,10,24,12,6,8,26,99];

let topper = marks.filter((val) => {
    return val > 70;
})

console.log(topper);

//--------------------------------------------------------------------------------------------|

// Question 03.

let prompt = require("prompt-sync")();
let num = prompt("Enter Number :- ");

let arr = [];

for(let i = 1; i<= num; i++) {
    arr[i - 1] = i;
}
console.log(arr);

let sum = arr.reduce((result , current) =>{
    return result + current;
});

console.log(sum);

let factorial = arr.reduce((result , current) =>{
    return result * current;
});

console.log(factorial);