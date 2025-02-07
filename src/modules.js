class Ship {
    constructor(length, hits = 0){
        this.length = length;
        this.hits = hits;
        this.sunk = false;
    }

    receivedHits() {
        this.hits++;
        this.isSunk();
        if (this.sunk === true){ 
            return "sunk";
        } else {
            return "hit";
        }
    }

    isSunk() {
        if (this.hits >= this.length){
            this.sunk = true;
        }
    }

}

class Gameboard {
    constructor(){
        this.rows = 10;
        this.cols = 10;
        this.board = Array.from({ length: this.rows }, () => new Array(this.cols).fill(null));
        this.ships = [];
    }

    placeShip(shipLength, direction, x, y){
        const ship = new Ship(shipLength);
        
        //check which way ship is facing
        if(direction === 'horizontal'){
            //check if ship is placed within boundary of board
            if (y < 0 || y > this.cols) {
                throw new Error("Trying to access index out of bounds");
            }

            //place into arrays
            for (let i = 0; i < ship.length; i++){
                this.board[x][y + i] = ship;
            }
        } else {
            //check if ship fits into board
            if (x < 0 || x > this.rows) {
                throw new Error("Trying to access index out of bounds");
            }

            //place into arrays
            for (let i = 0; i < ship.length; i++){
                this.board[x + i][y] = ship;
            }
        }
        this.ships.push(ship);
        return ship;
    }

    receiveAttack(coords){
        //convert letters from top of board to a number
        const [row, col] = coords;

        let target = this.board[row][col];
        console.log(this.board);

        if (target !== null){
            return target.receivedHits();
        } else {
            this.board[row][col] = 'miss';
            return 'miss';
        }
    }

    allShipsSunk(){
        if (this.ships.every(ship => ship.sunk === true)){ 
            return 'game over';
        }
    }
}

class Player {
    constructor(player){
        this.player = player;
        this.gameBoard = new Gameboard;
    }
}

module.exports = { Ship, Gameboard, Player };
