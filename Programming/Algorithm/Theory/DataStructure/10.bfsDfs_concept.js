// -------------------------------------------------------
// BFS(Breath First Search) / DFS(Depth First Search)의 개요
// -------------------------------------------------------
//     - 넓이우선탐색, 깊이우선탐색
//     - 그림판, 최단거리문제
//     - 넓이 우선 탐색(BFS)
// 		같은 깊이를 동시탐색 - "queue" 이용하여 구현
// 		O(V(Vertex, 정점의수) + E(Edge, 간선)
// 		프로세스
// 			같은 깊이를 순차적으로 큐에 넣고 디큐, 디큐할 때 (연결된 노드들을 큐에 추가하면서 진행
// 	- 깊이 우선 탐색(DFS)
// 		STACK
// 		깊이 중심 탐색
// 		O(V+E), V는 노드, E는 간선

//      ** BFS/DFS를 이해하기 위해 생각해보자...
//          - BFS는 무엇인가? BFS를 구현한다는 것은 무엇인가? 
//              => BFS? 탐색알고리즘이다. 원리나 원칙에 가깝다.
//          - 구현한다는 것은 무슨 의미인가? 
//              => 먼저 그래프를 구현한 상태에서 BFS/DFS 탐색을 수행하는 것
//                  -- 그래프(Vertices, Edges) === 인접배열 구현 || 인접리스트 구현
//                     --- step1. 인접배열로 먼저 구현 : 그래프 - 인접배열 표현

// -------------------------------------------------------
// --- step 0) 그래프 ADT 
// -------------------------------------------------------
//  0)let 그래프인스턴스 = new Graph_adjArray || new Graph_adjList
//  1)그래프인스턴스.insertVertex('a');
//  2)그래프인스턴스.insertEdge('a','b');
//  3)그래프인스턴스.display();



// -------------------------------------------------------
// --- step 1) 그래프 표현 ( 인접배열로 표현 ) : 직접표현
// -------------------------------------------------------

class Graph_adjArray {
    // 1.생성자 표현 - constructor()
    constructor(){
        // 1)정점의 갯수
        this.size = 0; 
        // 2)이름이 저장된 배열
        this.vertices = Array.from(
            new Array(),
            () => null
        )
        // 3)인접행렬표현(2차원 배열)
        // this.adjMat = Array.from(
        //     new Array(),
        //     () => Array.from(
        //         new Array,
        //         () => false
        //     )
        // )
        this.adjMat = [];
    }
    // 2.정점추가 - insertVertex(name)
    insertVertex(name) { // #Problem. 2차원 배열 동적 확장문제
        // this.size 업데이트 && this.vertices 업데이트 : 이름을 배열에 추가
        this.vertices[this.size++] = name;
        // ------ * 주의 --------
        this.adjMat.push([]); // 이차원 배열을 동적추가하기 위해 공간을 확보 안하면,,, 
                              // 컴파일 할 때, TypeError: Cannot set properties of undefined (setting '0') 발생
        // ---------------------
        // adjMax갱신 : 2차원 배열을 갱신하고 끝에 0으로 업데이트? 기존 2차원 배열에 끝에 하나 더 추가
        for(let i = 0; i < this.size; i++){
            for(let j = 0; j < this.size; j++){
                // #여기 알고리즘 수정..
                // i가  size - 1이 아닌 경우와 size - 1인 경우...
                if(i !== this.size-1){ // i가 size - 1가 아닌 경우
                    if(j !== this.size - 1) continue;
                    else this.adjMat[i][j] = 0;
                }else { // i가 size - 1이 맞는 경우
                    // j가 size-1이 아닌 경우와 j가 size-1인 경우
                    //   j가 size-1이 아닌경우
                    this.adjMat[i][j] = 0;
                } 
            }
        }  
    }
    // 3.간선추가 - insertEdge(u,v)
    insertEdge(name1,name2){
        let u = this.vertices.indexOf(name1);
        let v = this.vertices.indexOf(name2);
        this.adjMat[u][v] = 1;
        this.adjMat[v][u] = 1;
    }

    display() {
        process.stdout.write("  ");
        for(let i=0;i<this.size;i++){
            process.stdout.write(`${this.vertices[i]} `)
        }
        console.log("");
        for(let i=0;i<this.size;i++){
            process.stdout.write(`${this.vertices[i]} `)
            for(let j=0;j<this.size;j++){
                process.stdout.write(`${this.adjMat[i][j]} `)
            }
            console.log("");
        }
    }

}


// ----------------------------------------------------------------
// --- step 2) 그래프 표현(인접리스트로 표현) - "연결리스트를 응용하는게 아직 미숙함"
// ----------------------------------------------------------------

class Node {
    constructor(name){
        this.name = name;
        this.next = null;
    }
}

class LinkedList {
    constructor(name){
        this.headValue = name;
        this.tail = null;
        this.head = null;
    }

    append(name){
        let newNode = new Node(name);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    display() {
        this.pointer = this.head;
        process.stdout.write(`${this.headValue} : `)
        while(this.pointer !== null) {
            process.stdout.write(`${this.pointer.name} `)
            this.pointer = this.pointer.next;
        }
        console.log("");
    }
}

class Graph_adjList{
    constructor() {
        this.size = 0;
        this.vertices = [];
    }
    insertVertex(name) {
        let newList = new LinkedList(name);
        this.vertices[this.size++] = newList;
    }
    insertEdge(name1,name2) {
        // - name1의 headValue를 가지고 있는 연결리스트를 찾아서
        for(let i=0;i<this.size;i++){
            if(name1 === this.vertices[i].headValue){
                // name2값으로 생성한 노드를 연결리스트에 추가하라.
                this.vertices[i].append(name2);
            }
            if(name2 === this.vertices[i].headValue){
                this.vertices[i].append(name1);
            }
        }
    }
    display() {
        this.vertices.map(list => {
            list.display();
        })
    }
}   



// -------------------------------------------------------
// --- step +) BFS/DFS를 위해서 인접리스트,인접배열을 구현
// -------------------------------------------------------
            //        a
            //   /    |    \
            //  d     c  -  b
            //  |      \   / 
            //  e        f 
            //           |      
            //           g
let graphByArray_adjArray = new Graph_adjArray();
graphByArray_adjArray.insertVertex('a');
graphByArray_adjArray.insertVertex('b');
graphByArray_adjArray.insertVertex('c');
graphByArray_adjArray.insertVertex('d');
graphByArray_adjArray.insertVertex('e');
graphByArray_adjArray.insertVertex('f');
graphByArray_adjArray.insertVertex('g');
graphByArray_adjArray.insertEdge('a','b');
graphByArray_adjArray.insertEdge('a','c');
graphByArray_adjArray.insertEdge('a','d');
graphByArray_adjArray.insertEdge('b','c');
graphByArray_adjArray.insertEdge('d','e');
graphByArray_adjArray.insertEdge('c','f');
graphByArray_adjArray.insertEdge('b','f');
graphByArray_adjArray.insertEdge('f','g');
console.log(graphByArray_adjArray.display());

let graphByArray_adjList = new Graph_adjList();
graphByArray_adjList.insertVertex('a');
graphByArray_adjList.insertVertex('b');
graphByArray_adjList.insertVertex('c');
graphByArray_adjList.insertVertex('d');
graphByArray_adjList.insertVertex('e');
graphByArray_adjList.insertVertex('f');
graphByArray_adjList.insertVertex('g');
graphByArray_adjList.insertEdge('a','b');
graphByArray_adjList.insertEdge('a','c');
graphByArray_adjList.insertEdge('a','d');
graphByArray_adjList.insertEdge('b','c');
graphByArray_adjList.insertEdge('d','e');
graphByArray_adjList.insertEdge('c','f');
graphByArray_adjList.insertEdge('b','f');
graphByArray_adjList.insertEdge('f','g');
console.log(graphByArray_adjList.display())

// -------------------------------------------------------
// --- step 3) 구현된 그래프(인접배열)를 이용해서 BFS이론 구현
// -------------------------------------------------------
// BFS는 queue를 이용해서 구현

// - circular queue를 구현하는데, Array로 구현한다.
class Queue {
    constructor(maxSize){
        // 5가지 변수
        this.maxSize = maxSize;
        this.size = 0;
        this.front = 0;
        this.rear = 0;
        this.queue = [];
    }

    isFull() {

    }

    enqueue(value){
        this.queue[rear++] = value;
    }

    dequeue(){

    }

    peek() {

    }
}






// -------------------------------------------------------
// --- step 4) 구현된 그래프(인접리스트)를 이용해서 BFS이론 구현
// -------------------------------------------------------



// -------------------------------------------------------
// --- step 5) 구현된 그래프(인접배열)를 이용해서 DFS이론 구현
// -------------------------------------------------------






// -------------------------------------------------------
// --- step 6) 구현된 그래프(인접리스트)를 이용해서 DFS이론 구현
// -------------------------------------------------------