import MakeStyle from "./MakeStyle.js";

export default function ElementMakeSet(parent, element, id, style) {
  let e; //! element선언
  if (id === "root") {
    e = document.getElementById("root");
  } else {
    e = document.createElement(element);
  }
  e.id = id;
  MakeStyle(e, style);
  if (parent !== null) {
    parent.appendChild(e);
  }
  return e;
}
