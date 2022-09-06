class Queue {
    constructor(){
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }

    enqueue(value){ // enqueue는 삽입(저장) rear와 관계
        this.queue[this.rear++] = value;
    }

    dequeue(){ // dequeue는 추출(제거), front와 관계
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front += 1;
        return value;
    }

    peek(){
        return this.queue[this.front];
    }

    size(){
        return this.rear - this.front;
    }
}

const newQueue = new Queue();
newQueue.enqueue(10);
newQueue.enqueue(20);
newQueue.enqueue(30);
newQueue.enqueue(40);
newQueue.enqueue(50);
newQueue.enqueue(60);
newQueue.enqueue(70);
console.log(newQueue.peek());
