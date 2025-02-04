const { Ship, Gameboard, Player, } = require('./modules');
import { domContentLoader } from'./display';


export const createGameState = () => {
    const playerOne = new Player('playerOne');
    const playerTwo = new Player('playerTwo');
    let activePlayer = playerOne;

    const shipPlaceChooser = () => {
        playerOne.gameBoard.placeShip(5, 'vertical', 0, 0);
        playerOne.gameBoard.placeShip(4, 'vertical', 1, 8);
        playerOne.gameBoard.placeShip(3, 'horizontal', 4, 4);
        playerOne.gameBoard.placeShip(3, 'horizontal', 9, 1);
        playerOne.gameBoard.placeShip(2, 'horizontal', 6, 7);

        playerTwo.gameBoard.placeShip(5, 'vertical', 1, 0);
        playerTwo.gameBoard.placeShip(4, 'vertical', 2, 8);
        playerTwo.gameBoard.placeShip(3, 'horizontal', 3, 4);
        playerTwo.gameBoard.placeShip(3, 'horizontal', 8, 1);
        playerTwo.gameBoard.placeShip(2, 'horizontal', 5, 7);
    };

    const switchPlayer = () => {
        activePlayer = activePlayer === playerOne ? playerTwo : playerOne;
    };

    const gamePlay = () => {
        playerTurn(activePlayer);
    };

    const playerTurn = () => {
        const otherPlayer = activePlayer === playerOne ? playerTwo : playerOne;
        attackCell(otherPlayer);
    }

    const attackCell = (otherPlayer) => {
        let selectedCell;
        let cellArray = [];
        //get the selected cell
        const board = document.querySelector(`.${otherPlayer.player}Board`);
        board.addEventListener('click', (e) => {
            selectedCell = e.target.id;

            //convert to an array
            cellArray = selectedCell.split(' ').map(Number);

            //send attack to player
            const attackResult = otherPlayer.gameBoard.receiveAttack(cellArray);
            if (attackResult === "hit") {
                attackCell(otherPlayer);
            }
        },
        { once: true });
    };

    return {
        playerOne,
        playerTwo,
        activePlayer,
        shipPlaceChooser,
        switchPlayer,
        attackCell,
        gamePlay
    };
};
