class Node2 {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class List2 {
    #head = null;
    #tail = null;
    #size = 0;
    constructor() {
        this.#head = null;
        this.#tail = null;
        this.#size = 0;
    }

    get length() {
        return this.#size;
    }

    /**
     * @param {object} head 
     */
    set head(head) {
        // some validation before setting value..
        if (!head instanceof Node2) throw new Error('Head must be an object');
        this.#head = head;
    }

    /**
     * @param {object} tail
     */
    set tail(tail) {
        // some validation before setting value..
        if (!tail instanceof Node2) throw new Error('Head must be an object');
        this.#tail = tail;
    }

    isEmpty() {
        return this.length == 0;
    };

    prepend(value) {
        const node = new Node2(value);

        if (this.isEmpty()) {
            this.#head = node;
            this.#tail = node;
        } else {
            node.next = this.#head;
            this.#head = node;
        }
        this.#size++;
    }

    append(value) {
        const node = new Node2(value);

        if (this.isEmpty()) {
            this.#head = node;
            this.#tail = node;
        } else {
            this.#tail.next = node;
            this.#tail = node;
        }
        this.#size++;
    }

    print(curr = this.#head) {
        if (curr == null) return [];

        let value = this.print(curr.next);

        return [curr.value, ...value];
    }
}

const linkedList = new List2();

linkedList.prepend(2);
linkedList.prepend(1);

linkedList.append(5);

console.log(linkedList.print());