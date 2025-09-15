// Iterating Over String

// let displyMessage = "I am Student in GFG of the MERN";
// for(let char of displyMessage){
//     if(char === 'n'){
//         break
//     }else{
//         console.log(char);
        
//     }
// }

//-------------------------------------------------------------------------------------------------|

// let displyMessage = "I am Student in GFG of the MERN";
// let count = 0;
// for(let char of displyMessage){
//     if(char === 'n' || char === 'N'){
//         count++;
//     }
// }
// console.log(count);

//---------------------------------------------------------------------|

/**
 * String Method 
 * charAt() | charCodeAt()
 */

// const displyMessage = "I am Sachin Singh working at GFG"
// const index = 5; 

// const char = displyMessage.charAt(2);
// console.log(char);

// ASCI code

// const asciiCode = displyMessage.charCodeAt(index);
// console.log(`this ascii code of ${char} is ${asciiCode}`);

//---------------------------------------------------------------------|

/**
 * INdex of method 
 */

// const displyMessage = "I am mentor of the GFG";
// console.log(displyMessage.indexOf("a"));
// console.log(displyMessage.indexOf("t",5));
// console.log(displyMessage.indexOf("i",10));

// function findCharater (text, char){
//     const index = text.indexOf(char)
//     if(index === -1){
//         return "Charater not found";
//     }else {
//         return "Character found in the string"
//     }
// }
// const result = findCharater("I am Mentor at GFG", "G");
// console.log(result);


/**
 * string.include()
 */
const displyMessage = "I am Sachin Singh";
const vowels = "AEIOUaeiou";

for(let char of displyMessage){
    if(vowels.includes(char)){
        console.log("This String has Vowels");
    }else{
        console.log("This String does not have vowels.");
        
    }
}
