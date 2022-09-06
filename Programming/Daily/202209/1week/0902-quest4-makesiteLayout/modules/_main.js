export default function _main(
  parent,
  styleJson,
  childListArr,
  childStyleJsonArr
) {
  console.log("---main calculating...---");
  let main = document.createElement("div");
  main.id = "main";
  for (let property in styleJson) {
    main.style[property] = styleJson[property];
  }

  //!! childListArr 배열에 할당된 이름으로 key 생성 및 value로 엘리먼트 생성해서 연결한 객체생성(동적변수로 사용하기 위해)
  let elementVars = {};
  childListArr.map((item, idx) => {
    elementVars[`${item}`] = document.createElement("div");
  });
  // console.log(elementVars["left"]);
  childListArr.map((item) => {
    main.appendChild(elementVars[item]);
  });
  //!! childListArr 배열에 할당된 이름과 childStyleJsonArr에 있는 styleJson 연결한 객체생성
  let elementStyles = {};
  childListArr.map((item, idx) => {
    elementVars[item].id = item;
    for (let key in childStyleJsonArr[idx]) {
      // console.log(key, childStyleJsonArr[idx][key]);
      elementVars[item].style[key] = childStyleJsonArr[idx][key];
    }
  });

  parent.appendChild(main);
}
