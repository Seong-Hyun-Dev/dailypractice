// 물리적인 시간측정
let start = new Date();  // 시작
let end = new Date();  // 종료
console.log(end - start);

// 빅오표기법
// 1) 로그복잡도 표현
function exampleLogarithmic(n){
    for(let i=2;i<=n;i=i*2){ //log밑2의i 
        console.log(i);
    }
}
exampleLogarithmic(10);