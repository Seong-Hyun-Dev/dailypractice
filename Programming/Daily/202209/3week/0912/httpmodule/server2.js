const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.write("<h1>Hello Node!</h1>");
  res.end("<p>Hello Server!</p>");
});

server.listen(8080);
server.on("listening", function () {
  console.log("8080포트에서 서버대기중입니다.");
});

server.on("error", function (error) {
  console.log("error가 발생했습니다");
  console.log(errer);
});
