const gameBoard = (() => {
    const cell = document.querySelectorAll('.cell');
    let marker = 'X';
    let playerXmoves = [];
    let playerOmoves = [];
    const winningCombos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    // cell.forEach(cell => {
    //     cell.addEventListener('click', event => {
    //         cell.innerHTML = `<h1>${marker}</h1>`;
    //     if (marker == 'X') {
    //         marker = 'O';
    //     } else {
    //         marker = 'X'
    //     }
    //     })
    // })

    cell.forEach(cell => {
        cell.addEventListener('click', playerMove)
    })

    function playerMove() {
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

    function checkBoard() {
        for(i = 0; i < winningCombos.length; i++) {
            if(playerXmoves.sort().join(',') === winningCombos.sort().join(',')) {
                console.log('X WINS');
            } else if (playerOmoves.sort().join(',') === winningCombos.sort().join(',')) {
                console.log('O WINS');
            } else return
        }
    }

    function reset() {
        marker = 'X'
        return cell.forEach(cell => {
            cell.innerHTML = ''
        })
    }
    return {
        playerMove,
        checkBoard,
        reset
    }
})();

const updateDOM = (() => {
    const resetBtn = document.getElementById('resetBtn');
    resetBtn.addEventListener('click', gameBoard.reset())
})();
