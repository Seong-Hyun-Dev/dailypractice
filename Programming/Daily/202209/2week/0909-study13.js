process.stdin.on("data", function (data) {
  console.log(data.toString());
  process.exit();
});
