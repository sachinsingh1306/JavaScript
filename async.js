// const p1 = Promise.resolve("Sachin");
// p1.then((res) => {
//   console.log(res);
// });


//------------------------------------------------------------

// const a1 = Promise.reject("404 not Found !");

// const a2 = Promise.resolve("Success");

// const a3 = Promise.resolve("Succes Last");

// Promise.allSettled([a1, a2, a3])

// .then((result) =>{
//     console.log(result);
// })
// .catch((error) =>{
//     console.log(Error);
// });

//------------------------------------------------------------

const a1 =  Promise.resolve("Task 1 completed");
const a2 =  Promise.resolve("Task 2 completed");
const a3 = Promise.reject("Task 3 failed");

Promise.all([a1, a2, a3 ])

    .then((results) => console.log(results))
    .catch((error) => console.error(error));

    