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

// function getObject(name, city){
//     return {
// name : name,
// city : city
// name,
// city
//     }
// }
// const obj = getObject("Sachin", "Lucknow");
// console.log(obj);

// const student = "Sachin";
// const course = "HTML";

// console.log(student,course);

/**
 * For in
 */

// const obj = {
//     name : "Sachin",
//     city : "Noida"
// }

// const isPropertyFound = "age" in  obj;
// console.log(isPropertyFound);

// for(let key in obj){
//     console.log(key, obj[key]);
// }

//----------------------------------------------------------------|

/**
 * Object Reference & Shallow Copy
 */
// const person1 = {
//     name : "Sachin",
//     age : 25
// }

// const person2 = person1;

// person2.name = "Prakash";
// person1.age = 30;

// console.log(person1);
// console.log(person2);

// const person1 = {
//     name : "Sachin",
//     age : 25,
//     address : {
//         city : "Noida",
//         state : "UK"
//     }
// }

// const person2 = Object.assign({}, person1);
// // console.log(person2);
// person2.name = "Prakash";
// person2.address.city = "Agra";
// person2.address.state = "UP";
// person1.age = 30;

// console.log(person1);
// console.log(person2);

//-------------------------------------------------------------------|

/**
 * Optional Chaining
 */

// const user = {
//   name: "Sachin",
//   age: 25,
//   address: {
//     street: "Noida",
// city : "Mumbai"
//   },
//   likes: "Eat Sing Sleep Repeat",
//   getDisplayMessage: function () {
//     console.log("Welcome Sachin");
//   },
// };

// console.log(user.address.city);

//----SOLUTION 1

// if(user.address !== undefined){
//     console.log(user.address.city);
// }else{
//     console.log("Address Not Found");

// }

//-----------Sol2------

// console.log(user.address?.city);

// user.getDisplayMessage();
// console.log(user.getDisplayMessage?.());

// console.log(user.hobbies);

//-----------------------------------------------------------|

/**
 * Destructuring Objects
 */

// let obj = {
//   name: "Sachin",
//   address: {
//     state: "UP",
//     city: "Noida",
//     locality: "Sector 142",
//   },
//   course: ["html", "css", "java", "react.js", "redux"],
// };

// let {name, address ,course} = obj;

// let {name, ...rest} = obj;

// console.log(course);
// console.log(name,address,course);
// console.log(name);
// console.log(rest);

// let {name : uerName, address : userAddress} = obj;
// console.log(uerName);

// let {address: {city}} = obj;
// console.log(city);

// let {name, address : {city, state, locality}, course} = obj;

// console.log(state);

//--EXAMPLE 1------------
// const empolyees = {
//   engineer: {
//     em1: {
//       id: 1,
//       name: "Sachin",
//       occupation: "Front End Engineer",
//     },
//     em2: {
//       id: 2,
//       name: "Alok",
//       occupation: "Data Scientist",
//     },
//   },
//   placement: {
//     em3: {
//       id: 3,
//       name: "Aditya",
//       occupation: "Se. Executive",
//       acchivement : {
//         frist : "Hello",
//         second : "Hello Ma'am",
//         third : "Hello Buddy"
//       }
//     },
//   },
//   youtube: {
//     em4: {
//       id: 4,
//       name: "Jay Prakash",
//       occupation: "Youtuber",
//     },
//   },
// };

// let {engineer : {em2 : {name, occupation}}} = empolyees;

// console.log(name,occupation);
// console.log(empolyees);

// let { placement: { em3: { acchivement } } } = empolyees;

// console.log(acchivement);

//----------------------------------------------------------------------|
/**
 * Object Method
 */

// const obj = {
//     name : "Sachin",
//     age : 23,
//     city : "Mubai"
// }

// const entries = Object.entries(obj);
// console.log(entries);

// const keys = Object.keys(obj);
// console.log(keys);

// const value = Object.values(obj);
// console.log(value);

// let obj = {
// x : 10,
// y : 11,
// z : 13
// }

// let value = Object.values(obj);
// console.log(value);

//--------------------------------------------------------------------|
/**
 * this keywords
 * refers to the object that is exicuting the function
 */

// const obj = {
//     name : "Sachin",
//   displayMessage: function () {
//     console.log("Hello " + this.name);
//   },
// };

// obj.displayMessage();
// console.log(obj);

//--------------------------------------------------------------------|
/**
 * Call, apply, bind
 */

const user1 = {
  name: "Sachin",
  age: 24,
  sayHi() {
    console.log(this.name);
  },
};

const user2 = {
  name: "Alok",
  age: 20,
  sayHi() {
    console.log(this.name);
  },
};

const user3 = {
  name: "Riya",
  age: 34,
  sayHi() {
    console.log(this.name);
  },
};

const user4 = {
  name: "Aditya",
  age: 35,
};

function sayHi(degree, year) {
    console.log(this.name, degree, year);
  };

  user1.sayHi();
sayHi.call(user2);

sayHi.call(user1, "B.Tech", 2015);


sayHi.apply(user1, ["B.Tech - IT"]);

const result = sayHi.bind(user3 ,"B.Tech - CS");
result(2022);