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
