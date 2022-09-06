// 일반 트리의 경우 -> 그래프와 구현방법이 동일

// 이진 트리의 경우
// Array
// -- 
// ** 이진트리 1차원배열 저장규칙 ** 
// --
// 0번 인덱스는 편의를 위해 비워둔다.
// Left = Index * 2;
// Right = Index * 2 + 1;
// Parent = floor(Index / 2)
const Tree1 = [
    // 0번 인덱스는 편의를 위해 비워둔다.
    undefined,
    // 인덱스 1 : 루트
    9,
    // (위의 규칙에 따라) 인덱스 1 * 2는 왼쪽 1 * 2 + 1은 오른쪽
    3, 7,
    // (위의 규칙에 따라) 인덱스 2 * 2는 왼쪽 2 * 2 + 1은 오른쪽
    // (위의 규칙에 따라) 인덱스 3 * 2는 왼쪽 3 * 2 + 1은 오른쪽
    4, 10, undefined, 8
]

// 연결리스트로 구현
class Node {
    constructor(value){
        this.value = value,
        this.left = null,
        this.right = null
    }
}

class Queue {
    constructor(value){
        this.head = null;
        this.tail = null;
    }
    enqueue(value){
        
    }
}


class Tree2 {
    constructor(node) {
        this.root = node;
    }

    display(){
        const queue = new Queue();
    }
}

const queue2 = new Queue();