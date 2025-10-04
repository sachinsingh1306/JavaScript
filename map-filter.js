// const arr = [1, 2, 3, 4, 5, 6];

// function squarOfNumber(arr) {
//   const tempArr = [];
//   for (let number of arr) {
//     tempArr.push(number ** 2);
//   }
//   return tempArr;
// }

// const result = squarOfNumber(arr);
// console.log(result);

// const arr = [1, 2, 3, 4, 5, 6];

// function getSquare(number){
//     return number ** 2;
// }

// const output = arr.map(getSquare);
// console.log(output);
// console.log(typeof output);

// const arr = [1, 2, 3, 4, 5, 6];
// const result = arr.reverse();
// console.log(result);

// const arr = [1, 2, 3, 4, 5, 6];

// const squarOfNumber = arr.map((number) => {
//     return number ** 2;
// });

// const squarOfNumber = arr.map((number) => number ** 2);
// console.log(squarOfNumber);

//-----------------FILTER-------------------------------------|

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result = arr.filter(number => number > 5);
// console.log(result);

const result = arr.filter((number) => {
  return number > 5;
});
console.log(result);



