const http = require("http");
const fs = require("fs").promises;
const server = http.createServer(async (req, res) => {
  try {
    console.log(req.method, req.url);
    if (req.method === "GET") {
      if (req.url === "/") {
        const data = await fs.readFile("./restFront.html");
        res.writeHead(200, { "Content-Type": "text/Html; charset=utf-8" });
        return res.end(data);
      } else if (req.url === "/about") {
        const data = await fs.readFile("./about.html");
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        return res.end(data);
      }
      try {
        const data = await fs.readFile(`.${req.url}`);
        return res.end(data);
      } catch (err) {
        console.error(err);
      }
    }
    res.writeHead(404);
  } catch (error) {
    console.error(error);
    res.writeHead(500, { "Content-Type": "text/plain;charset=utf-8" });
    res.end(error.message);
  }
});

let port = 8082;
server.listen(port);
server.on("listening", function () {
  console.log(`${port}에서 대기하고 있습니다.`);
});
