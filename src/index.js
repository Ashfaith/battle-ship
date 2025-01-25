// import "./styles.css";


class Ship {
    constructor(length, hits = 0){
        this.length = length;
        this.hits = hits;
        this.sunk = false;
    }

    receivedHits() {
        this.hits++;
        if (this.hits >= this.length)return "sunk";
        return "hit";
    }

} 

const ship = new Ship(2);
console.log(ship.hits);

module.exports = Ship;