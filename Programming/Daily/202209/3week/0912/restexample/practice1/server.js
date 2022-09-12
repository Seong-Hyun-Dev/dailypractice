const fs = require("fs").promises;
const http = require("http");

const server = http.createServer(async (req, res) => {
  try {
    console.log(req.method, req.url);
    if (req.method === "GET") {
      if (req.url === "/login") {
        const data = await fs.readFile("./login.html");
        res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
        return res.end(data);
      }
    }
  } catch (err) {
    const errorPage = await fs.readFile("./404page.html");
    console.error(err);
    res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
    res.end(errorPage);
  }
});

server.listen(8082, function () {
  console.log("8082번 포트에서 서버가 대기중입니다");
});
