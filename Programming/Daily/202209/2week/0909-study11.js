// 시간측정
console.time("t");
for (let i = 0; i < 10000000; i++) {}
console.timeEnd("t");

// 현재 폴더
console.log(__dirname);
console.log(__filename);
