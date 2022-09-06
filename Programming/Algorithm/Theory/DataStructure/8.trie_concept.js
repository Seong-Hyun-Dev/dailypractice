class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
  }
}

// Study 팁 : 항상 노드를 기반으로 한다면 프로그래밍을 할 때, 노드를 기반으로 생각(노드의 구성!!!)
class Trie {
  constructor() {
    this.root = new Node();
  }
  insert(str) {
    let currentNode = this.root;
    for (const ch of str) {
      if (!currentNode.children.get(ch)) {
        currentNode.children.set(ch, new Node(currentNode.value + ch));
      }
      currentNode = currentNode.children.get(ch); //다음노드 소환
    }
  }
}
