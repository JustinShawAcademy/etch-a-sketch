const container = document.getElementById('grid-container');
const gridSizeLabel = document.getElementById('grid-size-label');
const gridSizeSlider = document.getElementById('grid-size-slider');
const GRID_SIZE = 16;

// default grid
createGrid(GRID_SIZE);

// grid container
function createGrid(grid_size) {
    container.style.gridTemplateColumns = `repeat(${grid_size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${grid_size}, 1fr)`;
    for (let i = 0; i < grid_size * grid_size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });
        container.appendChild(square);
    }
}

// grid slider
gridSizeSlider.addEventListener('input', () => {
    const newSize = gridSizeSlider.value;
    gridSizeLabel.textContent = `${newSize} x ${newSize}`
    container.innerHTML = '';
    createGrid(newSize);

})







