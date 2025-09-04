// let i = 0
// while (i <= 10) {
//     console.log(`value of index is ${i}`);
//     i = i + 2
    
// } 

// let myArray = ["ironman", "hulk", "superman", "hanuman"]

// let arr = 0;
// while (arr < myArray.length) {
//     console.log(`value is ${myArray[arr]}`);
//     arr = arr + 1;
// }


// const arr = [1,2,3,4,5]

// for(const num of arr) {
//     console.log(num);
    
// }

// const greetings = "Hello World !"
// for (const greet of greetings){
//     console.log(`each char is ${greet}`);
    
// }


// maps 

// const map = new Map()
// map.set('IN', "INDIA")
// map.set('USA', "United State Of America")
// map.set('FR', "France")

// // console.log(map);

// for (const [key, value] of map){
//     console.log(key,":-" ,value);
    
// }

// const myObject = {
//     'game1': 'NFS'
//     'game2' : 'Spiderman'
// }

// for (const [key,value] of myObject){
//     console.log(key, ":-", value);
    
// }


// const myObject = {
//     js : 'javascript',
//     cpp : 'c++',
//     rb : 'ruby',
//     swift : 'swift by apple'
// }

// for (const key in myObject){
//     console.log(`${key} shotcut for ${myObject[key]}`);
    
// }


/****For each loop */
const coding = ["js","python","c++","java","ruby"]
// coding.forEach( function (item) {
//     console.log(item);
    
// })

function printMe (item){
    console.log(item);
    
}
coding.forEach(printMe);


 