//--- 기본강의 ---
// 단일 연결리스트 구현 -> 기본적으로 암기! :: GIT허브에 올려놓기
// GIT허브 모든 컴퓨터에서 기본적으로 깃허브를 가리키고 있어야 한다.
// 단일 연결리스트는 예제로 나와있다.

//--- 여기서부터 진짜 시작 ---
// 먼저는 단일리스트를 구현하고 암기한 후에
// 더블링크드 리스트는 스스로 구현해보기.
// 암기해서 사용하다보면 링크드리스트를 만든 제작자들의 의도나 사고방식이 단순하게 이해가 되기 시작.


// --- 소스코드 시작 ---
// 노드 : 노드는 클래스로 생성되고, 각각의 객체는 값과 다음주소를 가지고 있다.
class Node {   
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// 단일 연결리스트 객체는 head을 tail을 가지고 있다.
// 객체의 메서드는 (1)추가,(2)삽입,(3)삭제,(4)검색 + (5)디스플레이

// * Before Start...
// 메서드를 이해할때의 기본은 먼저 노드(값,nextAddress로 이뤄진)들의 임의의 나열을 상상하는 것이다.
// 임의의 나열이 없다면 나열이 존재하지 않는 경우를 가정한다.


class SinglyLinkedList{
    constructor(){
        // 여기서 this.head와 tail은 포인터이다.
        this.head = null;
        this.tail = null;
    }

    // 기본적으로 노드가 나열되어있는 있는 상황을 먼저 가정
    // 또, 나열이 없는 경우를 (스스로) 생각해봤을때 이 코드가 이것을 커버하고 있음
    append(newValue){ // append 함수는 맨 마지막의 노드뒤에 노드를 추가
        // 먼저 노드를 생성한다.
        const newNode = new Node(newValue);
        // 만약에 head와 tail이 아무것도 가리키고 있지 않다면 head와 tail을 새로운 노드를 가리키게 한다.
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        }else{ 
            // 만약 head와 tail이 무엇인가를 가리키고 있다면, this.tail은 현재 가리키고 있는 Node 객체(value,next)임.
            // 이 때, this.tail은 어떤 노드를 가리키고 있을테고, this.tail.next는 현재 this.tail이 가리키고 있는 
            // 노드가 가지고 있는 next가 될 것이다. 마지막 노드이기 때문에 Null로 설정되어있을것이고, 
            // 노드의 다음을 newNode로 설정해준다.
            // 그리고 this.tail을 newNode로 옴긴다.
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    
    // 기본적으로 노드가 나열되어있는 있는 상황을 먼저 가정
    // 또, 나열이 없는 경우를 생각해봤을때 이 코드가 이것을 커버하고 있음
    insert(node, newValue){
        const newNode = new Node(newValue);
        newNode.next = node.next;
        node.next = newNode;
    }

    // 기본적으로 노드가 나열되어있는 있는 상황을 먼저 가정
    remove(value){
        //포인터를 하나더 복제(깊은? 얕은?)
        let prevNode = this.head;
        //여기서 먼저 값을 비교하면서 탐색;
        //왜 prevNode라고 이름을 만들었지?
        while(prevNode.next.value !== value){
            prevNode = prevNode.next;
        }
        
        if(prevNode.next !== null) {
            prevNode.next = prevNode.next.next;
        }
    }

    find(value){
        let currNode = this.head;
        while( currNode.value !== value ){
            currNode = currNode.next;
        }
        return currNode;
    }


    display(){
        let currNode = this.head;
        let displayString = "[";
        while(currNode !== null){
            displayString += `${currNode.value} `;
            currNode = currNode.next;
        }
        displayString = displayString.substr(0, displayString.length-1);// -1하는 것은 뒤에 ' '하나를 빼기 위해서!
        displayString += "]";
        console.log(displayString);
    }
}

const linkedList = new SinglyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
linkedList.append(6);
linkedList.remove(1);
linkedList.display();
// console.log(linkedList.insert(linkedList.find(1),100));
// console.log(linkedList.display());