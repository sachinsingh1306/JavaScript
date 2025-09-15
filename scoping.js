// global scope

// {
//     let a = 10;
//     // console.log(a);

// }
// console.log(a);

// function print() {
// var a = 10;
// console.log(a);
// }
// print();

// function outer() {
//   let value = 10;

//   function inner() {
//     console.log(value);
//   }
//   inner();
// }
// outer();

// function outer (){
//     let value = 10;

//     function inner (){
//         console.log(value);
//     }
//     return inner;
// }
// let res = outer();

// console.log(res);

// res();

// function sum (a,b, cb){
//     let res = a + b;
//     cb (res);
// }

// function printValue(res){
//     console.log(res);
// }

// sum(10, 20, printValue);




function makeMaggi(raw, cb) {
  console.log(" We are going to make a Maggi");
  cb();
}

function boilWater(cb) {
  console.log("Boiling the Water");
  cb();
}

function finalStep(cb) {
  console.log("Adding maggi & masal in oiling water");
  cb();
}

makeMaggi("raw", function () {
  boilWater(function () {
    finalStep(function () {
      console.log(makeMaggi);
    });
  });
});
