export default function _header(parent, styleObj, navInfoObj = null) {
  console.log("---header setting calculating---");
  let header = document.createElement("div");
  header.id = "header";
  for (let property in styleObj) {
    header.style[property] = styleObj[property];
  }
  parent.appendChild(header);

  // * --------------------Wait a minute! Instance Study Result----------------------
  // ! 1. document.documentElement.clientWidth : 반응형을 추가하기 위한 값
  // ? => console.log(document.documentElement.clientWidth); // 가능!!
  // ! 2. parent.style.width 소환이 가능?
  // ? => console.log("parent.style.width: ", parent.style.width); // 가능!!
  // * ------------------------------------------------------------------------------

  // * make Nav
  // ? Nav는 거의 항상 같다 => 함수화, nav 생성함수의 파라미터 설계
  /*  
      ! 객체 설계  
      ! navInfoObj {
      !   navList : ["Intro","about","services","account","bag","search"],
      !   navStyle : {
      !     width: 100%;
      !     height: 100%;
      !   }
      }
  */

  let navUl = document.createElement("ul");
  // ! navUl.remove(); // Dom에서 제거하기 때문에 코드 자체를 지우지는 않는다고 보인다......?
  // ! console.log(navUl); // <ul></ul>
  if (!navInfoObj) {
    console.log("nav가 생성되지 않았습니다.");
  } else {
    console.log("nav가 생성되었습니다.");
    let navListArr = navInfoObj.navList;
    navListArr.map((item, idx, arr) => {
      let liElement = document.createElement("li");
      // console.log(item);
      liElement.innerText = item;
      // ! li 스타일링
      liElement.style.listStyle = "none";
      liElement.style.margin = "16px";
      // ! li 부모에 추가
      // ? appendChild(liElement)를 innerHtml = liElement처럼 쓰려고 하니 에러발생
      // console.log(liElement);
      navUl.appendChild(liElement);
    });
    let navStyleObj = navInfoObj.navStyle;
    for (let property in navStyleObj) {
      navUl.style[property] = navStyleObj[property];
    }
    header.appendChild(navUl);
    console.log("---header setting complete---");
  }
}
