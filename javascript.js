let drawingBoard = document.getElementById('drawingBoard')

function createGrid (size) {
    // let pixels = document.querySelectorAll(".pixel");
    // pixels.forEach((e) => {e.remove()});
    drawingBoard.innerHTML = '';
    drawingBoard.style = `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);`;
    for (let index = 0; index < (size * size); index++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.addEventListener('mouseover', (e) => {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            e.target.style.background = "#" + randomColor;
        });
        drawingBoard.appendChild(pixel);
    }
}

createGrid(5);