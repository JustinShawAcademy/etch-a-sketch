const gridContainer = document.getElementById('grid-container');
const gridSizeLabel = document.getElementById('grid-size-label');
const gridSizeSlider = document.getElementById('grid-size-slider');
const drawBtn = document.getElementById('draw-btn');
const eraseBtn = document.getElementById('erase-btn');
const rainbowBtn = document.getElementById('rainbow-btn');
const clearBtn = document.getElementById('clear-btn');
const GRID_SIZE = 16;

const rainbowColors = [
    '#ff0000', // red
    '#ff8000', // orange  
    '#ffff00', // yellow
    '#80ff00', // lime
    '#00ff00', // green
    '#00ff80', // teal
    '#00ffff', // cyan
    '#0080ff', // sky blue
    '#0000ff', // blue
    '#8000ff', // purple
    '#ff00ff', // magenta
    '#ff0080'  // pink
];

let currentMode = 'draw';

function getRandomRainbowColor() {
    const randomIndex = Math.floor(Math.random() * rainbowColors.length);
    return rainbowColors[randomIndex];
}

function clearGrid() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = '';
    });
}

// default grid
createGrid(GRID_SIZE);

// grid gridContainer
function createGrid(grid_size) {
    gridContainer.style.gridTemplateColumns = `repeat(${grid_size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${grid_size}, 1fr)`;
    for (let i = 0; i < grid_size * grid_size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', () => {
            if (currentMode === 'draw') {
                square.style.backgroundColor = 'black';
            } else if (currentMode === 'erase') {
                square.style.backgroundColor = '';
            } else if (currentMode === 'rainbow') {
                square.style.backgroundColor = getRandomRainbowColor();
            }
        });
        gridContainer.appendChild(square);
    }
}

// grid slider
gridSizeSlider.addEventListener('input', () => {
    const newSize = gridSizeSlider.value;
    gridSizeLabel.textContent = `${newSize} x ${newSize}`
    gridContainer.innerHTML = '';
    createGrid(newSize);

})

// mode button handlers
drawBtn.addEventListener('click', () => {
    currentMode = 'draw';
    drawBtn.classList.add('active');
    eraseBtn.classList.remove('active');
    rainbowBtn.classList.remove('active');
});

eraseBtn.addEventListener('click', () => {
    currentMode = 'erase';
    eraseBtn.classList.add('active');
    drawBtn.classList.remove('active');
    rainbowBtn.classList.remove('active');
});

rainbowBtn.addEventListener('click', () => {
    currentMode = 'rainbow';
    rainbowBtn.classList.add('active');
    drawBtn.classList.remove('active');
    eraseBtn.classList.remove('active');
});

// clear button handler
clearBtn.addEventListener('click', clearGrid);





