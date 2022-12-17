const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v'],
];


function buildGraph(edges) {
    const graph = {};

    for (let edge of edges) {
        const [key, value] = edge;

        if (!graph[key]) graph[key] = [];
        if (!graph[value]) graph[value] = [];

        graph[key].push(value);
        graph[value].push(key);

    }
    return graph;
}

function shortestPath(edges, src, dst) {
    const graph = buildGraph(edges);
    const queue = [[src, 0]];
    const visited = [src];

    while (queue.length > 0) {
        let [node, distance] = queue.shift();

        // Check if the current node is the node we are looking for
        if (node === dst) return distance;

        for (let neighbor of graph[node]) {
            if (!visited.includes(neighbor)) {
                visited.push(neighbor);
                queue.push([neighbor, distance + 1]);
            }
        }
    }

    // If there no path => return -1
    return -1;
}

console.log(shortestPath(edges, 'w', 'z'));