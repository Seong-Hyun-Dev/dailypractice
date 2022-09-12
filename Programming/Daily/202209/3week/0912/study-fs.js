const fs = require("fs");
let tmp = `console.log("hello");
console.log("It's made by computer");
`;
fs.writeFileSync("./test1.js", tmp, function () {
  console.log("created file.");
});
