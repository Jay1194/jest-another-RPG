//  imports the Potion() constructor into the test, establishing Potion as a usable variable (otherwise new Potion() would throw an error).
const Potion = require('../lib/Potion');

//mocks/replaces the constructor's implementation with our faked data.
jest.mock('../lib/Potion');

//if new Potion() is ever called within the test file itself or (more importantly) any of the subsequent modules attached to the test, the mocked data will be returned.
console.log(new Potion());

const Player = require('../lib/Player');

test('creates a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));

expect(player.inventory).toEqual(
    expect.arrayContaining([expect.any(Object)])
);
})

//we're checking that player.getStats() returns an object with four specific properties
test("gets player's stats as an object", () => {
    const player = new Player('Dave');

    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
});

test('gets inventory from player or return false', () => {
    const player = new Player('Dave');

    // a call to player.getInventory() should return an array
    expect(player.getInventory()).toEqual(expect.any(Array));

    //simulate an empty array yourself by setting player.inventory = [] before the next expect() runs
    player.inventory = [];

    //case of an empty inventory needing to return false
    expect(player.getInventory()).toEqual(false);
});

// create a Player method for this in order to help declutter the logic
test("gets player's health value", () => {
    const player = new Player('Dave');

    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
});

//check if the player is alive
test('checks if player is alive or not', () => {
    const player = new Player('Dave')

    expect(player.isAlive()).toBeTruthy();

    player.health = 0;

    expect(player.isAlive()).toBeFalsy();
});

//to see if the correct amount of health is being subtracted from the Player health property
test("subtracts from player's health", () => {
    const player = new Player('Dave');

    const oldHealth = player.health;

    player.reduceHealth(5);

    expect(player.health).toBe(oldHealth - 5);

    player.reduceHealth(99999);
    
    expect(player.health).toBe(0);
});