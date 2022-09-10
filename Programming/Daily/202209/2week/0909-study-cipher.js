const crypto = require("crypto");

const algorithm = "aes-256-cvc";
const key = "abcdefghijklmnopqrstuvwxyz123456";
const iv = "123456790123456";

const cipher = crypto.createCipheriv(algorithm, key, iv);
let result = cipher.update("암호화할 문장");
