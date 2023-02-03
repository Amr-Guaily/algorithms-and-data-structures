//? Binary Search Tree (BST)
/**
 * Is a "Binary Tree" that has the following 2-properties:
 * 1- value of each "left node" must be smaller than the parent node.
 * 2- value of each "right node" must be greater than the parent node.
 */

//? How we implement BST in code
//TODO: Node Class
// Every node is going to ba an obj. with properties: [value, left, right]
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

//TODO: BST Class
// We always maintain a pointer to the "root node", this pointer is crucial to almost every opperation.
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        // return true if the BST is empty (root = null)
        return this.root == null;
    }

    // TODO: Inset a node
    insert(value) {
        // create new node 
        const node = new Node(value);
        // BST is empty 
        if (this.isEmpty()) {
            this.root = node;
            return;
        }

        // BST is not empty:
        BinarySearchTree.insertNode(this.root, node);
    };
    static insertNode(rootNode, newNode) {
        // 1- new node < root -- focus on left side
        if (newNode.value < rootNode.value) {
            // 1.1 left side of root is empty
            if (rootNode.left == null) {
                rootNode.left = newNode;
                return;
            }
            // 1.2 left side of root is not empty
            this.insertNode(rootNode.left, newNode);

            // 2- new node > root -- focus on right side
        } else {
            // 2.1 right side of node is empty
            if (rootNode.right == null) {
                rootNode.right = newNode;
                return;
            }
            // 2.2 righ is not empty
            this.insertNode(rootNode.right, newNode);
        }
    }

    //TODO: Search method
    search(rootNode, target) {
        if (!rootNode) return false;

        // The "root vale" is equal to target => Base Case
        if (rootNode.value == target) return true;

        // The "root value" is less than target => focus on left side
        if (rootNode.value > target) return this.search(rootNode.left, target);

        // The "root value" is greater than target => focus on left side
        if (rootNode.value < target) return this.search(rootNode.right, target);
    }

    //TODO: Depth First Search
    DFS(root) {
        const stack = [root];

        let valid_DFS = [];
        while (stack.length > 0) {
            let current = stack.pop();

            valid_DFS.push(current.value);

            if (current.right) stack.push(current.right);
            if (current.left) stack.push(current.left);
        }

        return valid_DFS;
    }

    //TODO: Recursive DFS
    preorder_DFS(root) {
        if (!root) return [];

        let valid_DFS = `${String(root.value)}, `;
        valid_DFS += this.preorder_DFS(root.left);
        valid_DFS += this.preorder_DFS(root.right);

        return valid_DFS;
    }


    inorder_DFS(root) {
        if (!root) return [];

        let leftValues = this.inorder_DFS(root.left);
        let rightValues = this.inorder_DFS(root.right);

        return [...leftValues, root.value, ...rightValues];
    }

    postorder_DFS(root) {
        if (!root) return [];

        let leftValues = this.inorder_DFS(root.left);
        let rightValues = this.inorder_DFS(root.right);

        return [...leftValues, ...rightValues, root.value];
    }

    //TODO: Breath First search
    BFS(root) {
        const quue = [root];

        let valid_BFS = [];
        while (quue.length > 0) {
            let current = quue.pop();
            valid_BFS.push(current.value);

            if (current.right) quue.push(current.right);
            if (current.left) quue.push(current.left);
        }

        return valid_BFS;
    }

    //TODO: min & max
    // min node => is the leftmost leaf
    minNode(root) {
        if (!root.left) return root.value;

        return this.minNode(root.left);
    }
    // max node => is the rightmost leaf
    maxNode(root) {
        if (!root.right) return root.value;

        return this.maxNode(root.right);
    }

    //TODO: Delete a node
    delete(value) {
        return this.root = this.deleteNode(this.root, value);
    }
    deleteNode(root, value) {
        if (root == null) return root;

        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            // Handle 3 cases:
            // 1- delete leaf node
            if (!root.left && !root.right) return null;

            // 2- delete node with one child
            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            }

            // 3- delete node with two child
            root.value = this.minNode(root.right);
            root.right = this.deleteNode(root.right, root.value);

        }
        return root;
    }
}

const BST = new BinarySearchTree();
// Inseration
BST.insert(10);      //       10
BST.insert(5);       //      /  \
BST.insert(15);      //     5    15
BST.insert(3);       //    / \ 
BST.insert(7);       //   3   7 

// Search
console.log(BST.search(BST.root, 3));

// DFS Traversal
console.log(BST.DFS(BST.root));
console.log(BST.preorder_DFS(BST.root));
console.log(BST.inorder_DFS(BST.root));
console.log(BST.postorder_DFS(BST.root));

// BFS Traversal
console.log(BST.BFS(BST.root));

// min & max node
console.log(BST.minNode(BST.root));
console.log(BST.maxNode(BST.root));

// Delation
console.log(BST.delete(3));
console.log(BST.delete(5));
console.log(BST.delete(10));