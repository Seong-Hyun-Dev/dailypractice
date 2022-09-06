export default function MakeStyle(target, styleJson) {
  // console.log("target:", target);
  for (let property in styleJson) {
    target.style[property] = styleJson[property];
  }
}
