const { Ship, Gameboard, Player, } = require('./modules');
import { domContentLoader, playAgain, renderBoard, updateSquareDisplay } from'./display';


export const createGameState = () => {
    const playerOne = new Player('playerOne');
    const playerTwo = new Player('computer');


    const shipPlaceChooser = () => {
        playerOne.gameBoard.placeShip(5, 'vertical', 0, 0);
        playerOne.gameBoard.placeShip(4, 'vertical', 1, 8);
        playerOne.gameBoard.placeShip(3, 'horizontal', 4, 4);
        playerOne.gameBoard.placeShip(3, 'horizontal', 9, 1);
        playerOne.gameBoard.placeShip(2, 'horizontal', 6, 7);

        playerTwo.gameBoard.placeShip(5, 'vertical', 1, 0);
        // playerTwo.gameBoard.placeShip(4, 'vertical', 2, 9);
        // playerTwo.gameBoard.placeShip(3, 'horizontal', 3, 4);
        // playerTwo.gameBoard.placeShip(3, 'horizontal', 8, 1);
        // playerTwo.gameBoard.placeShip(2, 'horizontal', 5, 7);
    };


    return {
        playerOne,
        playerTwo,
        shipPlaceChooser,
    }
}

export const gameController = (playerOne, playerTwo) => {
    let target;
    //attach listeners to all cells
    const cells = document.querySelectorAll('.co-ord');
    cells.forEach(cell => {
        cell.addEventListener('click', (e) => {
            //get the board selected
            const board = e.target.closest('.board').id;
            target = e.target;
            console.log(target);
            //send target cell and board
            chooseCell(e.target.id, board);
            // console.log(e.target, board);
        });
    });

    //Change computer logic to a class
    const computerTurn = (attackResult) => {
        let lastAttackResult = null;
        let usedDirections = [];
        let choice = null;
        const directions = {
            1: [-1, 0],
            2: [1, 0],
            3: [0, -1],
            4: [0, 1],
        };

        const computerAttack = () => {
            if (lastAttackResult === 'hit'){
                console.log('this shit working');
                previousShotHit();
            } else {
                randAttack();
            }
        }

        const fireCompAttack = (x, y) => {
            console.log(`what is the lastAttackResult ${lastAttackResult}`)
            choice = (`${x} ${y}`);
            target = document.getElementById(choice);
            chooseCell(choice, 'playerOneBoard');
        }

        const randAttack = () => {
            const x = numberGen(0, 9);
            const y = numberGen(0, 9);
            fireCompAttack(x, y);
        }

        const previousShotHit = () => {
            const randInt = numberGen(1, 4);
            let nextMoveAround = directions[randInt];
            const x = lastAttackResult[0] + nextMoveAround[0];
            const y = lastAttackResult[1] + nextMoveAround[1];
            fireCompAttack(x, y);
        }

        const numberGen = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        if (attackResult) {
            lastAttackResult = attackResult;
        }

        return {
            computerAttack,
        };
    };

    //if player 2 is selected as a computer then create a computer logic object
    const computer = playerTwo.player === 'computer' ? computerTurn() : null;

    //initiate first turn
    let activePlayer = playerOne;

    const switchPlayer = () => {
        activePlayer = activePlayer === playerOne ? playerTwo : playerOne;
        if (activePlayer.player === 'computer' && computer){
            computer.computerAttack();
        }
    };

    const chooseCell = (selectedCell, selectedBoard) => {
        //define other player
        let otherPlayer = activePlayer === playerOne ? playerTwo : playerOne;
        
        let cellArray = selectedCell.split(' ').map(Number);
        //send attack to player
        attackHandler(otherPlayer, cellArray, selectedBoard);
    };

    const attackHandler = (otherPlayer, cellArray, selectedBoard) => {
        if (checkAttackValid(otherPlayer, cellArray, selectedBoard) === false){
            return;
        };
        const attackResult = otherPlayer.gameBoard.receiveAttack(cellArray);
        console.log(attackResult);

        if (otherPlayer === playerTwo && playerTwo.player === 'computer') {
            computerTurn(attackResult);
        }
        
        gameStatus(otherPlayer);
        updateSquareDisplay(attackResult, target);
        switchPlayer(activePlayer);
        console.log(`${activePlayer.player}'s turn!`);
    }

    const checkAttackValid = (otherPlayer, cellArray, selectedBoard) => {
        let validity = false;
        const [row, col] = cellArray;
        //check if player has selected the correct board
        if (selectedBoard !== `${otherPlayer.player}Board`){
            console.log('incorrect board');
        
        } else if (otherPlayer.gameBoard.board[row][col] === 'miss' || otherPlayer.gameBoard.board[row][col] === 'hit'){
            console.log('Already targeted, try again');
        } else {
            validity = true;
        }
        return validity;
    }

    const gameStatus = (otherPlayer) => {
        if (otherPlayer.gameBoard.allShipsSunk() === 'game over'){
            console.log('game over')
            gameOver();
        }
    };

    const gameOver = () => {
        playAgain();
        console.log(`${activePlayer} wins`);

    }


    return {
        activePlayer,
        switchPlayer,
        chooseCell,
        attackHandler,
        gameStatus
    };
};
