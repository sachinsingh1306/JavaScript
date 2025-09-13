// let array = [97,21,45,57,79,85];
// console.log(array);
// console.log(array[5]);

// let heroes = ["iroman", "hulk", "thor","batman"];
// console.log(heroes);

// let marks = [54,97,49,85,74,56,68];
// console.log(marks);
// console.table(marks);
// console.log(marks.length);

// TYPE OF ARRAY IS object.

// array Indices
// let marks = [54,97,49,85,74,56,68];
// console.log(marks[2]);
// console.log(marks[0]=66);
// console.log(marks);

// string = immutable
// array = mutable

// LOOPING OVER ARRAY

// let heroes = ["iroman", "hulk", "thor","batman","saktiman","loki","marvel"];
// for(let i = 1; i <= heroes.length; i++){
// }
// console.log(heroes);
// console.table(heroes);
// console.log(heroes.length);


// for of
// for(let hero of heroes){
//     console.log(hero);
// }


// let cities = ["delhi", "noida", "pune", "goa", "hyderabad", "gorakhpur"];
// for (let city of cities){
// console.log(city.toUpperCase());
// }


// Question 01.

// let marks = [85,97,44,37,76,60];

// let sum = 0;
// for (let val of marks){
    // sum = sum + val;
//     sum += val;
// }
// console.log(sum / marks.length);

// let avgMarks = sum / marks.length;
// console.log(`No. of Students ${marks.length} and the total marks of all students ${sum} the average of all students marks is ${avgMarks}`);


// Question 02.

// let items = [250, 645, 300, 900, 50];

// let i = 0; 
// for (let val of items){
//     let offer = val /10;
//     items[i] = items[i] - offer;
//     // console.log(`value after offer = ${items[i]}`);
//     i++
// }
// console.log(`Values after discount of 10 % = ${items}`);

// ------------OR---------------------

// for( let i = 0; i < items.length; i++){
//     let offer = items[i] / 10;
//     items[i] -= offer;
// }
// console.log(items);




// ARRAY METHODS 
// push() : add to end
// pop() : delete from end & return
// toString : convert array to string

// let foodItems = ["potatos", "tomato", "mango", "apple", "lichi"]

// foodItems.push("paneer","matar", "burger");
// console.log(foodItems);

// foodItems.pop();
// console.log(foodItems);

// console.log(foodItems.toString());


// Concat() : to join the multiple array and return new result

let marvel = ["ironman", "thor","hulk","dr strange","antman"];
let dc = ["superman","batman"];
let ind = ["krish","chotabheem"]

// let heroes = marvel.concat(dc, ind);
// console.log(heroes);


// unshift() : add to the starting point
// marvel.unshift("loki");
// console.log(marvel);

// shift() : to delete the frist one
// marvel.shift("loki")
// console.log(marvel);


// slice() : return a piece of the array
// console.log(marvel.slice(1,3));

// splice() : change in the original array (add, remove, update)
// splice(startIdx, delCount, newEl1....)

// marvel.splice(0,0,"sachin");
// console.log(marvel);


// Question 05.

let compy = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]

// a.
// compy.shift();
// console.log(compy);

// b.
compy.splice(2,1,"Ola");
console.log(compy);

// c.
compy.push("Amazon");
console.log(compy);


