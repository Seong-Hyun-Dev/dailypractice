const user = {
  a: 1,
  b: 2,
  c: 3,
};
console.log(Object.keys(user));
Object.keys(user).map((idx) => {
  // console.log(idx);
  // ! 불러진 각각의 key원소에 대하여..
  console.log(user[idx]);
});
