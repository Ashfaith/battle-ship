const { Ship, Gameboard, Player, Computer, } = require('./modules');
import {playAgain, updateSquareDisplay, endGame } from'./display';


export const createGameState = () => {
    const playerOne = new Player('playerOne');
    const playerTwo = new Player('computer');

    const initShips = () => {
        return [
        new Ship(5, 'carrier'),
        new Ship(4, 'battleship'),
        new Ship(3, 'cruiser'),
        new Ship(3, 'submarine'),
        new Ship(2, 'destroyer')
        ];
    };

    
    const ships = initShips();

    const computerShipsRand = () => {
        // call initShips
        const computerShips = initShips();
        //loop through each ship
        for (let i = 0; i < computerShips.length; i++) {
            const directions = ['horizontal', 'vertical'];
            const number = (max) => Math.floor(Math.random() * max);
            
            let placed = false;
            
            while (placed !== 'allowed') {
                // randomly create x and y coords
                const x = number(10);
                const y = number(10);
                // randomly choose direction
                const direction = directions[number(2)];
                
                // call placeShip() and check placement
                placed = playerTwo.gameBoard.placeShip(direction, x, y, computerShips[i]);
            }
        }
    };


    return {
        ships,
        playerOne,
        playerTwo,
        computerShipsRand,
    };
};


export const gameController = (playerOne, playerTwo) => {
    const handleCellClick = (e) => {
        // get the board selected
        const board = e.target.closest('.board').id;
        // send target cell and board
        chooseCell(e.target, board);
    }
    
    // attach listeners to all cells
    const cells = document.querySelectorAll('.co-ord');
    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick)
    });

    // Initialize computer logic if playerTwo is the computer
    const computer = playerTwo.player === 'computer' ? new Computer() : null;

    // initiate first turn
    let activePlayer = playerOne;

    const switchPlayer = () => {
        activePlayer = activePlayer === playerOne ? playerTwo : playerOne;
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
        console.log(attackResult.result);
        const resultString = attackResult.result;
        const shipAttacked = attackResult.ship

        if (resultString === 'go again') {
            if (activePlayer.player === 'computer' && computer){
                computer.updateLastAttackResult(resultString);
                computerTurnHandler();
            }
            return;
        }

        if (activePlayer === playerTwo && playerTwo.player === 'computer') {
            computer.updateLastAttackResult(resultString);
        } 
        
        gameStatus(otherPlayer);
        updateSquareDisplay(resultString, selectedCell, shipAttacked);
        switchPlayer();
    };

    const attackHandler = (otherPlayer, cellArray, selectedBoard, cellId) => {
        if (checkAttackValid(otherPlayer, selectedBoard, cellId) === false) {
            return { result: 'go again', ship: null };
        };
        otherPlayer.cellsReceived.push(cellId);
        return otherPlayer.gameBoard.receiveAttack(cellArray);
    };

    const checkAttackValid = (otherPlayer, selectedBoard, cellId) => {
        let validity = false;
        // check if player has selected the correct board
        if (selectedBoard !== `${otherPlayer.player}Board`) {
            return validity;
        } else if (otherPlayer.cellsReceived.includes(cellId)) {
            return validity;
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
        const cells = document.querySelectorAll('.co-ord');
        cells.forEach(cell => {
            cell.removeEventListener('click', handleCellClick);
        });
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

