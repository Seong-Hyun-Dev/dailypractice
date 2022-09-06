// ! Timer, 60fps(Frame Per Second)

let num = 0;
let a = setInterval(function () {
  num++;
  console.log(num);
  if (num === 60) {
    clearInterval(a);
  }
}, 16); // * console.log(1000 / 16); // 62.5번
