// 문제1. harshard : 문제의 본질은 각 자릿수를 구할 수 있는가에 대한 문제...
// 방법1. [...x.toString()].

// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 
// 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 
// 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

// 1) 내 풀이
function solution_mine(x) {
    let arr  = [...x.toString()];
    let divider = arr.map(v=>+v).reduce((acc,v,i)=>{
        return acc + v;
    },0);
    if(x%divider === 0){
        return true;
    } else {
        return false;
    }
}

// 2) 베스트 리뷰 - 이해가 안감(보류)
function solution_best(n){
    return !(n % (n + "").split("").reduce((a, b) => +b + +a ));
}
let n = 1582;
let tmp = n %( n + "").split("");
console.log(tmp);