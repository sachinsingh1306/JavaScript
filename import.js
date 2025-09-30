//---------------Named Import------------------------------------
// import {add, subtract, multiply, divide} from "./index.js";

// console.log(add(10, 15));
// console.log(subtract(50, 15));
// console.log(multiply(10, 15));
// console.log(add(150, 15));

//--------------------------Default Import-------------------------

// import operation from "./index.js";

// console.log(operation.add(10,20));

// main.js


//--------------Import API Function-------------

import getQuestions from "./index.js";

(async () => {
  try {
    const user = await getQuestions("sachinsingh1306");
    console.log(user);
  } catch (err) {
    console.error(err.message);
  }
})();

