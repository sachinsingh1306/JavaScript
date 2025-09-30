// function add(a,b){
//     return a + b;
// }

// function subtract(a,b){
//     return a - b;
// }

// function multiply(a,b){
//     return a * b;
// }

// function divide(a,b){
//     return a / b;
// }


// Named Export------------
// export {add, subtract, multiply, divide};

// Default Export-----------
// export default {add, subtract, multiply, divide} ;



//-----API Function-----------------------

async function getQuestions(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  const data = await response.json();
  return data;
}

export default getQuestions;
