//  imports the Potion() constructor into the test, establishing Potion as a usable variable (otherwise new Potion() would throw an error).
const Potion = require('../lib/Potion');

//mocks/replaces the constructor's implementation with our faked data.
jest.mock('../lib/Potion');

//if new Potion() is ever called within the test file itself or (more importantly) any of the subsequent modules attached to the test, the mocked data will be returned.
console.log(new Potion());

const Enemy = require('../lib/Enemy');

test('creates a enemy object', () => {
    const enemy = new Enemy('goblin', 'sword');

    expect(enemy.name).toBe('goblin');
    expect(enemy.health).toEqual(expect.any(Number));
    expect(enemy.strength).toEqual(expect.any(Number));
    expect(enemy.agility).toEqual(expect.any(Number));
    expect(enemy.weapon).toBe('sword');

    expect(enemy.potion).toEqual(expect.any(Object));
});

// Enemy .getHealth()
test("gets enemy's health value", () => {
    const enemy = new Enemy('goblin');

    expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.health.toString()));
});

//shows how to create a new test that verifies that a enemy's attack value is within range
test("gets enemy's attack value", () => {
    const player = new Enemy('goblin', 'sword');
    player.strength = 10;

    expect(player.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(player.getAttackValue()).toBeLessThanOrEqual(15);
});
 
//check if the enemy is alive
test('checks if enemy is alive or not', () => {
    const enemy = new Enemy('goblin', 'sword')

    expect(enemy.isAlive()).toBeTruthy();

    enemy.health = 0;

    expect(enemy.isAlive()).toBeFalsy();
});

//to see if the correct amount of health is being subtracted from the Enemy health property
test("subtracts from enemy's health", () => {
    const enemy = new Enemy('goblin', 'sword');

    const oldHealth = enemy.health;

    enemy.reduceHealth(5);

    expect(enemy.health).toBe(oldHealth - 5);

    enemy.reduceHealth(99999);

    expect(enemy.health).toBe(0);
});

// description telling them the enemy's name and which weapon they are holding
test('gets a description of the enemy', () => {
    const enemy = new Enemy('goblin', 'sword');
  
    expect(enemy.getDescription()).toEqual(expect.stringContaining('goblin'));
    expect(enemy.getDescription()).toEqual(expect.stringContaining('sword'));
  });
