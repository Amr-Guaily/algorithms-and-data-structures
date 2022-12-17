const graph = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2],
};

function largestComponent(graph) {
    const visited = [];
    let largest = 0;

    for (let node in graph) {
        let size = exploreSize_DFS(graph, node, visited);
        if (size > largest) largest = size;
    }

    return largest;
}

// TODO: Explore function based on DFS
function exploreSize_DFS(graph, node, visited) {
    if (visited.includes(String(node))) return 0;

    visited.push(String(node));

    let size = 1;
    for (let neighbor of graph[node]) {
        size += exploreSize_DFS(graph, neighbor, visited);
    }
    return size;
}

// TODO: Explore function based on BFS
function exploreSize_BFS(graph, node, visited) {
    if (visited.includes(node)) return 0;
    const queue = [node];

    visited.push(String(node));

    let size = 1;
    while (queue.length > 0) {
        let current = queue.shift();
        for (let neighbor of graph[current]) {
            if (!visited.includes(String(neighbor))) {
                queue.push(neighbor);
                visited.push(String(neighbor));
                size++;
            }
        }
    }
    return size;
}

console.log(largestComponent(graph, 0, []));