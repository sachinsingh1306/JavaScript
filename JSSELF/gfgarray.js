/**
 * Array ---> Non-Primitive Datatype
 */

// let a1 = "Prakash";
// let a2 = "Sachin";
// let a3 = "Alok";
// let a4 = "Riya";

// let studentsName = ["Sachin", "Alok", "Riya", "Aditya", "Jay", "Yatharth", 1,2,3,4,5,6,7, ["HTML", "CSS", "JS"], {schoolName : "BBDNIIT"}];

// let studentsName = ["Sachin", "Alok", "Riya", "Aditya", "Jay", "Yatharth", "Amit","Kriti"];
// console.log(studentsName[1]);
// console.log(studentsName[2]);
// console.log(studentsName[3]);
// console.log(studentsName[4]);
// console.log(studentsName[5]);


// for(let i = 0; i<= 5; i++){
//     console.log(studentsName[i]); //studentName[2]
// }


// let  arrLength = studentsName.length;
// for(let i = 0; i< arrLength; i++){
//     console.log(studentsName[i]);
// }


// for let of
// for(let name of studentsName){
//     console.log(name);
// }

// for let in
// for(let name in studentsName){
//     console.log(name);
    
// }

//---------------------------------------------------------------------|

/**
 * Array Method Push & Concat
 */

// let fruits = ["apple", "mango", "banana"];
// console.log(fruits);
// fruits.push("orange");
// console.log(fruits);

// fruits.push("kiwi", "barries", "melons");
// console.log(fruits);

// let arr1 = [1,2,3.4,5];
// let arr2 = [6,7,8,9,0];
// let arr3 = [34,56,78,90];
// let arr4 = [1,2,3,4,5,6,7,8,9]

// let arr3 = arr1.concat(arr2)
// console.log(arr3);

// let arr5 = arr1.concat(arr2, arr3, arr4);
// console.log(arr5);

//---------------------------------------------------------------------|

/**
 * pop, slice, splice
 */

// let course = ["html", "css", "js", "rect.js", "node.js", "java"];
// console.log(course);
// let removedItem = course.pop();

// course.pop();
// console.log("updated course :- ", course);
// console.log("Removed Item :- ",removedItem);


// let course = ["html", "css", "js", "rect.js", "node.js", "java"];

// let value = course.slice(1,4);
// console.log(course);

// console.log(value);


// let name = "sachin";
// // console.log(name.slice(1));
// let fristUpperCaseChar = name[0].toUpperCase();
// let capitalizeName =fristUpperCaseChar + name.slice(1);

// console.log("Hi" , capitalizeName);

// let course = ["html", "css", "js", "rect.js", "node.js", "java"];
// course.splice(2,2,"python");
// console.log(course);

//---------------------------------------------------------|

/**
 * Include arr.includes(any)
 */

// const avilableSize = ["S","M", "L", "XL", "XXL", "XXXL"];

// const readlineSync = require("readline-sync");
// const userSize = readlineSync.question("Which size of Shirt do you want (S/M/L/XL/XXL/XXXL) - ");

// const isSizeAvailable = avilableSize.includes(userSize);
// if(isSizeAvailable){
//     console.log("Size is available Yes");
// }else{
//     console.log("Size not available ");
// }


// const avilableSize = ["S", "M", "L", "XL", "XXL", "XXXL"];

// const readlineSync = require("readline-sync");
// let userSize = readlineSync.question("Which size of Shirt do you want (S/M/L/XL/XXL/XXXL) - ");

// Convert to uppercase first
// userSize = userSize.toUpperCase();

// Now check availability
// const isSizeAvailable = avilableSize.includes(userSize);

// if (isSizeAvailable) {
//     console.log("Size is available ✅");
// } else {
//     console.log("Size not available ❌");
// }

//-----------------------------------------------------------------------|
/**
 * Array Sort method
 */

// const fruits = ["apple", "mango", "banana", "cheey", "orange", "blackberry"];
// fruits.sort();
// console.log(fruits);

// const number = [23,31,12,12,23,45,65,43,56,68,76,89,9,1,2,3,4,5,6,7,8,44];

// function sortInAscendingOrder (a,b){
//     return a - b;
// }

// function sortInDescendingOrder(a,b){
//     return b -a;
// }

// number.sort(sortInDescendingOrder);

// number.sort(sortInAscendingOrder);
// console.log(number);

//----------------------------------------------------------------------|

/**
 * Split and join
 */

// const inputStr = "madam may i come in";
// const arr = [1,2,3,4,5];

// const arrOfChar = inputStr.split("");

// arrOfChar.reverse("");
// console.log(arrOfChar);


// const reverseStr = arrOfChar.join("")
// console.log(reverseStr);

//-----------------------------------------------------------------------|

/**
 * spread
 * ...arr
 */

// const arr1 = [1,2,3,4];
// const arr2 = [7,8,9,10];

// console.log(...arr1,...arr2);

// const arr3 = [...arr1, 5,6, ...arr2,11,12,13,14,15];

// console.log(arr3);

//-----------------------------------------------------------------------------|

/**
 * Destructuring array
 */

// const number = [1, 2, 3, 4, 5];
// const [a, b, c, d, e, course] = [1, 2, 3, 4, 5, ["HTML", "CSS", "JS"]];

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(course);


// const arr = [["HTML", "CSS", "JS"],1, 2, 3, 4, 5];

// const [ , , , , ,course, a] = arr

// const [course,a,b,...rest] = arr
// console.log(arr);
// console.log(course);

// let a = 5;
// let b = 10;

// [a,b] = [b,a];

// console.log(a);
// console.log(b);

//-------------------------------------------------------------------|

/**
 * copying an array --> array reference
 */

let arr1 = [1, 2,3];
let arr2 = arr1;

console.log("Arr1 - ", arr1);
console.log("Arr2 - ", arr2);

arr2.push(4);
console.log("updated value of Arr1 -", arr1);
console.log("updated value of Arr2 -", arr2);

