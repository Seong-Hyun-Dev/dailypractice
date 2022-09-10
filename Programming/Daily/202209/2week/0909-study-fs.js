let fs = require("fs");

// ! readFile 분석 -> 파라미터 : 파일경로, 콜백(에러, 데이터)
fs.readFile("./src/readme.txt", (err, data) => {
  if (err) {
    throw err;
  }
  // ! toString을 하기 전에는 바이트 버퍼로 떨어진다.
  // *console.log(data);
  // ! toString을 했을 때는 string으로 변환되어서 출력된다.
  // *console.log(data.toString());
});

// ! readFile은 콜백이므로 비동기함수로 변환해서 사용함.
fs = fs.promises;
fs.readFile("./src/readme.txt")
  .then((data) => {
    console.log(data);
    console.log(data.toString());
  })
  .catch((err) => {
    console.error(err);
  });

// ! writeFile로 파일 만들기
fs.writeFile("./src/writeme.txt", "글이 입력됩니다.")
  .then(() => {
    return fs.readFile("./src/writeme.txt");
  })
  .then((data) => {
    console.log(data.toString());
  })
  .catch((err) => {
    console.error(err);
  });
