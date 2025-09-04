/**
//  * Array........
//  */
// const myArr = [0, 1, 2, 3, 4, 5, "sachin"]
// const myHeros = ["ironman","naagraj","marvel"]

// console.log(myArr[5]);

// Array Methods
// myArr.push(6)
// myArr.push(8)
// myArr.pop();


// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));

// console.log(myArr.indexOf(5));

// console.log(myArr);

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

// console.log(typeof newArr);
// console.log(typeof myArr);


// Slice , splice

// console.log("A", myArr);

// const myn1 = myArr.slice(1.3)

// console.log(myn1);
// console.log("B", myArr);

// const myn2 = myArr.splice(1, 3)
// console.log("C", myArr);
// console.log(myn2)


/**
 * Array Function
 *  
//  */

// const marvel_heros = ["thor", "ironman", "spiderman"]
// const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)

// marvel_heros.concat(dc_heros)
// console.log(allHeros);

// const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);


// const another_arrray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4,8]] ]
// console.log(another_arrray);

// const real_another_array = another_arrray.flat(Infinity)
// console.log(real_another_array);;


// map************************************

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// // const newNums = myNums.filter( (num) => num > 4)

// const newNums = myNums.filter((num) => {
// return num > 4
// })
// console.log(newNums);

// const myNumers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumers.map((num) => num * 10)
// .map((num) => num + 1)
// .filter((num) => num >= 20)
// console.log(newNums);

/***
 * reduce 
 */

const shoppingCart =[
    {
    itemName : "js course",
    price : 2999
},
{
    itemName : "py course",
    price : 3999
},
{
    itemName : "java course",
    price : 2599
},
{
    itemName : "data Science",
    price : 3399
},
{
    itemName : "MERN",
    price : 1299
}
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item. price, 0)

console.log(priceToPay);

























