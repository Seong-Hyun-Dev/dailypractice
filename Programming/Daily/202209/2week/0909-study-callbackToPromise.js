// !

const fs = require("fs");
console.log("시작");

fs.readFile("./src/readme.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("1번", data.toString());
  fs.readFile("./src/readme.txt", (err, data) => {
    if (err) {
      throw err;
    }
    console.log("2번", data.toString());
    fs.readFile("./src/readme.txt", (err, data) => {
      if (err) {
        throw err;
      }
      console.log("3번", data.toString());
    });
  });
});
