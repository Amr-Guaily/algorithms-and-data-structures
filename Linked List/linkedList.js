// TODO: Node Class
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// TODO: Linked List Class
class List {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size == 0;
    }

    getSize() {
        return this.size;
    }

    // TODO: add node at the start
    prepend(value) {
        // Create the new node
        const node = new Node(value);

        // list is empty => the "head" pointer should point to the newly created node
        if (this.isEmpty()) {
            this.head = node;
        } else {
            // list is not empty, then add the newly created node to the start
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    // TODO: add node at the end
    append(value) {
        // Create the new node
        const node = new Node(value);

        // list is empty => the "head" pointer should point to the newly created node
        if (this.isEmpty()) {
            this.head = node;
        } else {
            // List is not empty, then we need to get the last node and make it point to the newly created node
            let prev = this.head;
            while (prev.next !== null) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    // TODO: insert new node at the given idx
    insert(value, idx) {
        if (idx < 0 || idx > this.size) return;

        if (idx == 0) {
            this.prepend(value);
        } else {
            const node = new Node(value);

            let prev = this.head;
            for (let i = 0; i < idx - 1; i++) prev = prev.next;

            // make the new node point to the node that the prev node points at..
            node.next = prev.next;
            // change the next pointer from the prev node to the new node..
            prev.next = node;
            this.size++;
        };
    }

    // TODO: remove node from specific idx => return removed node
    removeFrom(idx) {
        if (idx < 0 || idx > this.size) return null;

        let removedNode;
        // remove node with idx 0
        if (idx == 0) {
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for (let i = 0; i < idx - 1; i++) {
                prev = prev.next;
            }
            removedNode = prev.next;
            prev.next = prev.next.next;
        }
        this.size--;

        return removedNode.value;
    }

    // TODO: remove node "all Nodes" that has specific value => return list
    removeValue(value) {
        if (this.isEmpty()) return this.print();

        // The node to be deleted is the head node
        while (this.head.value == value) {
            this.head = this.head.next;
            this.size--;
        }

        // remove any node after the head
        let curr = this.head,
            nextNode = curr.next;
        while (curr && curr.next) {
            if (nextNode.value == value) {
                curr.next = nextNode.next;
                this.size--;
            } else {
                curr = curr.next;
            }

            nextNode = curr.next;
        }

        return this.print();
    }

    // TODO: serch in list O(n) - loop version
    find(value) {
        if (this.head.value == value) return 0;

        let idx = 1,
            curr = this.head.next;

        while (curr) {
            if (curr.value == value) return idx;
            curr = curr.next;
            idx++;
        }

        return -1;
    }

    // TODO: serch in list - recursive version
    // ## Notic: If your list has more elements than your system's call stack can handle, you may run into a stack overflow error
    recursiveFind(value, curr = this.head, idx = 0) {
        // Base case
        if (!curr) return -1;

        if (curr.value == value) return idx;

        return this.recursiveFind(value, curr.next, idx + 1);
    }

    // TODO: remove Duplicates (Sotrted List)
    removeDuplicates(value) {

    }

    // TODO: print list
    print(curr = this.head) {
        if (curr == null) return [];

        let value = this.print(curr.next);

        return [curr.value, ...value];
    }
}

const list = new List();

// add nodes at start
list.prepend(2);
list.prepend(4);
list.prepend(6);

// add nodes at end
list.append(3);
list.append(2);
list.append(2);
list.append(1);
list.append(1);

// insert node at specific idx
list.insert(15, 4);

// print all nodes
console.log(list.print());

// remove node based on its idx
console.log(list.removeFrom(4));

// remove nodes based on the value
console.log(list.removeValue(2));

// find node based on its value
console.log(list.recursiveFind(6));

// print all nodes
console.log(list.print());