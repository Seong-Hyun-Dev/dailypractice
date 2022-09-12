// ! 브라우저 요청단

async function getUser() {
  try {
    const res = await axios.get("/users");
    const users = res.data;
    const list = document.getElementById("list");
    list.innerHTML = "";
    // ? 객체로 불러진 users를 키값 순회;
    Object.keys(users).map(function (key) {
      const userDiv = document.createElement("div");
      const span = document.createElement("span");
      span.textContent = users[key];
      const edit = document.createElement("button");
      edit.textContent = "수정";
      edit.addEventListener("click", async () => {
        const name = prompt("바꿀 이름을 입력하세요");
        if (!name) {
          return alert("이름을 반드시 입려과셔야 합니다");
        }
        try {
          await axios.put("/user/" + key, { name });
          getUser();
        } catch (err) {
          console.log(err);
        }
      });
      const remove = document.createElement("button");
      remove.textcontetn = "삭제";
      remove.addEventListener("click", async () => {
        try {
          await axios.delete("/user/" + key);
          getUser();
        } catch (err) {
          console.error(error);
        }
      });
    });
    userDiv.appendChild(span);
    userDiv.appendChild(edit);
    userDiv.appendChild(remove);
    list.appendChild(userDiv);
  } catch (err) {
    console.log(err);
  }
}

window.onload = getUser;
document.getElementById("form").addEventListener("submit", async (e) => {
  //* 그런데 form을 submit하면 브라우저는 새로고침하는 것이 디폴트이기 때문에
  //* 콘솔에서는 브라우저가 가진 정보가 뜨고나서 아주 빠른 순간 사라진다.
  //* 그래서 이 것을 막기 위해 .preventDefault()함수를 사용한다.
  e.preventDefault();
  const name = e.target.username.value;
  if (!name) {
    return alert("이름을 입력하세요");
  }
  try {
    await axios.post("/user", { name });
    getUser();
  } catch (err) {
    console.error(err);
  }
  e.target.username.value = "";
});
