import { log } from "console";
import fs, { writeFile } from "fs";

// Write file Opertaion
// fs.writeFileSync("sachin.pdf", "Hello World");
// fs.writeFileSync("sachin.txt", "Hello World");

// fs.appendFileSync("sachin.pdf", "\n hello World Sachin");

// Read Operation
// const data = fs.readFileSync("sachin.pdf", "utf-8");
// console.log(data);

// TO delete file...
// fs.unlinkSync("sachin.pdf");
// fs.unlinkSync("sachin.txt");

// Async Operation

// fs.writeFile("abc.pdf", "hello Sachin", (err) => {
//     if(err){
//         console.log(err);
//     }else {
//         console.log("file created");
//     }
// });


 fs.readFile("abc.pdf", "hello Sachin", (err) => {
    if(err){
        console.log(err);
    }else {
        console.log("File Read");
    }
});

