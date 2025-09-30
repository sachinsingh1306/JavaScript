import { log } from "console";
import fs, { writeFile } from "fs";

// Write file operation..
// fs.writeFileSync("sachin.text", "Hello Sachin");
// fs.writeFileSync("sachin.pdf", "Hello Sachin");

//read operation....
// const data = fs.readFileSync("sachin.text", "utf-8");
// console.log(data);

// fs.appendFileSync("sachin.text", "\nHello world !!!");

//delete file-------------
// fs.unlinkSync("sachin.text");

// Async Operation-------------
writeFile("abc.pdf", "I am Hello World !!!", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("File Created");
  }
});
