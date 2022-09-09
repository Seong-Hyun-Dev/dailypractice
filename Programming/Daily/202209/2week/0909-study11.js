// ! 시간측정
// console.time("t");
// for (let i = 0; i < 10000000; i++) {}
// console.timeEnd("t");

// ! 현재 폴더
// console.log(__dirname);
// console.log(__filename);

// ! process : 현재 노드 프로세스이 정보를 담고 있음
// console.log(process.arch); //? 프로세서 아키텍처
// console.log(process.platform); //? darwin
// console.log(process.pid); //? 프로세스 pid
// console.log(process.uptime()); //? 프로세스 실행시간
// console.log(process.execPath); //? 노드의 경로
// console.log(process.pwd); //?
// console.log(process.cpuUsage());

// ! process.stdin
// ?? parameter(dataType, callback)
// process.stdin.on("data", (data) => {
//   console.log(`You typed ${data.toString()}`);
//   process.exit();
//   // if (data.toString() === "fin.") {
//   //   console.log(data.toString());
//   //   console.log(process.uptime());
//   //   process.exit();
//   // }
// });

console.log(require("dotenv").config().parsed.TESTPW);
console.log(process.env.TESTPW);
// console.log(process.env);
