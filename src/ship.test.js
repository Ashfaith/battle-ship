const Ship = require('./index');

test('returns "sunk" if hits recieved is equal to available hits', () => {
    const ship = new Ship(2);
    
    expect(ship.receivedHits()).toBe("hit");
    expect(ship.receivedHits()).toBe("sunk");
})