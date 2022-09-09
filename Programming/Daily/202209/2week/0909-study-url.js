const url = require("url");
const { URL } = url;
const myURL = new URL("https://www.youtube.com/watch?v=yU19mWfCIdg");

let parsed = url.parse("https://www.youtube.com/watch?v=yU19mWfCIdg");
console.log(parsed.query);

let arr = parsed.query.split("=");
console.log(arr[0]);
console.log(arr[1]);
