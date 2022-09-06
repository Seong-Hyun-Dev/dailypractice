class Node {
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class binarySearchTree {

    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return;
        }
        let currentNode = this.root;
        while(currentNode !== null) {
            if(currentNode.value < value) {
                if(currentNode.right === null) {
                    currentNode.right = newNode;
                    break;
                }
                currentNode = currentNode.right;
            } else {
                if(currentNode.left === null) {
                    currentNode.left = newNode;
                    break;
                }
                currentNode = currentNode.left;
            }
        }
    }

    has(value) {
        let currentNode = this.root;
        while(currentNode !== null){
            if(currentNode.value === value){
                return true;
            }

            if(currentNode.value < value) {
                currentNode = currentNode.right;
            } else {
                currentNode = currentNode.left;
            }
        }

        return false;
    }
}

const tree = new binarySearchTree();
tree.insert(5)
tree.insert(4)
tree.insert(7)
tree.insert(8)
tree.insert(10)
tree.insert(50)
tree.insert(45)
tree.insert(35)
tree.insert(65)
console.log(tree.has(35));