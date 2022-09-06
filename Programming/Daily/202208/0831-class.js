//! 객체 생성 :: JS에서는 함수로 클래스를 만든다.
{
  function kdt(name, glass, payment) {
    this.id = name;
    this.b = glass;
    this.c = payment;
    // ? 리턴이 존재하지 않음
  }

  const hey = new kdt("슈크림", "김치", "소주");
}

//! 배열로 클래스로 만들어진 객체를 관리
{
  function kdt(name, glass, payment) {
    this.id = name;
    this.b = glass;
    this.c = payment;
  }
  const members = [];
  for (let i = 0; i < 5; i++) {
    members.push(new kdt(i + 1, "hello", "bye"));
  }
}

//! 모듈화 시키기
{
  // ? export default function kdt(name, glass, payment) {
  // ?   this.id = name;
  // ?   this.b = glass;
  // ?   this.c = payment;
  // ? }
}

// !메서드 만들기
{
  function kdt(name, glass, payment) {
    this.id = name;
    this.b = glass;
    this.c = payment;
    this.hi = function () {
      console.log("hi");
    };
  }
}

// ! 생성자 함수 만들어보기
{
  function Person(id, name, age, job) {
    if (
      typeof id === "number" &&
      typeof name === "string" &&
      typeof age === "number" &&
      typeof job === "string"
    ) {
      this.id = id;
      this.name = name;
      this.age = age;
      this.job = job;
    }
  }

  let PersonArr = [];
  for (let i = 0; i < 24; i++) {
    PersonArr.push(new Person(i + 1, "kim", 23, "none"));
  }
  console.log(PersonArr);
}

// ! 활용 - 생성자 함수로 아래의 배열의 데이터를 배열객체로 바꿔보자
{
  const studentList = [
    "강예훈",
    "김성현",
    "류주완",
    "마근원",
    "박종인",
    "박재형",
    "송형주",
    "양상희",
    "원두진",
    "유민호",
    "이상호",
    "이소영",
    "이은수",
    "정동욱",
    "정윤환",
    "정정원",
    "지영빈",
    "한용준",
    "황초영",
    "김근수",
    "김승현",
    "전형민",
    "정연주",
    "이아연",
    "최화연",
  ];

  function Student(id, name) {
    this.id = id;
    this.name = name;
  }
  const studentObjArr = [];
  studentList.map((idx, name) => {
    // console.log(idx);
    // console.log(name);
    studentObjArr.push(new Student(idx, name));
  });
  console.log(studentObjArr);
}
