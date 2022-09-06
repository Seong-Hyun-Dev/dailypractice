// 큐 문제라는 힌트를 얻고, 큐를 생성함
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.head = null;
        this.tail = null;
    }
    
    enqueue(newValue){
        const newNode = new Node(newValue);
        if(this.head === null){
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    
    dequeue() {
        const value = this.head.value;
        this.head = this.head.next;
        return value;
    }
    
    peek() {
        return this.head.value;
    }
}

// 큐를 활용하여 문제를 푸는데,
// 1. 큐( [우선순위, 인덱스]노드로 구성 )를 만들어서 입력
// 2. 인풋된 우선순위 배열을 내림차순 정렬
// 3. While문 안에서 큐에서 현재 노드를 peek해서 
//    내림차순 정렬된 우선순위와 비교해서 Count를 +1 추가하고 
//    인풋된 로케이션과 현재 dequeue된 노드의 인덱스가 같다면 count를 리턴!

// 여기서..
// 문제점1. 문제를 보고 어떻게 이렇게 떠올리는지 감을 잡지 못함
// 문제점2. while문 안에서 일어나는 프로세스에 대해서 완벽한 통찰을 얻지 못함
// 계속 생각해보기!
function solution(priorities, location) {
    const queue = new Queue();
    for( let i = 0; i < priorities.length; i += 1){
        queue.enqueue([priorities[i],i]);
    }
    priorities.sort((a,b) => b-a); //우선순위 정렬
    
    let count = 0;
    while(true){
        const currentValue = queue.peek();
        if(currentValue[0] < priorities[count]){
            queue.enqueue(queue.dequeue());
        } else {
            const value = queue.dequeue();
            count += 1;
            if(location === value[1]){
                return count;
            }
        }
    }
}