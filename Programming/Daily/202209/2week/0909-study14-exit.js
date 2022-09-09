let i = 1;
setInterval(() => {
  if (i === 40) {
    console.log("종료할시점");
    process.exit();
  }
  console.log(i);
  i = i + 1;
}, 300);
