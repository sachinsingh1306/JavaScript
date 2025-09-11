// function makeSandwitch (bread , callback){
// console.log("The Bread Is Here To make the Sandwitch !");
// callback();
// }

// function stuffing(callback){
//     console.log("The material Added to the Bread");
//     callback();
// }

// function grilled(callback){
//     console.log("The Sandwitch goes to Grilled");
//     callback();
// }

// function ready(callback){
//     console.log("Ready to serve !!");
// }

// makeSandwitch("bread", function(){
//     stuffing(function(){
//         grilled(function(){
//             ready(function(){

//             });
//         });
//     });
// });

// let salary = [100,200,300,400,500];
// let salary2 = [600,700,800,900,1000];

// function calculateTenPercent(num){
//     return num * 0.1;
// }

// function calculateTwentyPercent(num){
//     return num * 0.2;
// }

// Array.prototype.calculateTax = function(calculateFn){
//     let res = [];
//     for (let i = 0; i < this.length; i++){
//         res.push(calculateFn(this[i]));
//     }
//     return res;
// }

// let finalOutput = calculateTax(salary, calculateTenPercent );
// console.log(finalOutput);

// console.log(salary2.calculateTax(calculateTwentyPercent));

// IIFE

// (function(a,b){
//     console.log(a + b);
// })(10,5);

// function makeSandwitch(bread, callback) {
//   console.log("The Bread Is Here To make the Sandwitch !");
//   callback();
// }

// function stuffing(callback) {
//   console.log("The material Added to the Bread");
//   callback();
// }

// function grilled(callback) {
//   console.log("The Sandwitch goes to Grilled");
//   callback();
// }

// function ready(callback) {
//   console.log("Ready to serve !!");
// }

// makeSandwitch("bread", function () {
//   stuffing(function () {
//     grilled(function () {
//       ready(function () {});
//     });
//   });
// });


function makeSandwich(bread, callback) {
  console.log("Step 1: Taking", bread);
  setTimeout(() => {
    console.log("Step 2: Adding stuffing...");
    callback();
  }, 5000);
}

function stuffing(callback) {
  setTimeout(() => {
    console.log("Step 3: Adding vegetables & sauce...");
    callback();
  }, 5000);
}

function grilled(callback) {
  setTimeout(() => {
    console.log("Step 4: Grilling the sandwich...");
    callback();
  }, 5000);
}

function ready(callback) {
  setTimeout(() => {
    console.log("✅ Sandwich is ready to serve!");
    callback();
  }, 5000);
}

// Execution (callback chain)
makeSandwich("bread", function () {
  stuffing(function () {
    grilled(function () {
      ready(function () {
        console.log("Enjoy your sandwich 😋");
      });
    });
  });
});
