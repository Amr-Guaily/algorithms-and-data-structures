const grid = [
    ['w', 'l', 'w', 'w', 'l', 'w'],
    ['l', 'l', 'w', 'w', 'l', 'w'],
    ['w', 'l', 'w', 'w', 'w', 'w'],
    ['w', 'w', 'w', 'l', 'l', 'w'],
    ['w', 'l', 'w', 'l', 'l', 'w'],
    ['w', 'w', 'w', 'w', 'w', 'w'],
];

function minimunIsland(grid) {
    let visited = [];
    let minSize = Infinity;
    // Iterate through every position position
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid.length; c++) {
            // If position = water => just continue
            if (grid[r][c] == 'w') continue;
            // If position = island => explore that position as far as posible
            const size = exploreSize(grid, r, c, visited);

            if (size < minSize && size > 0) minSize = size;
        }
    }

    return minSize;
}

function exploreSize(grid, r, c, visited) {
    // Base Cases
    let rowInbound = r >= 0 && r < grid.length,
        colInbound = c >= 0 && c < grid[0].length;
    if (!rowInbound || !colInbound) return 0;

    // To make sure we'll not explore the water positions
    if (grid[r][c] === 'w') return 0;

    let position = `(${r} , ${c})`;
    if (visited.includes(position)) return 0;

    visited.push(position);

    let size = 1;
    size += exploreSize(grid, r - 1, c, visited);
    size += exploreSize(grid, r + 1, c, visited);
    size += exploreSize(grid, r, c - 1, visited);
    size += exploreSize(grid, r, c + 1, visited);

    return size;
}
console.log(minimunIsland(grid));