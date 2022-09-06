export default function _styleinit() {
  const initCondition = `*{padding:0;margin:0;box-sizing:border-box;};`;
  const style = document.createElement("style");
  style.innerHTML = initCondition;
  document.head.append(style);
  console.log("---style initiation complete---");
}
