import { createGameState, gameController } from './controller';

export const domContentLoader = () => {
    const gameState = createGameState();
    
    renderDock(gameState.ships);
    
    //place ships
    gameState.shipPlaceChooser(); 

    //generate board for each player
    renderBoardContainer();
    renderBoard(gameState.playerOne);
    renderBoard(gameState.playerTwo);
    dragShip();

    gameController(gameState.playerOne, gameState.playerTwo);
}

const renderBoardContainer = () => {
    //create container for both boards
    const boardContainer = document.createElement('div');
    boardContainer.classList.add('board-container');
    document.body.appendChild(boardContainer);
}

const renderBoard = (player) => {
    //Create the game boards
    const container = document.querySelector('.board-container');
    const playerBoard = document.createElement('div');
    playerBoard.classList.add('board');
    playerBoard.id = (`${player.player}Board`);
    container.appendChild(playerBoard);

    populateGameBoard(player, playerBoard);
};

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
            if (element !== null) {
                coord.innerHTML = element.hits;
            } else {
                coord.innerHTML = element;
            }
            rowDiv.appendChild(coord);
        });
        playerBoard.appendChild(rowDiv);
    });
};
    
const renderDock = (ships) => {
    console.log(ships);
    const dock = document.querySelector('.dock');

    ships.forEach(ship => {
        const shipContainer = document.createElement('div');
        shipContainer.classList.add('shipContainer');
        shipContainer.setAttribute('draggable', true);
        shipContainer.ship = ship; 

        dock.appendChild(shipContainer);

        for (let i = 0; i < ship.length; i++){
        const shipSquare = document.createElement('div');
        shipSquare.classList.add('shipSquare');
        shipContainer.appendChild(shipSquare);
        };
    });
};

const dragShip = () => {
    const draggableShips = document.querySelectorAll('.shipContainer');

    draggableShips.forEach(ship => {
        ship.addEventListener('dragstart', e => {
            e.dataTransfer.setData('text/plain', e.target.ship);
        });
    });

    const playerBoard = document.querySelector('#playerOneBoard');

    if (playerBoard){
        const playerSquares = playerBoard.querySelectorAll('.co-ord');
        playerSquares.forEach(square => {
            square.addEventListener('dragover', e => {
                e.preventDefault();
                square.classList.add('green');
            });
        });
    };
};

export const updateSquareDisplay = (attackResult, target) => {
    if (attackResult === 'miss'){
        target.style.background = 'white';
    } else if (attackResult === 'hit' || attackResult === 'sunk'){
        target.style.background = 'red';
    };
};

export const playAgain = () => {
    const playAgainBtn = document.createElement('button');
    playAgainBtn.innerText = 'Play again?';
    document.body.appendChild(playAgainBtn);
};
