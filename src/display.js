import { createGameState, gameController } from './controller';

export const domContentLoader = () => {
//create container for both boards
    const boardContainer = document.createElement('div');
    boardContainer.classList.add('board-container');
    document.body.appendChild(boardContainer);
    
    const gameState = createGameState();
    //place ships
    gameState.shipPlaceChooser(); 

    //generate board for each player
    renderBoard(gameState.playerOne);
    renderBoard(gameState.playerTwo);

    gameController(gameState.playerOne, gameState.playerTwo);
}

export const renderBoard = (player) => {
    const boardContainer = document.querySelector('.board-container');

    //Create the game boards
    const playerBoard = document.createElement('div');
    playerBoard.classList.add('board');
    playerBoard.id = (`${player.player}Board`);
    boardContainer.appendChild(playerBoard);


    const populateGameBoard = (player, playerBoard) => {
        //Populate game board
        player.gameBoard.board.forEach((row, index) => {
            // Container for each row
            const rowDiv = document.createElement('div');
            //add class and number to each row
            rowDiv.classList.add('row');
            rowDiv.id = index;
            
            row.forEach((element, index) => {
                const coord = document.createElement('div');
                coord.classList.add('co-ord');
                coord.id = `${rowDiv.id} ${index}`;
                
                //change to ships/markers later 
                // console.log(element);
                if (element !== null) {
                    coord.innerHTML = element.hits;
                } else {
                    coord.innerHTML = element;
                }
                rowDiv.appendChild(coord);
            });
            playerBoard.appendChild(rowDiv);
        });
    }
    populateGameBoard(player, playerBoard);
    
}

export const updateSquareDisplay = (attackResult, target) => {
    if (attackResult === 'miss'){
        target.style.background = 'white';
    } else if (attackResult === 'hit' || attackResult === 'sunk'){
        target.style.background = 'red';
    }
}

export const playAgain = () => {
    const playAgainBtn = document.createElement('button');
    playAgainBtn.innerText = 'Play again?';
    document.body.appendChild(playAgainBtn);
}
