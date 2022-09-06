// ** 그래프를 구현해보자  ** 

// 1. 인접 배열로 그래프 구현
const graph1 = Array.from(
    Array(5),
    () => Array(5).fill(false)
)
graph1[0][1] = true; // 0 -> 1
graph1[0][2] = true; // 0 -> 2
graph1[3][1] = true; // 3 -> 1
graph1[3][2] = true; // 3 -> 2

// 2. 인접 리스트로 그래프 구현
const graph2 = Array.from(
    Array(5),
    () => []
)
graph2[0].push(1); // 0 -> 1
graph2[0].push(3); // 0 -> 3
graph2[3].push(1); // 3 -> 1
console.log(graph2);
