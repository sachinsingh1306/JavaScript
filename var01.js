console.log("Sachin");

const accountId = 1234321;
let accountEmail = "sachin@gmail.com";
var accountPassword = "12345";
accountCity = "Noida";
let accountState;

// accountId = "121212"   => not allowed

accountEmail = "abc@gmail.com";
accountPassword = "54321";

console.log(accountId);

console.table({ accountId, accountEmail, accountPassword, accountCity, accountState});

console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);

// O/p:-
// Sachin
// 1234321
// ┌─────────────────┬─────────────────┐
// │ (index)         │ Values          │
// ├─────────────────┼─────────────────┤
// │ accountId       │ 1234321         │
// │ accountEmail    │ 'abc@gmail.com' │
// │ accountPassword │ '54321'         │
// │ accountCity     │ 'Noida'         │
// │ accountState    │ undefined       │
// └─────────────────┴─────────────────┘
// ┌─────────┬─────────────────┐
// │ (index) │ Values          │
// ├─────────┼─────────────────┤
// │ 0       │ 1234321         │
// │ 1       │ 'abc@gmail.com' │
// │ 2       │ '54321'         │
// │ 3       │ 'Noida'         │
// │ 4       │ undefined       │
// └─────────┴─────────────────┘

// {} ,if(){} etc all these are scope

/**
 * prefer not to use the var because of issue in the block scope and functional scope
 */

var a = 10;
var a = 20;
console.log(a);
// O/p :- 20


let a = 10;
console.log(a);
// O/p:- 10

let a = 10;
a = 20;
console.log(a);
// o/p:- 20

let a = 30;
let a =20;
console.log(a);
// o/p:-
// let a =20;
//     ^

// SyntaxError: Identifier 'a' has already been declared


const a = 10;
console.log(a);
// o/p:- 10

const a = 10;
a = 20;
console.log(a);
// o/p:-
// a = 20;
//   ^

// TypeError: Assignment to constant variable.


const a = 20;
const a = 30;
console.log(a);
// o/p:-
// const a = 30;
//       ^

// SyntaxError: Identifier 'a' has already been declared

