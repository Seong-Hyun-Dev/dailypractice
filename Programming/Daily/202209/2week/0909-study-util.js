const util = require("util");
const crypto = require("crypto");

// ! 원래 randomBytes 사용하는법
crypto.randomBytes(64, (err, buf) => {
  const salt = buf.toString("base64");
  console.log("salt:", salt);
  crypto.pbkdf2("비밀번호", salt, 100000, 64, "sha512", (err, key) => {
    console.log("password:", key.toString("base64"));
  });
});

const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64).then((buf) => {
  //
});
