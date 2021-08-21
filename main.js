function promptUser() {
    let userInput;
    do {
        userInput = parseInt(window.prompt("Type a whole number between 1 and a 100."), 10);
    } while (isNaN(userInput) || userInput < 1 || userInput > 100);

    return userInput;
};

function deleteOld() {
    let promptInput = promptUser()
    const body = document.querySelector('body')
    const container = document.querySelector('.container');
    const button = document.querySelector('.btn')
    body.removeChild(container)
    const newContainer = document.createElement(`div`);
    newContainer.classList.add(`container`);
    body.insertBefore(newContainer, button)
    createGrid(promptInput)
};

function createGrid(gridSize=16) {
    const container = document.querySelector('.container');
    container.setAttribute('draggable', 'false');

    let itemSize = 900/gridSize;

    for (i = 1; i <= gridSize; i++) {
        const row = document.createElement(`div`);
        row.classList.add(`row`);
        row.style.display = 'flex';
        row.setAttribute('draggable', 'false');

        for (j = 1; j <= gridSize; j++) {
            const item = document.createElement(`div`);
            item.classList.add(`grid-item`);
            item.style.width = `${itemSize}px`;
            item.style.height = `${itemSize}px`;
            item.style.background = 'ghostwhite'
            item.setAttribute('draggable', 'false');
            item.style.border = '1px solid hsla(0, 0%, 50%, .25)';
            row.appendChild(item);
        };
        container.appendChild(row);
    };

    const item = document.querySelectorAll('.grid-item');
    container.addEventListener('mousedown', toggleMouseDown);
    window.addEventListener('mouseup', toggleMouseUp);
    window.addEventListener('mouseleave', toggleMouseUp);

    item.forEach((gridItem) => {
        gridItem.addEventListener('mouseover', function(e) {
            if (isDown == true) {
                e.target.style.background = 'black';
            };
        });
        gridItem.addEventListener('mousedown', function(e) {
            e.target.style.background = 'black';
        });
    });
};

function toggleMouseDown() {
    isDown = true;
}

function toggleMouseUp() {
    isDown = false;
}

function createButton() {
    const body = document.querySelector('body')
    const button = document.createElement('button')
    button.textContent = 'CREATE NEW GRID'
    button.classList.add(`btn`);
    button.style.width = '200px'
    button.style.height = '100px'
    button.style.textAlign = 'center'
    button.style.margin = '20px 0 0 0'
    body.appendChild(button)
}

createGrid()
createButton()

const button = document.querySelector('.btn')
let isDown = false;

button.addEventListener('click', deleteOld.bind()); 
