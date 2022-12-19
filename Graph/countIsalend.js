const grid = [
    ['w', 'l', 'w', 'w', 'l', 'w'],
    ['l', 'l', 'w', 'w', 'l', 'w'],
    ['w', 'l', 'w', 'w', 'w', 'w'],
    ['w', 'w', 'w', 'l', 'l', 'w'],
    ['w', 'l', 'w', 'l', 'l', 'w'],
    ['w', 'w', 'w', 'w', 'w', 'w'],
];

function countIsland(grid) {
    const visited = [];

    let count = 0;
    // Iterate through every position
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            // If position = water => just continue
            if (grid[r][c] === 'w') continue;
            // If position = island => explore that position as far as posible
            if (explore(grid, r, c, visited) === true) count++;
        }
    }
    return count;
}

function explore(grid, r, c, visited) {
    // Base cases:
    let rowInbound = r >= 0 && r < grid.length,
        colInbound = c >= 0 && c < grid[0].length;
    if (!rowInbound || !colInbound) return false;

    // To make sure we'll not explore the water positions
    if (grid[r][c] === 'w') return false;

    let position = `(${r} , ${c})`;
    if (visited.includes(position)) return false;

    visited.push(position);

    explore(grid, r - 1, c, visited);
    explore(grid, r + 1, c, visited);
    explore(grid, r, c - 1, visited);
    explore(grid, r, c + 1, visited);

    return true;
};

console.log(countIsland(grid, 0, 1, []));