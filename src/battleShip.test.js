const { Ship, Gameboard } = require('./index');

test('returns "sunk" if hits recieved is equal to available hits', () => {
    const ship = new Ship(2);
    
    expect(ship.receivedHits()).toBe("hit");
    expect(ship.receivedHits()).toBe("sunk");
})

test('produces a 2d array representing the gameboard grid', () => {
    const gameboard = new Gameboard();

    const expColRow = 10;

    const grid = gameboard.board;

    expect(grid.length).toBe(expColRow);

    grid.forEach(row => {
        expect(row.length).toBe(expColRow);
    })
});

test('"Ship" is placed within the board with the correct length', () => {
    const gameboard = new Gameboard();

    ['horizontal', 'vertical'].forEach(direction => {
        const shipPos = gameboard.placeShip(3, direction, 0, 0);
        
        if (shipPos.direction === 'horizontal'){
            for (let i = 0; i < shipPos.length; i++){
                expect(gameboard.board[x][y + i]).toBe('1')
            }
        } else if (shipPos.direction === 'vertical') {
            for (let i = 0; i < shipPos.length; i++){
                expect(gameboard.board[x + i][y]).toBe('1')
            }
        }
    })
});

test('If position on board is empty, updates cell to "miss"', () => {
    const gameboard = new Gameboard();

    expect(gameboard.receiveAttack('a', 1)).toBe('miss');
});

test('If position on board contains ship object, runs hit function', () => {
    const gameboard = new Gameboard();

    gameboard.placeShip(3, 'vertical', 0, 0);

    expect(gameboard.receiveAttack('a', 1)).toBe('hit');
});

test('when all ships on board are sunk return true', () => {
    const gameboard = new Gameboard();

    gameboard.placeShip(3, 'vertical', 0, 0);
    gameboard.receiveAttack('a', 1);
    gameboard.receiveAttack('a', 2);
    gameboard.receiveAttack('a', 3);

    expect(gameboard.allShipsSunk()).toBe('game over');
});