const name = "sachin"
const repoCount = 40

console.log(name + repoCount + "Value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('Sachin')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf('S'));


const newString = gameName.substring(0 ,4)
console.log(newString);

const anotherString = gameName.slice(-6, 4)
console.log(anotherString);

const newStringOne = "     Hitesh     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.youtube.com/watch?v=fozwNnFunlo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=11"

console.log(url.replace('watch?v=fozwNnFunlo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=11'));






