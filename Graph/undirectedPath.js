// ? Given an edge list for a undirected graph
const edges = [
    ["i", "j"],
    ["k", "i"],
    ["m", "k"],
    ["k", "l"],
    ["o", "n"],
    ["j", "k"]
]

// Todo: We will convet this edges list to an "Adjacency List"; that's because our traversal algorithms work for an "Adjacency List"
function buildGraph(edges) {
    const graph = {}
    for (let edge of edges) {
        let [key, value] = edge

        if (!graph[key]) graph[key] = []
        if (!graph[value]) graph[value] = []

        graph[key].push(value)
        graph[value].push(key)
    }
    return graph
}
console.log(buildGraph(edges))

function undirectedPath(edges, src, dst) {
    const graph = buildGraph(edges)
    return hasPath(graph, src, dst, [])
}
console.log(undirectedPath(edges, 'm', 'j'))

// Todo: Improve "hasPath()" function to handle cycles
function hasPath(graph, src, dst, visited) {
    if (src === dst) return true
    if (visited.includes(src)) return false

    visited.push(src)

    for (let neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dst, visited) === true) {
            return true
        }
    }
    return false
}

// !Notice: If hasPath() is based on BFS => we'll not need any improvement..
function hasPath_BFS(graph, src, dst) {
    if (src === dst) return true
    const queue = [src]

    while (queue.length > 0) {
        console.log(queue)
        let current = queue.shift()

        for (let neighbor of graph[current]) {
            queue.push(neighbor)
            if (neighbor === dst) return true
        }
    }
    return false
}