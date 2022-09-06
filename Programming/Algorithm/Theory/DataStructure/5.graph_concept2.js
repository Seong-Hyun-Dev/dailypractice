// 웹서칭..
// - 1.그래프 소스 코드
// -- 1)그래프 동적생성
// -- 2)그래프 소멸
// -- 3)그래프 정보 출력
//    (+진입차수와 진출차수를 확인하는 코드를 포함)
// -- 4)진입차수 확인
// -- 5)진출차수 확인

//Graph 가정하고 그리기
        //     a
        // /   |   \
        // b   c   d
        // \   |   |
        //   e     f
        //         |
        //         g

//Graph 저장하는 자료구조
//1)인접리스트
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Graph {
    constructor(){
        this.vertexNumber = 0; // 정점갯수
        this.edge;
    };
}

//2)인접그래프