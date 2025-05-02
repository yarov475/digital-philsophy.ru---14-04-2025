const canvas = document.getElementById('gameOfLife');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let cols = Math.floor(canvas.width / 10);
let rows = Math.floor(canvas.height / 10);
let size = 10;
let grid = createGrid();

function createGrid() {
  return new Array(cols).fill(null)
    .map(() => new Array(rows).fill(null)
    .map(() => Math.random() > 0.8 ? 1 : 0));
}

function drawGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      if (grid[x][y]) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(x * size, y * size, size, size);
      }
    }
  }
}

function nextGeneration() {
  const newGrid = grid.map(arr => [...arr]);
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      let neighbors = 0;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (i === 0 && j === 0) continue;
          let col = (x + i + cols) % cols;
          let row = (y + j + rows) % rows;
          neighbors += grid[col][row];
        }
      }
      if (grid[x][y] === 1 && (neighbors < 2 || neighbors > 3)) {
        newGrid[x][y] = 0;
      }
      if (grid[x][y] === 0 && neighbors === 3) {
        newGrid[x][y] = 1;
      }
    }
  }
  grid = newGrid;
}

function update() {
  drawGrid();
  nextGeneration();
  requestAnimationFrame(update);
}

update();
