class Heap {
    constructor(){
        this.heap = [null]; // 트리는 1차원 배열에서 기본적으로 0번째 인덱스는 null로 비워서 만들어 놓는다
    }
    push(value){
        this.heap.push(value);
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex / 2);
        while(
            // currentIndex가 1이 아니고
            currentIndex !== 1 &&
            // this.heap[currentIndex] > this.heap[parentIndex]일때
            this.heap[currentIndex] > this.heap[parentIndex]
        ) {
            // SWAP
            [this.heap[currentIndex],this.heap[parentIndex]] = [this.heap[parentIndex],this.heap[currentIndex]];
            // currentIndex 갱신, parentIndex 갱신
            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex/2);
        }
    }
    pop() {
        const returnValue = this.heap[1];
        this.heap[1].pop();

        let currentIndex = 1;
        let leftIndex = 2;
        let rightIndex = 3;
        
        while(
            this.heap[currentIndex] < this.heap[leftIndex] ||
            this.heap[currentIndex] < this.heap[rightIndex] 
            // 어떤 의도로 while문안의 조건을 이렇게 썼는가 -> 이게 핵심!!
        ) {
            if(this.heap[leftIndex] < this.heap[rightIndex]){
                [this.heap[currentIndex],this.heap[rightIndex]] = [this.heap[rightIndex],this.heap[currentIndex]];
                currentIndex = rightIndex;
            } else {
                [this.heap[currentIndex],this.heap[leftIndex]] = [this.heap[leftIndex],this.heap[currentIndex]];
                currentIndex = leftIndex;
            }
        }

        return returnValue;
    }
}

const heap = new Heap();
heap.push(3);
heap.push(3000);
heap.push(300);
heap.push(30);
heap.push(31);
heap.push(34);
heap.push(30000);
heap.push(50000);
heap.push(90000);
heap.push(80000);
heap.push(20000);
heap.push(1000);
console.log(heap.heap);