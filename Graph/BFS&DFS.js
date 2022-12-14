const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    f: [],
    e: []
}

// ? DFS => once we visited a new verix, Suspend the exploration of the current vertix and start exploring new vertix.
function DFS_Printed(graph, startNode) {
    const stack = [startNode]

    let validDFS = ''
    while (stack.length > 0) {
        let current = stack.pop()
        validDFS += `${current}, `

        for (let neighbor of graph[current]) {
            stack.push(neighbor)
        }
    }
    return validDFS
}
console.log(DFS_Printed(graph, 'a'))

/**
 * TODO: DFS in recursive way..
 * ! Notice: We has no explicit "Base-Case"; and that's because we have implicit "Base-Case", What means!?
 *  ## when a node is a "dead node" - you iterate through an empty arr, So you never make a recursive call in this case
 *  */
function DFS_Recursivly(graph, startNode) {
    console.log(startNode)
    for (let neighbor of graph[startNode]) {
        DFS_Recursivly(graph, neighbor)
    }
}
DFS_Recursivly(graph, 'a')

// ? BFS => From the starting node, we'll explore all of the immediate neighbors of this vertix, then got to the next vertix for exploration.
function BFS_Printed(graph, startNode) {
    const queue = [startNode]

    let validBFS = ''
    while (queue.length > 0) {
        let current = queue.shift()
        validBFS += `${current}, `

        for (let neighbor of graph[current]) {
            queue.push(neighbor)
        }
    }
    return validBFS
}
console.log(BFS_Printed(graph, 'a'))

// ! Notice: If you try to implement a BFS in Recursive way - Under the hood Recursion uses a "Stack", So that's going to conflicit with "Queue" order