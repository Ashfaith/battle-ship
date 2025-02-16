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
        console.log(target);

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
        this.cellsReceived = [];
    }
}

class Computer extends Player {
    constructor() {
        super('computer');
        this.lastAttackResult = null;
        this.previousHit = null;
        this.choice = null;
        this.previousDirection = null;
        this.directions = {
            1: [-1, 0],//up
            2: [1, 0],//down
            3: [0, -1],//left
            4: [0, 1],//right
        };
        this.usedDirections = [];
    }

    conditionsMet() {
        console.log('last attack:',this.lastAttackResult,'previous hit:', this.previousHit,'choice just made:', this.choice,'direction chosen:', this.previousDirection,'directions used:', this.usedDirections);
    }

    async computerAttack() {
        if (this.lastAttackResult === 'sunk'){
            this.usedDirections.length = 0;
            this.previousHit = null;
            this.previousDirection = null;
            this.randAttack();
        }

        if (this.lastAttackResult === 'hit'){
            this.usedDirections.length = 0;
            this.previousHit = this.choice;
            this.previousHitAttack();
        }

        else if (this.usedDirections.length >= 4 && this.previousHit){
            this.usedDirections.length = 0;
            this.previousHit = null;
            this.previousDirection = null;
            this.randAttack();
        }

        else if (this.lastAttackResult === 'go again' && this.previousHit) {
            this.previousHitAttack();
        }

        else if (this.lastAttackResult === 'miss' && this.usedDirections.length < 4 && this.previousHit){
            this.previousHitAttack();
        } 

        else {
            this.randAttack();
        }
    }

    randAttack() {
        const x = this.numberGen(0, 9);
        const y = this.numberGen(0, 9);
        this.choice = `${x} ${y}`;
    }

    async previousHitAttack() {
        let randInt = this.numberGen(1, 4);
        let nextMoveAround = [];


        if (this.lastAttackResult === 'hit' && this.previousDirection !== null){
            nextMoveAround = this.previousDirection;
            this.previousHit = this.choice;
        } else {
            //check to see if direction has already been used
            do { 
                randInt = this.numberGen(1, 4);
                nextMoveAround = this.directions[randInt];
                this.previousDirection = nextMoveAround;
            } while (this.usedDirections.some(direction => direction === nextMoveAround));
        }

        this.usedDirections.push(nextMoveAround);
        const [prevX, prevY] = this.previousHit.split(' ').map(Number);
        const x = prevX + nextMoveAround[0];
        const y = prevY + nextMoveAround[1];
        this.choice = `${x} ${y}`;
    }

    numberGen(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    updateLastAttackResult(attackResult) {
        this.lastAttackResult = attackResult;
    }
}


module.exports = { Ship, Gameboard, Player, Computer };
