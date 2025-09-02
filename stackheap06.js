// stack memory (primitive)
// heap memory (non-primitive)

let myYoutubename = "sachinblogs"

let anothername = myYoutubename
anothername = "hellosachin"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "one@gmail.com",
    upi: "userone@ybl"
}

let userTwo = userOne

userTwo.email = "sachin@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
