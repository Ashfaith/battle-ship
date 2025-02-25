class Ship {
    constructor(length, name){
        this.length = length;
        this.name = name;
        this.hits = length;
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

    placeShip(direction, x, y, ship) {
        // check which way ship is facing
        if (direction === 'horizontal') {
          // check if all positions are valid
          for (let i = 0; i < ship.length; i++) {
            const check = this.checkAllowed(x, y + i);
            if (check === 'collision' || check === 'out of bounds') {
              return check; 
            }
          }
          
          // place into arrays if valid
          for (let i = 0; i < ship.length; i++) {
            this.board[x][y + i] = ship;
          }
        } else {
          // check if all positions are valid
          for (let i = 0; i < ship.length; i++) {
            const check = this.checkAllowed(x + i, y);
            if (check === 'collision' || check === 'out of bounds') {
              return check;
            }
          }
          
          // place into arrays
          for (let i = 0; i < ship.length; i++) {
            this.board[x + i][y] = ship;
          }
        }
        
    
        this.ships.push(ship);
        console.log(this.ships);
        return 'allowed';
      }

      checkAllowed(x, y) {
        if (this.board[x] === undefined || y < 0 || y >= this.board[x].length) {
          return 'out of bounds';
        }
        if (this.board[x][y] !== null) {
          return 'collision';
        }
        return 'allowed';
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

    outOfRange(x, y) {
        if (x < 0 || x >= 10 || y < 0 || y >= 10) {
            return true;
        }
        return false;
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

        if (!this.outOfRange(x, y)) {
            this.choice = `${x} ${y}`;
        } else {
            this.previousHitAttack();
        }
    }

    numberGen(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    updateLastAttackResult(attackResult) {
        this.lastAttackResult = attackResult;
    }
}


module.exports = { Ship, Gameboard, Player, Computer };
