//! 구조분해할당#1
{
  let arr = ["arr", "brr"];
  let [first, second] = arr;
  console.log(first);
  console.log(second);
}
//! 구조분해할당2
{
  let obj = {
    id: 1,
    name: "kim",
    job: "warrior",
  };
  let { id, name, job } = obj;
  console.log(id, name, job);
}
//! 동적할당
