class Node {
    constructor(value){
        this.value = value;
        this.next = null; 
    }
}

class QueueWithLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(newValue) {
        const newNode = new Node(newValue);
        if( this.head === null ){
            this.head = this.tail = newNode;
        }
        else{
            // this.tail.next를 보면 노드의 구조를 떠올려야한다.
            // 여기로부터 논리가 시작된다.
            // 아래의 코드 두줄은 그 논리로 설명된다.
            // 1.(암묵적 사실) 노드는 다음을 가리키는 포인터가 있다.
            // 2.(논리의 진행(1)) this.tail.next = newNode 는 현재 tail이 
            // 가리키고 있는 노드에 다음을 가리키는 포인터에 새로운 노드를 가리키도록 한다.
            // 3.(논리의 진행(2)) this.tail = newNode는 this.tail이 다음을 가리키도록 한다. 
            this.tail.next = newNode; 
            this.tail = newNode;
        }
        this.size += 1;
    }
    
    dequeue() {
        const value = this.head.value;
        this.head = this.head.next;
        this.size -= 1;
        return value;
    }

    peek() {
        return this.head.value;
    }
}

const Queue = new QueueWithLinkedList();
Queue.enqueue(10);
Queue.enqueue(20);
Queue.enqueue(30);
Queue.enqueue(40);
Queue.enqueue(50);
Queue.enqueue(60);
Queue.enqueue(70);
console.log(Queue.dequeue());
console.log(Queue.dequeue());
console.log(Queue.dequeue());