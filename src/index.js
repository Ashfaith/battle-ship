// import "./styles.css";


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
        this.board = Array.from({ length: this.rows }, () => new Array(this.cols).fill("."));
    }

    placeShip(shipLength, x = 0){
        const ship = new Ship(shipLength);
        let y = x + ship.length;
        //write a loop here that changes the value in each position 
        // from x to y.
    }
}

const gameboard = new Gameboard;
gameboard.board[0][0] = 1
console.log(gameboard.board)

module.exports = { Ship, Gameboard };
