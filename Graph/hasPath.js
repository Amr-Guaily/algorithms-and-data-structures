const graph = {
    f: ["g", 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
}

// TODO: Based on DFS
function hasPaht_DFS(graph, src, dst) {
    if (src === dst) return true

    for (let neighbor of graph[src]) {
        if (hasPaht_DFS(graph, neighbor, dst) === true) {
            return true
        }
    }

    return false
}
console.log(hasPaht_DFS(graph, 'f', 'k'))   // true

// TODO: Based on BFS
function hasPath_BFS(graph, src, dst) {
    if (src === dst) return true

    const queue = [src]
    while (queue.length > 0) {
        let current = queue.shift()

        for (let neighbor of graph[current]) {
            queue.push(neighbor)
            if (neighbor === dst) return true
        }
    }

    return false
}
hasPath_BFS(graph, 'f', 'k')  // true