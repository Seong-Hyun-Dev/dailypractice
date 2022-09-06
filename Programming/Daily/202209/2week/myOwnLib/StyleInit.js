export default function styleInit(borderOnOff = false) {
  let style = document.createElement("style");
  if (borderOnOff === true) {
    style.innerText = `*{padding:0;margin:0;box-sizing:border-box;border: 1px solid black}`;
  } else {
    style.innerText = `*{padding:0;margin:0;box-sizing:border-box;}`;
  }
  document.head.append(style);
}
