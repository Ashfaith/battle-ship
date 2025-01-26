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

