//import { gameBoard } from app.js;

const game = (() => {

    function setup() {
        gameBoard.cell.forEach(cell => {
            cell.addEventListener('click', gameBoard.playerMove)
        });
        document.getElementById('resetBtn').addEventListener('click', gameBoard.reset)
    }

    return {
        setup,
    }
})();