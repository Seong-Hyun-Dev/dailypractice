const path = require("path");
const string = __filename;
console.log(string);
console.log(path.sep);
console.log(path.delimiter);
console.log(path.dirname(__filename));
console.log(path.parse(__filename));
let pp = path.parse(__filename);
console.log(pp.base);
console.log(pp.name);
console.log(pp.ext);
console.log(path.format(pp));
console.log(
  path.relative(
    "/Users/x/Desktop/Local/Github/DailyPractice/Programming/Algorithm/Practice/Kakao/kakao2022_lv1_1.js",
    "/Users/x/Desktop/Local/Github/DailyPractice/Programming/Daily/202209/2week/0909-study14-exit.js"
  )
);
