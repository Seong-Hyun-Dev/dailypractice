// * --- 실전에서는 구현하지는 않음 --- 단순히 개념을 활용해서 문제를 푸는것이 중요

//링크드리스트로 stack구현
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    // 스택의 생성자.. 처음 스택이 만들어지면...
    constructor(){
        this.top = null; // 스택의 현재 포인터
        this.size = 0; // 스택의 사이즈
    }

    //push메서드
    push(value){ // 인자값으로 value를 받는다.
        const node = new Node(value); //우선 값을 저장할 새로운 노드를 만든다.
        node.next = this.top; // node의 다음을 
        this.top = node;
        this.size += 1;
    }

    pop(){
        const value = this.top.value;
        this.top = this.top.next;
        this.size -= 1;
        return value;
    }

    size() {
        return this.size;
    }
}

const stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
console.log(stack.pop());
stack.push(6);
stack.push(7);
console.log(stack);
