let str = "hello=world;char=utf-8;mime=sori;";
const parseCookies = (cookie = "") => {
  // return cookie.split(";"); // ! 1차원 배열로 변환 : [ 'hello=world', 'char=utf-8', 'mime=sori', '' ]
  // return cookie.split(";").map((v) => v.split("=")); // ! 2차원 배열로 변환 : [[ 'hello', 'world' ],[ 'char', 'utf-8' ],[ 'mime', 'sori' ],['']]
  return cookie
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc, [k, v]) => {
      // console.log("k,v: ", k, v);
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});
};
let refined = parseCookies(str);
console.log(refined);
