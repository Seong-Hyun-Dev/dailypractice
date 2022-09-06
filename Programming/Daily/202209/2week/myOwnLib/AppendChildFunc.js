export default function AppendChildFunc(parent, childArr) {
  childArr.map((item) => {
    parent.appendChild(item);
  });
}
