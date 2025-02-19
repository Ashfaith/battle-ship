const { Ship, Gameboard, Player, Computer, } = require('./modules');
import { domContentLoader, playAgain, renderBoard, updateSquareDisplay } from'./display';


export const createGameState = () => {
    const initShips = () => {
        return [
        new Ship(5, 'carrier'),
        new Ship(4, 'battleship'),
        new Ship(3, 'cruiser'),
        new Ship(3, 'submarine'),
        new Ship(2, 'destroyer')
        ];
    };

    const playerOne = new Player('playerOne');
    const playerTwo = new Player('computer');
    let ships = initShips();

    const shipPlaceChooser = () => {
        
    };


    return {
        ships,
        playerOne,
        playerTwo,
        shipPlaceChooser,
    };
};

export const gameController = (playerOne, playerTwo) => {
    // attach listeners to all cells
    const cells = document.querySelectorAll('.co-ord');
    cells.forEach(cell => {
        cell.addEventListener('click', (e) => {
            // get the board selected
            const board = e.target.closest('.board').id;
            // send target cell and board
            chooseCell(e.target, board);
        });
    });

    // Initialize computer logic if playerTwo is the computer
    const computer = playerTwo.player === 'computer' ? new Computer() : null;

    // initiate first turn
    let activePlayer = playerOne;

    const switchPlayer = () => {
        activePlayer = activePlayer === playerOne ? playerTwo : playerOne;
        console.log(`${activePlayer.player}'s turn!`);
        if (activePlayer.player === 'computer' && computer) {
            computerTurnHandler();
        }
    };

    const computerTurnHandler = async () => {
        await computer.computerAttack();
        const computerChoiceCell = document.getElementById(computer.choice);
        chooseCell(computerChoiceCell, 'playerOneBoard');
    }

    const chooseCell = (selectedCell, selectedBoard) => {
        // define other player
        const otherPlayer = activePlayer === playerOne ? playerTwo : playerOne;
        
        const cellId = selectedCell.id
        const cellArray = cellId.split(' ').map(Number);
        // send attack to player
        const attackResult = attackHandler(otherPlayer,cellArray, selectedBoard, cellId);

        if (attackResult === 'go again') {
            if (activePlayer.player === 'computer' && computer){
                computer.updateLastAttackResult(attackResult);
                computerTurnHandler();
            }
            return;
        }

        if (activePlayer === playerTwo && playerTwo.player === 'computer') {
            computer.updateLastAttackResult(attackResult);
        } 
        
        gameStatus(otherPlayer);
        updateSquareDisplay(attackResult, selectedCell);
        switchPlayer();
    };

    const attackHandler = (otherPlayer, cellArray, selectedBoard, cellId) => {
        if (checkAttackValid(otherPlayer, selectedBoard, cellId) === false) {
            return 'go again';
        };
        otherPlayer.cellsReceived.push(cellId);
        return otherPlayer.gameBoard.receiveAttack(cellArray);
    };

    const checkAttackValid = (otherPlayer, selectedBoard, cellId) => {
        let validity = false;
        // check if player has selected the correct board
        if (selectedBoard !== `${otherPlayer.player}Board`) {
            console.log('incorrect board');
        } else if (otherPlayer.cellsReceived.includes(cellId)) {
            console.log('Already targeted, try again');
        } else {
            validity = true;
        }
        return validity;
    };

    const gameStatus = (otherPlayer) => {
        if (otherPlayer.gameBoard.allShipsSunk() === 'game over') {
            console.log('game over');
            gameOver();
        }
    };

    const gameOver = () => {
        playAgain();
        console.log(`${activePlayer.player} wins`);
    };

    return {
        activePlayer,
        switchPlayer,
        chooseCell,
        attackHandler,
        gameStatus,
    };
};

