import GameState from "./gameState";


export default class Display {
    constructor(gameState = new GameState) {
        this.gameState = gameState;
    }

    setupGameStart() {
        const startGameButton = document.querySelector('#start-game');
        
        startGameButton.addEventListener('click', () => {
            
            this.gameState.shipPlaceChooser(); 

            this.generateBoards(this.gameState.playerOne, this.gameState.playerTwo);
        });
    }

    generateBoards(playerOne, playerTwo){

        const boardContainer = document.createElement('div');
        boardContainer.classList.add('board-container');
        document.body.appendChild(boardContainer);
        
        //Create the game boards
        const playerOneBoard = document.createElement('div');
        playerOneBoard.classList.add('player-board');
        boardContainer.appendChild(playerOneBoard);

        const playerTwoBoard = document.createElement('div');
        playerTwoBoard.classList.add('player-board');
        boardContainer.appendChild(playerTwoBoard);

        const populateGameBoard = (player, board) => {
            //Populate game board
            player.gameboard.board.forEach(row => {
                // Container for each row
                const rowDiv = document.createElement('div');
                
                rowDiv.classList.add('row');
        
                row.forEach(element => {
                    const coord = document.createElement('div');
                    coord.classList.add('co-ord');
                    coord.innerHTML = element;
                    rowDiv.appendChild(coord);
                });
                board.appendChild(rowDiv);
            });
        }

        populateGameBoard(playerOne, playerOneBoard);
        populateGameBoard(playerTwo, playerTwoBoard);

    }
}