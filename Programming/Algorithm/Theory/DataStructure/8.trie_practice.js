class Node {
    constructor(value="") {
        this.value = value;
        this.children = new Map();
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }
    insert(str){
        let currentNode = this.root;
        for(const ch of str){
            if(!currentNode.children.get(ch)){
                currentNode.children.set(
                    ch,
                    new Node(currentNode.value + ch)
                );
            }
            currentNode = currentNode.children.get(ch);
        }
    }
    has(str){
        let currentNode = this.root;
        for(const ch of str){
            if(!currentNode.children.get(ch)){
                return false;
            }
            currentNode = currentNode.children.get(ch);
        }
        return true;
    }
}

function solution(words) {
    const trie = new Trie();
    for(const str of words) trie.insert(srt);
    for(const str of words) console.log(trie.has(str))
}