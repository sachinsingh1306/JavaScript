let a = 10;
const b = 20;
var c = 30;

console.log(a);
console.log(b);
console.log(c);

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}
console.log(a);
console.log(b);
console.log(c);

let a = 300
if (true) {
  let a = 10;
  const b = 20;
  console.log("Inner :",a);

}
console.log(a);

var c = 200
if(true){
    let a = 10
    const b = 20
    c = 30
}
console.log(c);

function one() {
  const username = "alok";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);

  two();
}
one();


if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        console.log(username + website);
    
    }
    console.log(website);
    
}

console.log(username);


++++++++++++++++++ intersting +++++++++++++++++++++
console.log(addone(5));

function addone(num){
    return num + 1
}

addone(5)


addTwo(5) it gives error

const addTwo = function(num){
    return num + 2
}
addTwo(5)










