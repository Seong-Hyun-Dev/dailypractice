// ? 배열의 메서드 활용
// ? 이 정도는 암기해서 자유자재로 사용하면 편할 것 같다.
//* <!-- ? forEach -->
//* <!-- ? push(),pop(),shift(),unshift()
//* <!-- ? indexOf()
//* <!-- ? splice() -->
//* <!-- ? slice() -->
//* <!-- ? from() -->
//! <!-- ? at() -->
//* ! <!-- ? concat() -->
//* <!-- ? join() -->
//! <!-- ? filter() -->
//! <!-- ? findIndex() -->
//* <!-- ? includes() -->
//! <!-- ? map() -->
//! <!-- ? reduce() -->
//! <!-- ? sort() -->
//! <!-- ? flat() -->

//*--------------------------------------------------------------------------
//*-------------------배열처리 함수에 대해서 알아보자-------------------------------
//*--------------------------------------------------------------------------
//! <!-- ? forEach() -->
//? 1. forEach 활용법
{
  const numbers = ["a", "b", "c"];
  numbers.forEach((item, idx, arr) => {
    //* console.log(`${item} ${idx} ${arr}`);
  });

  //! <!-- ! forEach에서 클래스 사용할 때 this 전달에 관련해서.. -->
  class Numbers {
    numArr = [];
    multiply(arr) {
      arr.forEach(function (item) {
        //* console.log("function:", this);
        this.numArr.push(item * item);
      }, this); //! 함수 스코프를 따르면, this를 써야함
    }
  }
  class Numbers2 {
    numArr = [];
    multiply(arr) {
      arr.forEach((item) => {
        //* console.log("arrow:", this);
        this.numArr.push(item * item);
      }); //! Es6의 화살표함수를 쓰기 때문에 this를 바인드 하지 않아도 됨.
    }
  }

  try {
    let nums = new Numbers();
    nums.multiply([1, 2, 3]);
    //* console.log(nums.numArr);
  } catch (error) {
    //* console.log("error");
  }
}
//? 폴리필 추가 => 폴리필 분석은 추후에 하기
{
  Array.prototype.forEach_custom = function (callback, thisArg) {
    if (typeof callback !== "function") {
      throw new TypeError(callback + ` is not a function`);
    }

    //! this로 사용할 두 번째 인수를 전달받지 못하면 전역 객체를 this로 사용한다.
    thisArg = thisArg || global;

    for (let i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
  [1, 2, 3].forEach_custom((item) => {
    //* console.log(item * 2);
  });
}

//! <!-- ? push(),pop(),shift(),unshift() -->
{
  const array = [];
  array.push(1);
  array.push(2);
  array.push(3);
  array.pop(); // ! 뒤에서 제거
  //* console.log(array);
  array.shift(); // ! 앞에서 제거 -- shift가 제거!
  //* console.log(array);
  array.unshift(999); // ! 앞에서 추가 -- unshift가 추가!!
  //* console.log(array);
}
//! <!-- ? indexOf() -->
//? 1. 정의
{
  const arr = [1, 2, 2, 3];
  arr.indexOf(2); // ! 아이템이 발견된 첫번째 인덱스를 반환, 발견되지 않으면 -1반환
}

//? 2. 활용법
{
  const arr = ["apple", "banana", "peach", "tomato"];
  if (arr.indexOf("potato") === -1) {
    arr.push("potato");
  }
  //* console.log(arr);
}

//! <!-- ? splice() -->
//? 1. 정의 :: 원본배열의 중간에 요소를 추가/제거
//? 활용#1
{
  //* 3을 제거
  const arr = [1, 2, 3, 4, 5];
  arr.splice(2, 1); //! 인덱스 2번부터 시작해서, 1개를 제거
  //* console.log(arr);
}

{
  //* 3, 4를 제거
  const arr = [1, 2, 3, 4, 5];
  arr.splice(2, 2); //! 인덱스 2번부터 시작해서, 2개를 제거
  //* console.log(arr);
}

{
  //* 3.5를 중간에 추가
  const arr = [1, 2, 3, 4, 5];
  arr.splice(3, 0, 3.5);
  //* console.log(arr);
}

{
  //* 4를 4.1로 대체
  const arr = [1, 2, 3, 4, 5];
  arr.splice(3, 1, 4.1);
  //* console.log(arr);
}

{
  //* 3, 4를 30, 40으로 대체
  const arr = [1, 2, 3, 4, 5];
  arr.splice(2, 2, 30, 40);
  //* console.log(arr);
}

//! <!-- ? slice() -->
//? 1.정의 :: 원본배열을 건들지 않고 범위를 복사해서 배열로 반환
{
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let tmpArr = arr.slice(0, 2); //! 0번 1번 복사 -> 마지막 파라미터전까지 복사, for문의 i를 반영한듯
  //* console.log(tmpArr);
}

//? 2.활용
{
  // * 3이후로 모두복사
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let tmp = arr.slice(2); //! 2번 인덱스를 포함해서 뒤로 전부 복사
  //* console.log(tmp);
}

{
  // * 모두 복사해서 반환
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let tmp = arr.slice();
  //* console.log(tmp);
}

{
  // * 배열저장 시 얕은복사 -> 배열은 별개의 객체이지만, 배열 요소는 같은 값을 가리킴
  const objArr = [
    { id: 1, name: "kim", checked: true },
    { id: 2, name: "lee", checked: false },
    { id: 3, name: "park", checked: true },
  ];
  const _objArr = objArr.slice();
  //* console.log("objArr === _objArr: ", objArr === _objArr); // false
  //* console.log("_objArr[0] === objArr[0]:", _objArr[0] === objArr[0]); // true - 얕은 복사
}

//! * lodash로 깊은복사해보기
{
  let lodash = require("lodash");
  const objArr = [
    { id: 1, name: "kim", checked: true },
    { id: 2, name: "lee", checked: false },
    { id: 3, name: "park", checked: true },
  ];
  let _objArr = lodash.cloneDeep(objArr);
  console.log("objArr === _objArr: ", objArr === _objArr); // false
  console.log("_objArr[0] === objArr[0]:", _objArr[0] === objArr[0]); // false - 깊은 복사
}

{
  // * 유사배열 객체를 배열로 변환(ES5)
  function abc() {
    let arr = Array.prototype.slice.call(arguments);
    console.log(arguments);
    console.log(arr);
  }
  abc(1, 2, 3);

  // * 유사배열객체생성
  let testObj = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    length: 4,
  };
  for (let i = 0; i < testObj.length; i++) {
    console.log(testObj[i]);
  }
  //! ** 생성된 유사배열객체를 변환#1(ES5) - Array.prototype.slice.call(testObj);
  let testObjArr1 = Array.prototype.slice.call(testObj);
  console.log(testObjArr1);
  //! ** 생성된 유사배열객체를 변환#2 - Array.from(testObj);
  let testObjArr2 = Array.from(testObj);
  console.log(testObjArr2);
  //! ** 생성된 유사배열객체를 변환 ( 이러터블이어야함!! )#3(ES6) - [...arguments];
  // * let testObjArr3 = [...testObj]; // iterable이 아니라서 에러!!
  // * console.log(testObjArr3);
}

//! <!-- ? at() -->
//! <!-- ? concat() -->
{
  //? 복사해서 반환
  let arr1 = [1, 2];
  let arr2 = [3, 4];
  console.log(arr1.concat(arr2));
}
//! <!-- ? join() -->
// ? 1. 활용
{
  let arr = [1, 2, 3, 4, 5];
  let output = arr.join(" ");
  console.log(output);
}
//! <!-- ? filter() -->
//! <!-- ? findIndex() -->
//! <!-- ? includes() -->
//? 2. 활용법
{
  const arr = ["apple", "banana", "peach", "tomato"];
  //* console.log(arr.includes("potato")); // 없으면 false반환
  //* console.log(arr.includes("apple")); // 있으면 true반환
  if (!arr.includes("potato")) {
    //! includes가 있으면 true를 반환한다고 했을 때, 의미상[(아니면)포테이토 포함이] 라는 뜻...
  }
}

//! <!-- ? map() -->
//! <!-- ? reduce() -->
//! <!-- ? sort() -->
//! <!-- ? findIndex() -->
//! <!-- ? flat() -->

//*------------------------------------------------------------------------
//*--------------------------활용해서 문제만들기-------------------------------
//*------------------------------------------------------------------------
//? 1. indexOf, splice활용해서 배열의 내용을 지정해서 제거하기
{
  const arr = [1, 2, 3, 4, 5];
  //! item을 입력하면 제거하는 함수 만들기
  function remove(arr, item) {
    let idx = arr.indexOf(item);
    if (idx !== -1) {
      arr.splice(idx, 1);
    }
  }
  let targetItem = 5; // 배열에서 5를 제거해줘!
  remove(arr, targetItem);
  //* console.log(arr);
}

//? 2. indexOf로는 중복되는 내용중 첫번째 아이템의 인덱스만 알 수 있다. 중복되는 모든 인덱스를 알려면?
{
  const arr = [1, 2, 3, 2, 4, 2, 2, 2, 5, 2, 7];
  //?
}
