// Circular Queue는 링크드리스트로 구현하면 이점이 없다. 따라서 배열로 구현
class QueueWithCircularQueue{
    constructor(maxSize){
        this.maxSize = maxSize;
        this.queue = [];
        this.front = 0;
        this.rear = 0;
        this.size = 0;
    }
    
    isFull(){
        return this.size === this.maxSize;
    }

    enqueue(value){
        if(this.isFull()){
            console.log("Queue is Full");
            return;
        }
        this.queue[this.rear] = value;
        this.rear = (this.rear + 1) % this.maxSize;
        this.size += 1;
    }

    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front = (this.front + 1) % this.maxSize;
        this.size -= 1;
        return value;
    }

    peek() {
        return this.queue[this.front];
    }
}

console.log("start");
const queue = new QueueWithCircularQueue(5);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log("size : ", queue.size);