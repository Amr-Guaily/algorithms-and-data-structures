//? 733. Flood Fill
const image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];
function floodFill(image, sr, sc, color) {
    let pixl = image[sr][sc];
    explore_DFS(image, sr, sc, pixl, color);
    return image;
}
function explore_DFS(grid, r, c, pixl, color, visited = []) {
    let rowInbound = r >= 0 && r < grid.length,
        colInbound = c >= 0 && c < grid[0].length;
    if (!rowInbound || !colInbound) return false;

    let position = `(${r},${c})`;
    if (visited.includes(position)) return false;
    visited.push(position);

    if (grid[r][c] !== pixl) return false;

    grid[r][c] = color;

    explore_DFS(grid, r + 1, c, pixl, color, visited);
    explore_DFS(grid, r - 1, c, pixl, color, visited);
    explore_DFS(grid, r, c - 1, pixl, color, visited);
    explore_DFS(grid, r, c + 1, pixl, color, visited);
}
console.log(floodFill(image, 1, 1, 2));

// ************* ################### *************

const grid = [
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
];
function maxAreaOfIsland(grid) {
    let maxSize = 0;

    const visited = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 0) continue;
            const size = explore(grid, i, j, visited);
            if (size > maxSize) maxSize = size;
        }
    }
    return maxSize;
}
function explore(grid, r, c, visited) {
    // Base Cases
    let rowInbound = r >= 0 && r < grid.length,
        colInbound = c >= 0 && c < grid[0].length;
    if (!rowInbound || !colInbound) return 0;

    if (grid[r][c] == 0) return 0;

    let position = `${r}, ${c}`;
    if (visited.includes(position)) return 0;
    visited.push(position);

    let size = 1;
    size += explore(grid, r - 1, c, visited);
    size += explore(grid, r + 1, c, visited);
    size += explore(grid, r, c - 1, visited);
    size += explore(grid, r, c + 1, visited);

    return size;

}
console.log(maxAreaOfIsland(grid, 1, 1, 2));

