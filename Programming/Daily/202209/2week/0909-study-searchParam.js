const { URL } = require("url");

const myURL = new URL(
  "http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript"
);

console.log(myURL.searchParams);
// ! getAll(keyword)
// * console.log(myURL.searchParams.getAll("category"));
// ! keys()/values();
console.log(myURL.searchParams.values());
// ! append
myURL.searchParams.append("filter", "es3");
console.log(myURL.searchParams);
