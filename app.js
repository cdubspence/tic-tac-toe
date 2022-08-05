
const gameBoard = (() => {
    const cells = document.querySelectorAll('.cell');
    const overlay = document.querySelector('.overlay');
    const text = document.getElementById('winnerText');
    let marker = 'X';
    let playerXmoves = [];
    let playerOmoves = [];
    const winningCombos = [
        ['0','1','2'],
        ['3','4','5'],
        ['6','7','8'],
        ['0','3','6'],
        ['1','4','7'],
        ['2','5','8'],
        ['0','4','8'],
        ['2','4','6']
    ]

    function setup() {
        cells.forEach(cell => {
            cell.addEventListener('click', function() {
                cell.style.backgroundColor = 'white';
                cell.style.border = '2px solid #64f000'
                playerMove(cell)
            })
        })
        document.querySelectorAll('#resetBtn').forEach(button => {
            button.addEventListener('click', function() {
                reset();
            })
        })
    }

    function playerMove(cell) {
        if(cell.innerHTML != '') {return}
        else {
            cell.innerHTML = `<h1>${marker}</h1>`;
            if (marker == 'X') {
                playerXmoves.push(cell.id)
                marker = 'O';
                checkBoard()
            } else {
                playerOmoves.push(cell.id)
                marker = 'X'
                checkBoard()
            }
        }
        
    }

    function checkBoard() {
        for(i = 0; i < winningCombos.length; i++) {
            if(winningCombos[i].every(element => playerXmoves.includes(element))) {
                return displayResults('X WINS!')
            } else if(winningCombos[i].every(element => playerOmoves.includes(element))) {
                return displayResults('O WINS!')
            } else if (playerOmoves.length + playerXmoves.length == 9) {
                return displayResults('TIE GAME!')
            }
        }
    }

    function displayResults(winner) {
        text.textContent = winner;
        overlay.style.width = '100%';

    }

    function reset() {
        overlay.style.width = '0';
        marker = 'X'
        playerOmoves = [];
        playerXmoves = [];
        cells.forEach(cell => {
            cell.innerHTML = ''
            cell.style.border = 'none';
            cell.style.backgroundColor = '#64f000'
        })
    }
    return {
        setup,
        playerMove,
        checkBoard,
        reset
    }
})();

gameBoard.setup();
