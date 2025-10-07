// Palindrom String.......

// const str = "MADAM";

// const reversedStr = str.split("");
// const newStr = reversedStr.reverse("");
// const joinStr = newStr.join("");
// console.log(joinStr);

// const newStr = str.split("").reverse("").join("");

// if(str === newStr){
//     console.log("String is a Palindrom");
// }else{
//     console.log("String is not a Palindrom");
// }

//=============================================================//

// const arr = [1,2,3,4,5,6,7];
// const newArr = arr.reverse();
// console.log(newArr);

//================================================================//

// const str = "malayalam";

// function getReversedStr(str) {
//   let reversedStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr = reversedStr + str[i];
//   }
//   return reversedStr;
// }

// const result = getReversedStr(str);

// if (result === str) {
//   console.log("String is a Palindrom");
// } else {
//   console.log("String is not a Palindrom");
// }

// console.log(result);

//=================================================================//

//---WAP to delete all the vowels from a string.-------------

// const string = "The quick brown fox jumps over the lazy dog";
// function getStrWithVowels(str){
//     const vowels = ["a", "e", "i", "o", "u" ];
//     let result = "";
//     for(let char of str){
//         if(!vowels.includes(char.toLowerCase())){
//             result += char;
//         }
//     }
//     return result;
// }
// const updatedStr = getStrWithVowels(string);
// console.log(updatedStr);

//==================================================================//

// const string = "The quick brown fox jumps over the lazy dog";

// function getVowelsFromString(str) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let result = "";

//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i].toLowerCase())) {
//       result += str[i];
//     }
//   }

//   return result;
// }

// const result = getVowelsFromString(string);
// const newResult = string.length - result.length;

// console.log(result);
// console.log(result.length);

// console.log(newResult);

//=====================================================================//

//------MASK THE LAST 4 CHAR---------//

// const str = "12345678901234566789";

// const maskChar = "#".repeat(4);
// const result = str.slice(0, str.length - 4) + maskChar;
// console.log(result);

//=================================================================//

//---ENCODED Character---------------------

const inputStr = "sachinsingh";

const getEncodedStr = str => {
    let encodedStr = "";
    let currentPos = 0;
    
}
