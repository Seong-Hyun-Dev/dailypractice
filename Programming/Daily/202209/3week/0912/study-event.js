// ! Event를 만들기

const EventEmitter = require("events"); // ? events 라이브러리를 호출하고 클래스를 생성하고
const myEvent = new EventEmitter(); // ? 그 클래스를 호출해서 이벤트 객체를 생성한다.

// ** 함수를 생성하는 방법 : 1. addListener, 2.on

//! myEvent.addListener("event1", () => {
//!   console.log("이벤트1");
//! });

//! myEvent.on("event1", function () {
//! console.log("hello?");
//! });

myEvent.addListener("event1", () => {
  console.log("이벤트1");
});

myEvent.on("event1", function () {
  console.log("hello?");
});

// ? emit은 이벤트를 호출!
myEvent.emit("event1");

// ** once, removerAllListeners
