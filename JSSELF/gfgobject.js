/**
 * Objects --> {key : value}
 */

// const obj = {} //ibject literals
// console.log(typeof obj); //object

// const obj = {
//   name: "Sachin",
//   age: 26,
//   job: "Student",
//   1: "Number One",
//   course: ["html", "css", "js", "python"],
// };
// console.log(obj);
// console.table(obj);

//---------------------------------------------------------------------|

// const obj = {
//   name: "Sachin",
//   age: 26,
//   job: "Student",
//   1: "Number One",
//   course: ["html", "css", "js", "python"],
//   "is Admin" : "true"
// };

// console.log(obj.name, obj.course);
// console.log(obj["job"]);
// console.log(obj["age"]);
// console.log(obj["is Admin"]);

//-----------------------------------------------------------------|

/**
 * Function as Object Property
 */

// const obj = {
//   name: "Sachin Singh",
//   greetMessage: function () {
//     console.log("Hello Sachin Welcome to GFG !!!!");
//   },
//   bye(){
//     console.log("Tata Bye Bye");
//   },
// };


// obj.greetMessage();
// obj.bye();
// console.log(obj);

//----------------------------------------------------------------|

/**
 * Addin Property to object 
 * computed property
 */

// const readlineSync = require("readline-sync");
// const key = readlineSync.question("What do you want to know about the mentor (name/age/city/state) -");
// const course = readlineSync.question("Which course do you want to learn (html/css/js/react.js/redux) - ");
// const obj = {
//   name: "Sachin",
//   age: 26,
//   [course] : "Course is not Available"
// };

// obj.city = "Noida";
// obj.state = "UP";
// console.log(obj);
// console.table(obj)

//--------------------------------------------------------------------------|

/**
 * Short Hand
 */

function getObject(name, city){
    return {
        // name : name,
        // city : city
        name,
        city
    }
}
const obj = getObject("Sachin", "Lucknow");
// console.log(obj);

const student = "Sachin";
const course = "HTML";

console.log(student,course);


