const graph2 = {
    i: ['j', 'k'],
    j: ['i', 'k'],
    k: ['i', 'm', 'l', 'j'],
    m: ['k'],
    l: ['k'],
    o: ['n'],
    n: ['o']
}
const graph = {
    3: [],
    4: [6],
    6: [4, 5, 7, 8],
    8: [6],
    7: [6],
    5: [6],
    1: [2],
    2: [1]
}

function countConnected(graph) {
    const visited = []
    let count = 0
    // Iterate throgh every node
    for (let node in graph) {
        if (explore_DFS(graph, node, visited) === true) count++
    }
    return count
}

// TODO: Explore function based on DFS
function explore_DFS(graph, node, visited) {
    // Check if the node is already visited 
    if (visited.includes(String(node))) return false

    visited.push(String(node))
    for (let neighbor of graph[node]) {
        explore_DFS(graph, neighbor, visited)
    }
    // finish exploring..
    return true
}

// TODO: Explore function based on BFS
function explore_BFS(graph, node, visited) {
    if (visited.includes(node)) return false
    const queue = [node]

    visited.push(String(node))
    while (queue.length > 0) {
        let current = queue.shift()
        for (let neighbor of graph[current]) {
            if (!visited.includes(String(neighbor))) {
                queue.push(neighbor)
                visited.push(String(neighbor))
            }
        }
    }
    return true
}
console.log(countConnected(graph))   // 3
console.log(countConnected(graph2))  // 2
