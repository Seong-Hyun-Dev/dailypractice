const crypto = require("crypto");

// ! 해쉬함수 다이제스트가 88개로 떨어짐
// * console.log(
// *   crypto.createHash("sha512").update("비밀번호").digest("base64").length
// * );
// * console.log(
// *   crypto.createHash("sha512").update("안녕하세요").digest("base64").length
// * );

crypto.randomBytes(64, (err, buf) => {
  const salt = buf.toString("base64");
  // console.log("salt:", salt);
  crypto.pbkdf2("비밀번호", salt, 100000, 64, "sha512", (err, key) => {
    console.log("password:", key.toString("base64"));
  });
});
