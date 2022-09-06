// ! 프로미스 원형
{
  let tmp = 0;
  let promise = new Promise(function (resolve, reject) {
    // executor(실행함수 || 실행자)
    // ! 함수도 값으로 넘길 수 있다.
    // function random() {
    //   console.log("랜덤");
    // }

    // ! 스태틱값을 넘기기
    let a = 10;
    setTimeout(() => resolve(a), 100);
  }).then((a) => {
    // console.log(a);
  });
}

// ! ** 프라미스 안에서 값을 꺼내기 => 뒤로 미룸 ( 안됨 )
{
  let tmp = 0;
  let promise = new Promise((res, rej) => {
    let number = 30;
    res(30);
  });
  promise.finally((result) => {
    tmp = result;
  });
  // console.log(tmp);
}

// ! Promise를 활용하기#1
{
  function promise() {
    return new Promise(function (resolve, result) {
      let a = 3;
      if (a === 2) {
        resolve("success");
      } else {
        reject("failed");
      }
    });
  }

  promise()
    .then((msg) => {
      // console.log("This is in the then " + msg);
    })
    .catch((msg) => {
      // console.log("This is in the catch" + msg);
    });
}

// ! Promise를 활용하기#2 (직접)
{
  // ? 1. 일반 함수를 만든다. -> 반환 값을 new Promise로 한다.
  function promise() {
    return new Promise(function (resolve, reject) {
      let a = 2;
      if (a === 2) {
        resolve("성공");
      } else {
        reject("실패");
      }
    });
  }
  promise()
    .then((result) => {
      console.log("then: " + result);
    })
    .catch((error) => {
      console.log("error: " + error);
    })
    .finally(() => {
      console.log("finally: 끝");
    });
}

// ! Promise 체이닝
{
  // function promise(a) {
  //   return new Promise(function (resolve, reject) {
  //     resolve(a);
  //   });
  // }
}
