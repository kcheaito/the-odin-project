const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    const columndiv = document.createElement('div');
    columndiv.classList.add('columns');
    container.appendChild(columndiv);
    for (let j = 0; j < 16; j++) {
        const rowdiv = document.createElement('div');
        rowdiv.classList.add('rows');
        columndiv.appendChild(rowdiv);
    }
}