export default function makestyle(element, styleJson) {
  for (let property in styleJson) {
    element.style[property] = styleJson[property];
  }
}
