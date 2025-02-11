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
    // const boards = document.querySelectorAll('board');
    const cells = document.querySelectorAll('.co-ord');
    cells.forEach(cell => {
        cell.addEventListener('click', (e) => {
            //get the board selected
            const board = e.target.closest('.board').id;
            target = e.target;
            //send target cell and board
            chooseCell(e.target.id, board);
            // console.log(e.target, board);
        });
    });
    
    const computerTurn = () => {
        const randAttack = () => {
            let x = numberGen();
            let y = numberGen();
            const choice = (`${x} ${y}`);
            console.log(choice);
            chooseCell(choice, 'playerOneBoard');
        }

        const numberGen = () => {
            return Math.floor(Math.random() * 10);
        }

        return {
            randAttack,
        };
    };

    //if player 2 is selected as a computer then create a computer logic object
    const computer = playerTwo.player === 'computer' ? computerTurn() : null;

    //initiate first turn
    let activePlayer = playerOne;

    const switchPlayer = () => {
        activePlayer = activePlayer === playerOne ? playerTwo : playerOne;
        if (activePlayer.player === 'computer' && computer){
            computer.randAttack();
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
