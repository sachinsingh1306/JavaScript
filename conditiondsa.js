Question 1.
To take input inside the website-----------
let age = Number(prompt("What is your age ?"));

if(isNaN(age)){
    console.log("Enter Valdi Input");
}else if (age <= 18){
    console.log("You can Vote !");
}else{
    console.log("You cannot Vote !!");
}

take the input in the terminal inside vs only------------

let prompt = require("prompt-sync")();

let age = Number(prompt("What is your age? "));
if (isNaN(age)) {
  console.log("Enter Valdi Input");
} else if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}

Question 2.

let prompt = require("prompt-sync")();

let amount = Number(prompt("What is the final Bill ?"));
let discount;

if(amount > 0 && amount <= 5000){
    console.log(amount)
}else if (amount > 5001 && amount <= 7000){
    console.log(amount - Math.floor((5*amount)/100));
}else if (amount > 7001 && amount <= 10000){
    console.log(amount - Math.floor((15*amount)/100));
}else if (amount > 15000){
    console.log(amount - Math.floor((25*amount)/100));
}else if(isNaN(amount) || amount < 0){
    console.log("Enter Valid Amount !!");
}

-------------OR-----------

if(amount > 0 && amount <= 5000){
    discount = 0;
}else if (amount > 5001 && amount <= 7000){
discount = 5
}else if (amount > 7001 && amount <= 10000){
    discount = 15
}else if (amount > 15000){
    discount = 25
}else if(isNaN(amount) || amount < 0){
    console.log("Enter Valid Amount !!");
}
console.log(amount - Math.floor((discount*amount)/100));

Question 3.
Electricity Bills

let prompt = require("prompt-sync")();

let unit = Number(prompt("Enter Electric Bill Amount :- "));
let amount = 0;

if (unit > 400) {
  amount = (unit - 400) * 13;
  unit = 400;
}
if (unit > 200 && unit <= 400) {
  amount += (unit - 200) * 8;
  unit = 200;
}
if (unit > 100 && unit <= 200) {
  amount += (unit - 100) * 6;
  unit = 100;
} else if (isNaN(unit) || unit < 0) {
  console.log("Enter Valid Unit !!");
} else {
  amount += unit * 4;
}
console.log(amount);

Question 3.
INR Notes

let prompt = require("prompt-sync")();

let amount = Number(prompt("Enter Amount To Know about Notes..."));

if(amount >= 500){
    console.log("500 Rs. Note :" +Math.floor(amount / 500));
    amount = amount % 500;
}
if(amount >= 200){
    console.log("200 Rs. Note :" +Math.floor(amount / 200));
    amount = amount % 200;
}
if(amount >= 100){
    console.log("100 Rs. Note :" +Math.floor(amount / 100));
    amount = amount % 100;
}
if(amount >= 50){
    console.log("50 Rs. Note :" +Math.floor(amount / 50));
    amount = amount % 50;
}
if(amount >= 20){
    console.log("20 Rs. Note :" +Math.floor(amount /20));
    amount = amount % 20;
}
if(amount >= 10){
    console.log("10 Rs. Note :" +Math.floor(amount / 10));
    amount = amount % 10;
}
if(amount >= 5){
    console.log("5 Rs. Coin :" +Math.floor(amount / 5));
    amount = amount % 5;
}
if(amount >= 2){
    console.log("2 Rs. Coin :" +Math.floor(amount / 2));
    amount = amount % 2;
}
if(amount >= 1){
    console.log("1 Rs. Coin :" +Math.floor(amount / 1));
    amount = amount % 1;
}

