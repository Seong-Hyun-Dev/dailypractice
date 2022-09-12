const http = require("http");

http
  .createServer((req, res) => {
    console.log("req.url: ", req.url);
    console.log("req.headers.cookie: ", req.headers.cookie);
    res.writeHead(200, { "Set-Cookie": "mykey=myvalue" });
    res.end("Hello Cookie");
  })
  .listen(3500, function () {
    console.log("Server is running on PORT:3500");
  });
