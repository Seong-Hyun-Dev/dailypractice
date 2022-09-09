process.stdin.resume();
process.stdin.on("data", function (chunk) {
  // process.stdout.write('line read: ' + chunk);
  process.stdout.write("char read: " + chunk.toString()[0]); // gives ascii 97 when a is typed.
  process.exit(0);
});
