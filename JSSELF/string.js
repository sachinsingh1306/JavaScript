// STRINGS
let string = "SACHINSINGH";
let string2 = 'ALOKBHAIYA';

//--------------------------------------------------------------------------------------------|

// Inbuilt properties :-
lenghth variable = .length

console.log(string.length);
console.log(string2.length);

//--------------------------------------------------------------------------------------------|

//Positions
console.log(string[4]);
console.log(string2[2]);

//--------------------------------------------------------------------------------------------|

// Template Literals
let sentence = `This is a template literals`;
console.log(sentence);
console.log(typeof sentence);

//--------------------------------------------------------------------------------------------|

// EXAMPLE
let obj = {
    item : "PEN",
    price : 200,
};
console.log("The cost of pen", obj.item, "is ", obj.price);
console.log(`The cost of the ${obj.item} is ${obj.price}`);

// The template literals......
let result = `The cost of the ${obj.item} is ${obj.price}`;
console.log(result);

// Escape Character
console.log("Hello\nNoida Sector 142");
console.log("Hello\tNoida Sector 142");

// LENGTH
let str = "Hello World\nHow\tare You !"
console.log(str.length);

//--------------------------------------------------------------------------------------------|

// STRING METHOD 
let str = "Sachin singh";
let newStr = str.toUpperCase();
console.log(str);
console.log(newStr);

// str.toLowwerCase()

let str = "SACHIN SINGH";
let newStr = str.toLowerCase();
console.log(str);
console.log(newStr);

// str.trim()

let str = "           Sachin Singh Hello !          ";
console.log(str.trim());

// str.slice(start, end?) ------return part of string

let str = "013654789";
console.log(str.slice(0,5));
console.log(str.slice());


// str1.concat(str2)--------joins str2 with str1

let str1 = "Hello ! ";
let str2 = "SACHIN SINGH";
let result = str1.concat(str2);
console.log(result);
console.log(str1 + str2);


// str.repalce(searchVal, newVal)

let str = "I love JS";
str =str.replace("love" , "am");
console.log(str);

//--------------------------------------------------------------------------------------------|

//Question 01.
//Prompt the user to enter their full name. Generate a username for them baased on the input Stat username with @, followed by their full name and ending with the fullname length.

let prompt = require("prompt-sync")();
let fullName = prompt("Enter a FullName :-");
let userName = "@"+ fullName + fullName.length;
console.log(`Username Should Be ${userName}`);











