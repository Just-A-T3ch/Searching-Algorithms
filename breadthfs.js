//How Depth first search and Breadth first Search algorithm works when it comes to traversing this maze.

// Breadth First Search.
const maze = [
  [" ", '#', '#', '#', '#', '#', '#', '#', '#', " "],
  [" ", " ", " ", " ", " ", '#', " ", " ", " ", " "],
  ['#', '#', '#', '#', " ", '#', " ", '#', '#', '#'],
  [" ", " ", " ", " ", " ", " ", " ", '#', " ", " "],
  [" ", '#', '#', '#', '#', '#', '#', '#', '#', " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", '#'],
  ['#', '#', '#', '#', " ", '#', '#', '#', " ", " "],
  [" ", " ", " ", " ", " ", '#', " ", " ", '#', '#'],
  [" ", '#', '#', '#', " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", '#', '#', '#', '#', "x"]
];

function getStringPos(pos) {
  return `${pos[0]},${pos[1]}`
}

function getNeighbors(arr, x, y) {
  const neighbors = [];

  //top
  if (y >= 1 && arr[y - 1][x] !== "#") neighbors.push([y - 1, x]);
  //bottom
  if (y < arr.length - 1 && arr[y + 1][x] !== "#") neighbors.push([y + 1, x]);
  //right
  if (x < arr[y].length - 1 && arr[y][x + 1] !== "#") neighbors.push([y, x + 1]);
  //left
  if (x >= 1 && arr[y][x - 1] !== "#") neighbors.push([y, x - 1]);

  return neighbors;
}

function bfs(array) {
  const visited = new Set();
  const queue = [[0, 0]]; // y, x

  while (queue.length > 0) {
    const pos = queue.shift();
    const [y, x] = pos;

    if (array[y][x] === "X") break;

    const strPos = getStringPos(pos);
    visited.add(strPos);

    const neighbors = getNeighbors(array, x, y);
    for (const neighbor of neighbors) {
      const strNeighbor = getStringPos(neighbor);
      if (visited.has(strNeighbor)) continue;
      queue.push(neighbor);
    }
  }

  return visited;
}

function printMaze(maze) {
  let mazeString = "";
  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      mazeString += maze[i][j] + " ";
    }
    mazeString += "\n";
  }
  console.log(mazeString);
}

const path = bfs(maze);
console.log(path);

for (const pos of path) {
  const [y, x] = pos.split(",");
  maze[y][x] = "X";
}

printMaze(maze);
