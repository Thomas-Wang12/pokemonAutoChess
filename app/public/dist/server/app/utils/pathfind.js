"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPath = exports.getNeighbors = exports.getHeuristic = void 0;
const defaultGrid = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
];
const getHeuristic = (a, b) => {
    return Math.max(Math.abs(b.x - a.x), Math.abs(b.y - a.y));
};
exports.getHeuristic = getHeuristic;
const getNeighbors = (node, grid) => {
    const directions = [
        { x: 1, y: 0 },
        { x: -1, y: 0 },
        { x: 0, y: 1 },
        { x: 0, y: -1 },
        { x: 1, y: 1 },
        { x: -1, y: -1 },
        { x: 1, y: -1 },
        { x: -1, y: 1 }
    ];
    const neighbors = [];
    directions.forEach((dir) => {
        const x = node.x + dir.x;
        const y = node.y + dir.y;
        if (x >= 0 && x < grid[0].length && y >= 0 && y < grid.length) {
            if (grid[y][x] === 1) {
            }
            else {
                neighbors.push({
                    x,
                    y,
                    g: 0,
                    h: 0,
                    f: 0,
                    parent: node
                });
            }
        }
    });
    return neighbors;
};
exports.getNeighbors = getNeighbors;
const findPath = (board, start, goal) => {
    const gridCopy = defaultGrid.map((row) => row.slice());
    const pokemonCoordinates = board.getAllPokemonCoordinates();
    pokemonCoordinates.forEach(({ x, y }) => {
        if (gridCopy[y] &&
            gridCopy[y][x] !== undefined &&
            !(x === goal[0] && y === goal[1])) {
            gridCopy[y][x] = 1;
        }
    });
    const startNode = {
        x: start[0],
        y: start[1],
        g: 0,
        h: (0, exports.getHeuristic)({ x: start[0], y: start[1], g: 0, h: 0, f: 0 }, { x: goal[0], y: goal[1], g: 0, h: 0, f: 0 }),
        f: 0
    };
    startNode.f = startNode.g + startNode.h;
    const goalNode = { x: goal[0], y: goal[1], g: 0, h: 0, f: 0 };
    const openList = [startNode];
    const closedList = new Set();
    while (openList.length > 0) {
        openList.sort((a, b) => a.f - b.f);
        const currentNode = openList.shift();
        closedList.add(`${currentNode.x},${currentNode.y}`);
        if (currentNode.x === goalNode.x && currentNode.y === goalNode.y) {
            const path = [];
            let node = currentNode;
            while (node) {
                if (!(node.x === start[0] && node.y === start[1])) {
                    path.unshift([node.x, node.y]);
                }
                node = node.parent;
            }
            return path;
        }
        for (const neighbor of (0, exports.getNeighbors)(currentNode, gridCopy)) {
            if (closedList.has(`${neighbor.x},${neighbor.y}`))
                continue;
            const g = currentNode.g +
                (neighbor.x !== currentNode.x && neighbor.y !== currentNode.y
                    ? Math.SQRT2
                    : 1);
            const h = (0, exports.getHeuristic)({ x: neighbor.x, y: neighbor.y, g: 0, h: 0, f: 0 }, goalNode);
            const f = g + h;
            const openNode = openList.find((n) => n.x === neighbor.x && n.y === neighbor.y);
            if (openNode && f >= openNode.f)
                continue;
            const newNode = {
                x: neighbor.x,
                y: neighbor.y,
                g,
                h,
                f,
                parent: currentNode
            };
            openList.push(newNode);
        }
    }
    return [];
};
exports.findPath = findPath;
//# sourceMappingURL=pathfind.js.map