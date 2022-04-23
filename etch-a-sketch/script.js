const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    const columnDiv = document.createElement('div');
    columnDiv.classList.add('columns');
    container.appendChild(columnDiv);
    for (let j = 0; j < 16; j++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('rows');
        columnDiv.appendChild(rowDiv);
    }
}

let rows = document.querySelectorAll('.rows');
let columns = document.querySelectorAll('.columns');
rows.forEach((row) => {
    row.addEventListener('mouseenter', () => {
        row.setAttribute('style', 'background-color: red;');
    });
});

let totalPixels = 400;
const resetButton = document.querySelector('.btn');
resetButton.addEventListener('click', () => {
    rows.forEach((row) => {
        row.style.backgroundColor = '';
    });
    let gridNumber = prompt('Select the size of the new square grid! Maximum: 100');
    if (gridNumber > 100) gridNumber = 100;
    for (let i = 0; i < columns.length; i++) {
        columns[i].remove();
        for (let j = 0; j < rows.length; j++) {
            rows[i].remove();
        }
    }

    for (let i = 0; i < gridNumber; i++) {
        const columnDiv = document.createElement('div');
        columnDiv.classList.add('columns');
        container.appendChild(columnDiv);
        for (let j = 0; j < gridNumber; j++) {
            const rowDiv = document.createElement('div');
            rowDiv.classList.add('rows');
            rowDiv.style.width = `${totalPixels/gridNumber}px`;
            rowDiv.style.height = `${totalPixels/gridNumber}px`;
            columnDiv.appendChild(rowDiv);
        }
    }
    rows = document.querySelectorAll('.rows');
    columns = document.querySelectorAll('.columns');
    rows.forEach((row) => {
        row.addEventListener('mouseenter', () => {
            row.style.backgroundColor = 'red';
        });
    });
});
