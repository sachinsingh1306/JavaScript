// function SayMyName (){
//     console.log("S");
//     console.log("A");
//     console.log("C");
//     console.log("H");
//     console.log("I");
//     console.log("N");
// }
// SayMyName()

// function addTwoNumber(number1, number2){
// console.log(number1 + number2);
// }

// addTwoNumber(3,5)
// addTwoNumber(3, null)

// function addTwoNumber(number1, number2){
// let result = number1 + number2
// return result

// return number1 + number2
// }

// const result = addTwoNumber(4,5)
// console.log("Result :", result);

// function loginUserMessage(username = "sachin"){
// if(username === undefined){
//     console.log("Please enter username");
//     return
// }

//     if(!username){
//         console.log("Please enter username");
//         return
//     }
//     return `${username} just logged in`
// }

// loginUserMessage("Hitesh")

// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage("Alok"));

// function calculateCartPrice (...num1){
//     return num1
// }

// console.log(calculateCartPrice(200, 100, 500, 2000));

// const user = {
//     username : "hitesh",
//     price : 199
// }

// function handelObject(anyObject){
//     console.log(`Username is ${anyObject.username} and prices is ${anyObject.price}`);
// }

// // handelObject(user);

// handelObject(
//     {
//         username: "Sam",
//         price: 999
//     }
// )

// const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray){
//     return getArray[0]
// }
// console.log(returnSecondValue(myNewArray));

//*******************Arrow Function ***************************/

//  const user = {
//     username : "sachin",
//     price : 999,

//     welcomeMessage : function (){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);

//     }
//  }

// user.welcomeMessage()
// user.username = "Alok"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//   let username = "Sachin";
//   console.log(this.username);
// }

// chai();


// const chai = finction (){
//     let username = "Sachin"
//     console.log(this.username);
// }


// function chai(){
//     let username = "Sachin"
//     console.log(this.username);
    
// }

// const chai = function () {
//     let username = "Sachin"
//     console.log(this.username);
// }


// const chai = () => {
//     let username = "Sachin"
//     console.log(this);
// }

// chai()


// const addTwo = (num1, num2) =>{
//     return num1  + num2
// }
// console.log( addTwo(3,4));

// const addTwo = (num1, num2) => (num1 + num2)

// const addTwo = (num1, num2) => ({username: "sachin"})
// console.log(addTwo(3,5));


/************Imediately invoked function expression (IIFE)**********/

// (function chai(){
//     console.log(`DB connected`);
// })();

// (function nextchai(){
//     console.log(`DB connected`);
// })();

// ((name) => {
//     console.log(`${name} DB connected`);
// })('Sachin')


