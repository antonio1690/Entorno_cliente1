document.addEventListener("DOMContentLoaded", function () {
    const rows = 8;
    const cols = 8;
    const minesCount = 10;


    const board = document.getElementById("board");

    // Función para crear el tablero
    function createBoard() {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                cell.dataset.row = i;
                cell.dataset.col = j;
                cell.addEventListener("click", revealCell);
                board.appendChild(cell);
            }
        }
    }

    // Función para revelar la celda (puedes personalizar según el juego)
    function revealCell(event) {
        const clickedCell = event.target;
        const row = clickedCell.dataset.row;
        const col = clickedCell.dataset.col;

        // Aquí puedes implementar la lógica de revelar celdas y manejar minas
        console.log(`Celda en la fila ${row}, columna ${col} fue clickeada.`);
    }

    // Llamada a la función para crear el tablero
    createBoard();
});
