// ! 동적할당
{
  let keyname = "SettingKeyName!!";
  let something = { [keyname]: "zincoder" };
  console.log(something);
}

// ! JS KEY 동적할당 + 스프레드 문법
{
  let obj1 = {
    id: 1,
    name: "kim",
    job: "socceror",
  };

  let obj2 = {};
  let play = "soccer";
  obj2 = { ...obj1, [play]: "good" };
  console.log(obj2);
}
