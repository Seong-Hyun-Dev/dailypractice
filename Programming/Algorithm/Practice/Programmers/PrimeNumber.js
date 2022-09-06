// 001. isPrime(n)에 대한 문제
// 1. 1은 소수가 아니고, 2와 3은 소수이다.
// 2. 소수가 아닌것들은 대부분 2(짝수)와 3(홀수)으로 나뉜다.
// 3. 소수의 특징 : 5이상부터는 소수의 나열을 관찰해보면 6k +-(plus/minus) 1의 언저리에 존재한다. 
//    => ( 6k-1 || 6k+1 )의 부근
// 4. isPrime(n)은 "n의 제곱근이 소수가 아니면 n은 수학 정의에 의해 소수가 아니라는 수학정리"에 의해 시작한다.
//    => 즉, for (int i = 5; i <= sqrt(n); i++) === for(let i = 5; i*i < n; i++)
// 추가. for(let i=0; i<0; i++){
//          console.log('1');
//      }
//      => for문은 처음 시작시 중간 조건문을 반드시 먼저 거친다.

// function isPrime(n){ //11
//     if(n<1) return false;
//     if(n<=3) return true;

//     if(n%2 === 0 || n%3 === 0) return false;

//     for(let i=5; i*i<n; i=i+6){ // 5*5 < 11
//         if(n%i === 0 || n%(i+2) === 0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(12));


// // 002.PrimeFactor(소인수분해) 
// function primeFactors(n){
//     // 먼저 짝수로 나누고
//     while(n%2 === 0) {
//         console.log(2);
//         n = n/2;
//     }
//     // 그 다음은 모두 홀수
//     for(let i=3;i*i<n;i=i+2){
//         while(n%i === 0){
//             console.log(i);
//             n = n/i;
//         }
//     }
//     // 이후에도 없다면 001의 정리에 따라서 남은 수는 소수로 생각할 수 있음 
//     // 따라서 소수출력
//     if(n>2) {
//         console.log(n);
//     }
// }


