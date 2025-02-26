import { createGameState, gameController } from './controller';

export const domContentLoader = () => {
    const gameState = createGameState();
    
    renderDock(gameState.ships); //FIX THIS LINE, ASSIGN TO PLAYER 1
    gameState.computerShipsRand();

    //generate board for each player
    renderBoardContainer();
    renderBoard(gameState.playerOne);
    renderBoard(gameState.playerTwo);
    dragShip(gameState);
    rotateDock();

    gameController(gameState.playerOne, gameState.playerTwo);
}

let direction = 'vertical';

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
            rowDiv.appendChild(coord);
        });
        playerBoard.appendChild(rowDiv);
    });
};
    
const renderDock = (ships) => {
  const dock = document.querySelector('.dock');
  ships.forEach(ship => {
    const shipContainer = document.createElement('div');
    shipContainer.classList.add('ship-container');
    shipContainer.setAttribute('draggable', true);
    shipContainer.id = ship.name;
    shipContainer.shipData = ship;
    dock.appendChild(shipContainer);
    
  
    for (let i = 0; i < ship.length; i++) {
      const shipSquare = document.createElement('div');
      shipSquare.classList.add('shipSquare');
      shipContainer.appendChild(shipSquare);
    }
  });
};

const rotateDock = () => {
    const rotateBtn = document.getElementById('rotate-button');
    const dock = document.querySelector('.dock');
    const ships = dock.querySelectorAll('.ship-container');

    ships.forEach(ship => {
    const rotateHandler = () => {
        const isVertical = 'vertical' === 'vertical' ? 'horizontal' : 'vertical';
        ship.classList.toggle(isVertical);
        dock.classList.toggle(isVertical);
        direction = isVertical;
    };

    rotateBtn.addEventListener('click', rotateHandler);
        
    ship.rotateHandler = rotateHandler;
    });
};

const dragShip = (gameState) => {
    const draggableShips = document.querySelectorAll('.ship-container');
    const playerBoard = document.querySelector('#playerOneBoard');

    const handleDragStart = (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
    };

    draggableShips.forEach(ship => {
        ship.addEventListener('dragstart', handleDragStart);
    });

    
    for (const playerSquares of playerBoard.querySelectorAll('.co-ord')) {
        playerSquares.addEventListener('dragover', e => {
            e.preventDefault();
            
        });

        
        playerSquares.addEventListener('drop', e => {
            e.preventDefault();
            const shipData = e.dataTransfer.getData('text/plain');
            const shipElement = document.getElementById(shipData);
            const ship = shipElement.shipData;

            const startCoord = playerSquares.id.split(' ').map(coord => parseInt(coord));
            
            
            const placed = gameState.playerOne.gameBoard.placeShip(direction, startCoord[0], startCoord[1], ship);

            if (placed === 'collision'){
                alert('ship already placed there');
                return;
            } 
            playerSquares.appendChild(shipElement);

            shipElement.removeEventListener('dragstart', handleDragStart);
            const rotateBtn = document.getElementById('rotate-button');
            rotateBtn.removeEventListener('click', shipElement.rotateHandler);
            shipElement.setAttribute('draggable', false);
        });
    }
};


export const updateSquareDisplay = (attackResult, target) => {
    if (attackResult === 'miss'){
        target.style.background = 'white';
    } else if (attackResult === 'hit' || attackResult === 'sunk'){
        const shipSquare = target.querySelector('.shipSquare');
    
        if (shipSquare) {
        shipSquare.style.backgroundColor = 'red';
        } else {
        target.style.background = 'red';
        }
    }
};

export const playAgain = () => {
    const playAgainBtn = document.createElement('button');
    playAgainBtn.innerText = 'Play again?';
    document.body.appendChild(playAgainBtn);
};
