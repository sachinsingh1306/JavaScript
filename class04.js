// let response = {
//     status : 300,
//     data : {
//         name: "Sachin",
//         age : 30,
//         isEmployed : true,
//         address : {
//             street : "123 Main Str",
//             city : "Noida Sector",
//             state : "UK"
//         }
//     }
// }

// let { status } = response;
// console.log(status);

// let {data : {name}} = response;
// console.log(name);


//--------------------------------------------------------|

let response = {
    status : 300,
    header : {
        type : "json",
        version : 1.1,
    },
    body : {
        name : "Sachin",
        age : 30,
        isEmployed : true,
        address : {
            street : "123 Noida 123",
            city : "Noida",
            state : "UK",
        },
        footer : {
            type : "json",
            version : 1.1,
        },
    },
}

let {status } = response;
// console.log(status);

let {body : {isEmployed} } = response;
// console.log(isEmployed);

let {body : {address : {city}}} = response;
// console.log(city);

console.table({status, city, isEmployed});

//-------------------------------------------------------------|

// function sum (a, b){
//     return a + b;
// }
// let num = sum(2,3,5,3,);
// console.log(num);



// function sum (...args) {
//     let sum = 0;
//     for(let i = 0; i < args.length; i++){
//         sum += args[i]
//     }
//     return sum;
// }

// let num = sum(2,3,5,3,8,9,7);
// console.log(num);






