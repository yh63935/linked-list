// Create node that contains a value and reference to next node in the list
class Node {
    constructor(value = null, nextNode=null) {
        this.value = value;
        this.nextNode = nextNode;

    }
}

export default Node;