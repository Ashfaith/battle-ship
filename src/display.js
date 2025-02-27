import { createGameState, gameController } from './controller';

const gameContainer = document.querySelector('#game-container');

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
    gameContainer.appendChild(boardContainer);
}

const formatPlayerName = (playerName) => {
    return playerName.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase()).trim();
  }
  

const renderBoard = (player) => {
    const boardContainer = document.querySelector('.board-container');

    const playerTag = document.createElement('div');
    playerTag.classList.add('player-tag');
    playerTag.id = (`${player.player}-tag`)
    playerTag.innerText = formatPlayerName(player.player);
    boardContainer.appendChild(playerTag);

    //Create the game boards
    
    const playerBoard = document.createElement('div');
    playerBoard.classList.add('board');
    playerBoard.id = (`${player.player}Board`);
    boardContainer.appendChild(playerBoard);

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

    const dockContainer = document.createElement('div');
    dockContainer.classList.add('dock-container');
    gameContainer.appendChild(dockContainer)

    const dock = document.createElement('div');
    dock.classList.add('dock');
    dockContainer.appendChild(dock);

    const rotateBtn = document.createElement('button');
    rotateBtn.id = 'rotate-button';
    rotateBtn.classList.add('button');
    const rotateIcon = document.createElement('img');

    rotateBtn.appendChild(rotateIcon);
    dockContainer.appendChild(rotateBtn);
    
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
        target.style.background = 'red';
    }
};

export const playAgain = () => {
    const playAgainBtn = document.createElement('button');
    playAgainBtn.innerText = 'Play again?';
    document.body.appendChild(playAgainBtn);
};
