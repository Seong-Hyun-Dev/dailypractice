// ! * 여기서의 closure는 sayHi이다.
// !   원래는 바깥환경에서 다른 함수안의 변수에 접근할 수 없는데,
// !   바깥함수에서 return을 통해서 반환하고 그 변수를 받으면 계속
// !   Access 할 수 있다.

// ? - 기본개념 -
{
  let name = "John";
  function greeting() {
    let message = "Hi";
    function sayHi() {
      console.log("message");
    }
    return sayHi;
  }
  let msg = greeting();
  console.log(msg());
}

// ? - 응용 #1-
{
  function greeting1(message) {
    return function (name) {
      return message + " " + name;
    };
  }
  let sayHi = greeting1("Hi");
  let sayHello = greeting1("Hello");

  console.log(sayHi("John")); // Hi John
  console.log(sayHello("John")); // Hello John
}

{
  function greeting2(message) {
    return function (name) {
      return message + " " + name;
    };
  }

  sayHello = greeting2("hey");
  sayHelloFin = sayHello("john");
  console.log(sayHelloFin);
}

// ? - 응용 #2 -
// ! 잘 이해가 안감...
// ! 선수개념 : setTimeout과 IIFE와 Closure와 let,const - var
// * 기존
{
  // for (var index = 1; index <= 3; index++) {
  //   setTimeout(function () {
  //     console.log("after " + index + " second(s):" + index);
  //   }, index * 1000);
  // }
}

// * 변환 - immediately invoked function expression ( IIFE )
{
  // for (var index = 1; index <= 3; index++) {
  //   (function (index) {
  //     setTimeout(function () {
  //       console.log("after " + index + " second(s):" + index);
  //     }, index * 1000);
  //   })(index);
  // }
}

for (var index = 1; index <= 3; index++) {
  (function (index) {
    setTimeout(function () {
      console.log("after " + index + " seconde(s):" + index);
    });
  })(index);
}
