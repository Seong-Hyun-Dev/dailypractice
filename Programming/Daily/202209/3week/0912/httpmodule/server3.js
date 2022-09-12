const http = require("http");
const fs = require("fs").promises;

const server = http.createServer(async (req, res) => {
  try {
    const data = await fs.readFile("./server3.html");
    res.writeHead(200, { "content-Type": "text/html;charset=utf-8" });
    res.end(data);
  } catch (err) {
    console.log(err);
    res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
    res.end(err);
  }
});

server.listen(8080);
server.on("listening", function () {
  console.log("8080번 포트에서 대기중입니다.");
});
