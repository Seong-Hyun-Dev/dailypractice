// 1. Array && Object을 해쉬함수로 사용가능
const hashArr = [];
const hashObj = {};

hashArr["hi"] = "hihih"
hashObj["hi"] = 3000;

console.log(hashArr);
console.log(hashObj);


// 2. Map객체를 활용

//  1) Map 생성 : new Map()
const hashMap = new Map();

//  2) Map 입력 / 출력 - set(키,값) / get(키)
hashMap.set("key1",1000);
console.log(hashMap.get("key1")); // hashMap["key1"] -> undefined

//  3) 객체도 KEY로 활용가능!!!
const hashMap2 = new Map();
const keyobj = {"he":10000};
hashMap2.set(keyobj,"wowow");
console.log(hashMap2.get(keyobj));

//  4) keys, values 따로 나열
const hashMap3 = new Map();
hashMap3.set("k1",1);
hashMap3.set("k2",2);
hashMap3.set("k3",3);
console.log(hashMap3.keys()); // 유사배열객체 반환, 함수형태로 소환
console.log(hashMap3.values()); // 유사배열객체 반환, 함수형태로 소환

//  5) Map객체 clear
const hashMap4 = new Map();
hashMap4.set(1,'man');
hashMap4.set(2,'woman');
console.log(hashMap4.get(1));
console.log(hashMap4.get(2));
hashMap4.clear(); 
console.log(hashMap4.values());

//  6) hashMap조작
const hashMap5 = new Map();
hashMap5.set(1,1000);
hashMap5.set(2,2000);
hashMap5.set(3,3000);
hashMap5.set(4,4000);
console.log("요기요기");
console.log(hashMap5.get(1));


// 3. Set객체를 활용 - key와 value가 동일하게 저장되는 방식을 채택한다. / 집합으로 볼 수 있고 중복된 내용을 제거할 때 사용함
console.log("Set객체 활용")
//  1) 생성
const hashSet1 = new Set();
//  2) 추가
hashSet1.add("k1");
hashSet1.add("k2");
hashSet1.add("k2");
//  3) 확인
console.log(hashSet1.has("k1"));
console.log(hashSet1.has("k2"));
console.log(hashSet1.has("k3"));

//  4) 사이즈 체크
console.log(hashSet1.size);

//  5) HashTable Usage
function solution(genres, plays) {
  const genreMap = new Map();
  genres
      .map((genre,index)=>([genre,plays[index]]))
      .forEach(([genre,play],index)=>{
          const data = genreMap.get(genre) || {total : 0, songs : []};
          genreMap.set(genre,{
              total : data.total + play,
              songs : [...data.songs, {play,index}]
                      .sort((a,b)=>{
                          if(a.index === b.index){
                              return a.index - b.index;
                          }
                          return b.play - a.play;
                      })
                      .slice(0,2)
          });
      });
  
  return  [...genreMap.entries()]
          .sort((a,b)=>{
              return b[1].total - a[1].total;
          })
          .flatMap((item)=>{
              return item[1].songs
          })
          .map(song=>song.index)
}
