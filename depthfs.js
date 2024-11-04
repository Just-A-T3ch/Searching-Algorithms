//O(w * h)``**2) time complexity.
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

  //left
  if (x >= 1 && arr[y][x - 1] !== "#") neighbors.push([y, x - 1]);
  //right
  if (x < arr[y].length - 1 && arr[y][x + 1] !== "#") neighbors.push([y, x + 1]);
  //top
  if (y >= 1 && arr[y - 1][x] !== "#") neighbors.push([y - 1, x]);
  //bottom
  if (y < arr.length - 1 && arr[y + 1][x] !== "#") neighbors.push([y + 1, x]);

  return neighbors;
}

function dfs(array) {
  const visited = new Set();
  const stack = [[0, 0]]; // y, x

  while (stack.length > 0) {
    const pos = stack.pop();
    const [y, x] = pos;

    if (array[y][x] === "X") break;

    const strPos = getStringPos(pos);
    visited.add(strPos);

    const neighbors = getNeighbors(array, x, y);
    for (const neighbor of neighbors) {
      const strNeighbor = getStringPos(neighbor);
      if (visited.has(strNeighbor)) continue;
      stack.push(neighbor);
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

const path = dfs(maze);
console.log(path);

for (const pos of path) {
  const [y, x] = pos.split(",");
  maze[y][x] = "X";
}

printMaze(maze);
