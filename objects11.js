// /**
//  * objects
//  * singleton
//  *
//  * object literals
//  */
// // Object.creat

// // object literals

// const mySym = Symbol("Key1")

// const JsUser = {
//     name: "Sachin",
//     "full_name": "Sachin Singh",
//     age: 23,
//     location: "Noida",
//     email: "sachin@gmain.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday","Saturday"],
//     [mySym]: "Key1"
// }

// // console.log(JsUser.email);
// // console.log(JsUser["email"]);
// // console.log(JsUser["full_name"]);
// // console.log(JsUser[mySym]);

// JsUser.email = "alok@gmail.com"

// // Object.freeze(JsUser)

// JsUser.email = "aditya@gmail.com"
// // console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS User");
// }

// // console.log(JsUser.greeting());

// JsUser.greetingTwo = function(){
//     console.log(`Hello JS User ${this.full_name}`)
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

// const tinderUser = new Object()

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sachin";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUer = {
  email: "sachin@gmail.com",
  fullname: {
    userfullname: {
      fristname: "Sachin",
      lastname: "Singh",
    },
  },
};

// console.log(regularUer.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 ={obj1,obj2}

// const obj3 = Object.assign({},obj1, obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3);

const user =[
    {
        id : 1,
        email: "sachin@gmail.com"
    },
    {
        id : 1,
        email: "sachin@gmail.com"
    },
    {
        id : 1,
        email: "sachin@gmail.com"
    },
    {
        id : 1,
        email: "sachin@gmail.com"
    },
    {
        id : 1,
        email: "sachin@gmail.com"
    }
]

user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));

console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));










