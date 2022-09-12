// ! 내부적으로 스레드풀을 사용하는 모듈이 있음.
// ! 그 중 하나를 이용해서 스레드풀이 무엇인지 살펴봄
const crypto = require("crypto");
const pass = "pass";
const salt = "salt";
const start = Date.now();

// ? 내부적으로 스레드풀이 동작한다.
// ?? 1,2,3,4가 동시에 동작하고
// ?? 그 이후에 5,6,7,8이 동작하는 것은
// ?? 스레드풀을 동시에 움직이기 때문임.

// ? 스레드풀을 직접 컨트롤 할 수는 없음
// ?? 스레드풀의 갯수를 조정할 수는 있는데,
// ?? process.env.UV_THREADPOOL_SIZE
// ?? 을 설정하는 명령어임

crypto.pbkdf2(pass, salt, 1000000, 128, "sha512", () => {
  console.log("1:", Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1000000, 128, "sha512", () => {
  console.log("2:", Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1000000, 128, "sha512", () => {
  console.log("3:", Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1000000, 128, "sha512", () => {
  console.log("4:", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, "sha512", () => {
  console.log("5:", Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1000000, 128, "sha512", () => {
  console.log("6:", Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1000000, 128, "sha512", () => {
  console.log("7:", Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1000000, 128, "sha512", () => {
  console.log("8:", Date.now() - start);
});
