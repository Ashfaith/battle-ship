const { Ship, Gameboard, Player, } = require('./modules');

export default class GameState{
    constructor(playerOne = new Player, playerTwo = new Player){
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.activePlayer = this.playerOne;
    }
    
    shipPlaceChooser() {
        //run place ship function - manual for now
        this.playerOne.gameboard.placeShip(5, 'vertical', 0, 0);
        this.playerOne.gameboard.placeShip(4, 'vertical', 1, 8);
        this.playerOne.gameboard.placeShip(3, 'horizontal', 4, 4);
        this.playerOne.gameboard.placeShip(3, 'horizontal', 9, 1);
        this.playerOne.gameboard.placeShip(2, 'horizontal', 6, 7);
        
        
        this.playerTwo.gameboard.placeShip(5, 'vertical', 1, 0);
        this.playerTwo.gameboard.placeShip(4, 'vertical', 2, 8);
        this.playerTwo.gameboard.placeShip(3, 'horizontal', 3, 4);
        this.playerTwo.gameboard.placeShip(3, 'horizontal', 8, 1);
        this.playerTwo.gameboard.placeShip(2, 'horizontal', 5, 7);
        
    }

    switchPlayer() {
        activePlayer = activePlayer === this.playerOne ? this.playerTwo : this.playerOne;
    }
}
