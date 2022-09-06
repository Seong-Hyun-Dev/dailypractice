// ! 피보나치 수열을 이용한 재귀함수 탐구
// 0. 피보나치 수열의 구조
// 1) 피보나치 문제의 분석
// 1 1 2 3 5 8 13 21 34 55
// 피보나치 수열을 생각해보자.
//  피보나치 수열은 1부터 시작한다. 시작해보자.
//    첫번째는 1 이다.
//    두번째는 0 + 1이다.
//    세번째는 1 + 1이다.
//    네번쨰는 1 + 2이다.
//    ...
//    n번째는 lastlast + last이다.
//
//    이런 형태일때, 피보나치 수열의 n번째는 우선 "왼쪽의왼쪽" + "왼쪽"인것을 확인할 수 있다.
//    그렇다면, 피보나치 수열을 프로그램 상으로 lastlast = 0, last =1, sum=0의 형태로 시작한다고 보자.
//    그러면 첫번쨰는 last = 1이기 때문에,
//    function fibo1(n) {
// !    에서 last=1이 되지만 책에서는 if(n<=1) return n을 통해서 입력값을 출력하는 방식을 택했다.
//      if (n <= 1) {
//        return n; // 이 될 수 있겠다.
//      }
//    }
// 여기서 fibo1(1)의 의미는 피보나치 수열의 첫번째를 반환해 달라는 의미이다.
// 다시, fibo1(n)은 n번째를 반환해 달라는 의미이다.
//   ==> 2번째 사고를 정리하면서 얻게 된 지식 : 5번째를 구한다면
//    ==> 1 1 2 3 5 에서
//    ==> (0 1) (1 1) (1 2) (2 3) 총 4번돌아야함을 시각적으로 알 수 있었는데 1번째 생각할 때는 몰랐다.
// 그럼 fibo1(n)함수를 작성해보자.

// function fibo1(n) {
// !--피보나치 수열 세팅--
//   let lastlast = 0;
//   let last = 1;
//   let sum = 0;
// }
// 이 된다.

// !--초기값 세팅, 입력과 출력이 설정됨--
// !--3번째 사고에서 얻게 된 것--
// !--
// function fibo1(n) {
//   if (n == 1) return 1;
//   let lastlast = 0;
//   let last = 1;
//   let sum = 0;
//   // n번째는 sum을 보내려고 한다.
//   return sum;
// } // fibo1(n)의 기본적인 모습이 갖춰졌다.(의미론적인 구성이 갖춰졌다.)

// !--2번째 사고에서 얻게 된 중요한 점 : "문제의 시작"은 문제의 형태와 어우러져 있는 초기값을 느끼는 것, 혹은 저자가 어떻게 설정을 했냐는 것--
//   ==> 2번째 사고에서 얻게 된 것은
//    ==> 본질적으로 초기값 세팅에 대한 이미지이다.
//      ==> 피보나치 수열을 접하게 되었을 때, 생각해야 하는 것은
//        ==> 초기값을 어떻게 구성할 것인지에 대한 시각화
//          ==> - 초기값은 어떻게 이어져 나가야하는지에 대한 정보
//          ==> - 1
//          ==> - 1 1
//          ==> - 1 1 2
//          ==> 라고 할 때,
//          ==> - 1 일때, 초기값은 lastlast = 0, last = 1, sum = 0으로 작성이 되어있었다고 하는 것이다. "이 사고로 부터 플로우가 시작된다." (초사고적으로 풀자면 문제를 만나면 본질적인 문제의 형태와 초기값을 모양을 먼저 느끼고 시작한다.)

// !--2번째 사고 : 위에서 정립된 초기값을 기반으로 어떻게 플로우가 진행되는지를 생각해보자--

// 이제 동작을 넣어서 sum을 반환해보자.
// n번째 값을 원한다는 명령을 구성하자.
// function fibo1(n) {
//   if (n == 1) return 1;
//   let lastlast = 0;
//   let last = 1;
//   let sum = 0;

// 5번째 피보나치 수열을 구하고 싶다고 했을 때,
// 첫번 째 동작은...
// ( 0 )      1       1       2        3        5
// lastlast   last    sum
// 에서 lastlast와 last가 시작한다.
// sum = lastlast + last; //를 통해서 sum을 구했는데, 의미는 2번째 수열을 구했다.
// sum은 2번째가 된다.
// lastlast를 last가 되게 하고
// last를 sum이 되게하면
// ( 0 )      1          1       2        3        5
//            lastlast   last    (sum)
// 에서 lastlast와 last가 시작하고 의미적으로는 lastlast와 last가 오른쪽으로 이동함으로서 다음 sum을 구할 수 있게 되었다. 다음 sum은 3번째 sum이다.
// 동작을 구현하면,
// lastlast = last;
// last = sum;
// 이 된다.
// 한번 sum = lastlast + last; 동작을 했을 때, 다음번째 수열을 구하는 것이다.
// 다음 번째 n을 구하고자 한다면
// lastlast = last;
// last = sum;
// 을 수행해주면 된다.

// 즉, 변수를 선언하는 것은 피보나치 수열의 0번째, 1번째를 선언해놓은 상태이고
// sum = lastlast + last를 통해서 다음 값을 구한다.
// 그렇다면, 함수는
// fibo1(n)에서 n번째 값을 구하라는 명령을 받고,
//  if(n<=1) return last;를 통해서 fibo1(1)이면 1을 반환한다.
//  sum = lastlast + last를 통해서 2번째를 구한다.

// 그림으로 확인해보자...
// ( 0 )       1          1          2          3         5
// lastlast    last       sum
//
// 첫번 째 sum = lastlast + last 수행에서는 2번째 피보나치 수열값을 구했다.
// ( 0 )       1          1          2          3         5
//             lastlast   last       (sum)
// 두번 째 sum = lastlast + last 수행에서는 3번째 피보나치 수열값을 구했다.
// 즉, n번째 수열값을 구하고 싶으면 n-1번의 sum = lastlast + last작업을 하면된다.
//   return sum;
// }

// 사고의 흐름을 정리해보고 생각을 자연스럽게 이어보자.(초사고)

// ! (1) 피보나치 수열 fibo1(n) - for문 구현 정리
function fibo1(n) {
  if (n <= 1) return n;
  // ! 코드를 보기전에 피보나치의 구성을 1부터 차근차근 이미지를 떠올려본다.
  let lastlast = 0;
  let last = 1;
  let sum = 0;
  // ! 그 이미지를 바탕으로 초기값들의 연산을 통해서 진행이 되는것을 느껴본다.
  for (let i = 1; i < n; i++) {
    // n을 구하고 싶을 때 n-1번을 돌리면 되기 때문에.. :: usage
    sum = lastlast + last;
    lastlast = last;
    last = sum;
  }
  // ! 나머지 종료조건과 반환조건을 떠올려본다.
  return sum;
}

function fibo1_clone(n) {
  if (n <= 1) return n;
  let lastlast = 0;
  let last = 1;
  let sum = 0;
  for (let i = 1; i < n; i++) {
    sum = lastlast + last;
    lastlast = last;
    last = sum;
  }
  // ! 옮긴다는 것의 의미
  // !            1          1         2         3         5         8  ...
  // ! lastlast   last       sum
  // !            lastlast   last      (sum)
  return sum;
}


// // 2. 피보나치 O(2^n) - Recursive함수(1)
// function fibo2(n) {
//   if (n <= 1) {
//     return 1;
//   }
//   return fibo2(n - 2) + fibo2(n - 1);
// }

// 3. 피보나치 O(n) - Recursive함수(2)
// function fibo3(n, lastlast, last) {
//   if (n == 0) {
//     return lastlast;
//   }
//   if (n == 1) {
//     return last;
//   }
//   return fibo3(n - 1, last, lastlast + last);
// }
// console.log(fibo3(10, 0, 1));
