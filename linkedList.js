// Single linked list NOT double
class LinkedList {
    constructor(headNode = null) {
        this.headNode = headNode;
    }

    // Adds a new node containing value to the end of the list
    append(value) {
        const newNode = new Node(value);
        if(!this.headNode) {
            this.headNode = newNode;
        } else {
            this.tail.nextNode = newNode;
        }
    }

    // Adds a new node containing value to the start of the list
    prepend(value) {
        if(!this.headNode) {
            this.headNode = new Node(value);
        } else {
            let oldHeadNode = this.headNode;
            const newHeadNode = new Node(value, oldHeadNode);
            this.headNode = newHeadNode;

        }
    }

    // Returns the total number of nodes in the list
    get size() {
        let node = this.headNode;
        let size = 0;

        while(node) {
            size++;
            node = node.nextNode;
        }

        return size;
    }

    // Returns the first node in the list
    get head() {
        return this.headNode;
    }

    // Returns the last node in the list
    get tail() {
        let node = this.headNode
        while(node.nextNode) {
            node = node.nextNode;
        }
        return node;
    }

    // Returns the node at the given index
    at(index) {
        let currentIndex = 0;

        // Return null if index is negative
        if(index < 0) {
            return null;
        }

        let currentNode = this.headNode;

        while(currentNode && currentIndex < index) {
            currentNode = currentNode.nextNode;
            currentIndex++;
        }
        return currentNode;
    }

    // Removes the last element from the list
    pop() {
        let currentNode = this.headNode;
        let previousNode = null;

        // Handle the case of just one node
        if(this.headNode === this.tail) {
            this.headNode = null;
        }
        // If the next node of the current node isn't the tail, keep going till the next node is
        // That way you can find out what the previous node of the tail is while traversing the list
        while(currentNode.nextNode !== this.tail) {
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
        }

        // Set the tail's previous node's next node to null, removing tail from linkedList
        currentNode.nextNode = null;
    }

    // Returns true if the passed in value is in the list and otherwise returns false
    contains(value) {
        let node = this.headNode;
        while(node) {
            if(node.value === value) {
                return true;
            }
            node = node.nextNode;
        }

        return false;
    }

    // Returns the index of the node containing value, or null if not found
    find(value) {
        // Going to assume that we are just going to find first instance of the value
        let currentNode = this.headNode;
        let currentIndex = 0;
        if(this.contains(value)) {
            while(currentNode.nextNode && currentNode.value !== value) {
                currentNode = currentNode.nextNode;
                currentIndex++;
            }
            return currentIndex;
        }
        return null;
    }

    // Represents linkedList as strings in the format: ( value ) -> ( value ) -> ( value ) -> null
    toString() {
        let currentNode = this.headNode;
        let linkedListString = "";

        while(currentNode) {
            linkedListString+= `( ${currentNode.value} ) -> `
            currentNode = currentNode.nextNode;
        }

        linkedListString+="null"
        return linkedListString;
    }

    // Insert a node with the value at the index specified
    insertAt(value, index) {
        const newIndexNode = new Node(value);
        const oldIndexNode = this.at(index);

        // Return if index is negative or larger than length of linkedList
        if(index < 0 || index > this.size) {
            console.log("Index is out of range, enter a valid index")
            return;
        }
        if(oldIndexNode === this.headNode) {
            this.headNode = newIndexNode;
            this.headNode.nextNode = oldIndexNode;
        } else {
            const oldIndexNodePrevNode = this.at(index-1);
            oldIndexNodePrevNode.nextNode = newIndexNode;
            newIndexNode.nextNode = oldIndexNode;
        }
    }

    // Removes the node at the index specified
    removeAt(index) {
        const indexNodeToRemove = this.at(index);
        const indexNodeToRemoveNextNode = indexNodeToRemove.nextNode;

        // Return if index is negative or larger than length of linkedList
        if(index < 0 || index > this.size - 1) {
            console.log("Index is out of range, enter a valid index")
            return;
        }

        if(indexNodeToRemove === this.headNode) {
            this.headNode = indexNodeToRemoveNextNode;
            return;
        }

        const indexNodeToRemovePrevNode = this.at(index-1);
        indexNodeToRemovePrevNode.nextNode = indexNodeToRemoveNextNode;

    }

}

// Create node that contains a value and reference to next node in the list
class Node {
    constructor(value = null, nextNode=null) {
        this.value = value;
        this.nextNode = nextNode;

    }
}
