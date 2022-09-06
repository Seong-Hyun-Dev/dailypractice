// 실패 vs 성공 => 차이점 비교
// point 1. 
// if (works.reduce((a, b) => a + b) <= no) { 
//     return 0;
// }
// point 2.
// Heap의 구현 비교...


// 실패
class Heap { // Max Heap
    constructor(){
        this.heap = [null];
    }
    push(value) {
        this.heap.push(value);
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex / 2);
        
        while(
            currentIndex !== 1 &&
            this.heap[currentIndex] > this.heap[parentIndex]
        ) {
            [this.heap[currentIndex],this.heap[parentIndex]] = [this.heap[parentIndex],this.heap[currentIndex]];
            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }
    pop() {
        const returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();
        
        let currentIndex = 1;
        let leftIndex = 2;
        let rightIndex = 3;
        
        while(
            this.heap[currentIndex] < this.heap[leftIndex] || 
            this.heap[currentIndex] < this.heap[rightIndex]
        ) {
            if(this.heap[leftIndex] < this.heap[rightIndex]) {
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

function solution(no, works) {
    if (works.reduce((a, b) => a + b) <= no) { 
      return 0;
    }
    // max heap 구성
    const heap = new Heap();
    for (const work of works) {
        heap.push(work);
    }
    // console.log(heap);
    // no만큼 루프 돌면서 가장 큰 값을 빼서 처리 후 다시 push
    for (let i = 0; i < no; i += 1) {
        heap.push(heap.pop() - 1);
    }
    // 남은 요소에 제곱한 값들의 합을 구한 후 반환
    return heap.heap.reduce((a, b) => a + b * b);
}


// 성공
class MaxHeap {
    constructor() {
        this.heap = [null];
    }
  
    push(value) {
        this.heap.push(value);
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex / 2);
  
        while (parentIndex !== 0 && this.heap[parentIndex] < value) {
            const temp = this.heap[parentIndex];
            this.heap[parentIndex] = value;
            this.heap[currentIndex] = temp;
  
            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }
  
    pop() {
        if (this.heap.length === 2) return this.heap.pop(); // 루트 정점만 남은 경우
  
        const returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();
  
        let currentIndex  = 1;
        let leftIndex = 2;
        let rightIndex = 3;
        while (this.heap[currentIndex] < this.heap[leftIndex] || 
               this.heap[currentIndex] < this.heap[rightIndex]) {
            if (this.heap[leftIndex] < this.heap[rightIndex]) {
                const temp = this.heap[currentIndex];
                this.heap[currentIndex] = this.heap[rightIndex];
                this.heap[rightIndex] = temp;
                currentIndex = rightIndex;
            } else {
                const temp = this.heap[currentIndex];
                this.heap[currentIndex] = this.heap[leftIndex];
                this.heap[leftIndex] = temp;
                currentIndex = leftIndex;
            }
            leftIndex = currentIndex * 2;
            rightIndex = currentIndex * 2 + 1;
        }
  
        return returnValue;
    }
  }


function solution(no, works) {
    // 모든 작업의 합보다 no가 크면 배상 비용을 낼 필요가 없다.
    if (works.reduce((a, b) => a + b) <= no) { 
        return 0;
    }
  
    // max heap 구성
    const heap = new MaxHeap();
    for (const work of works) {
        heap.push(work);
    }

    // no만큼 루프 돌면서 가장 큰 값을 빼서 처리 후 다시 push
    for (let i = 0; i < no; i += 1) {
        heap.push(heap.pop() - 1);
    }

    // 남은 요소에 제곱한 값들의 합을 구한 후 반환
    return heap.heap.reduce((a, b) => a + b * b);
}