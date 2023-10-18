const Potion = require('../lib/Potion');

test('creates a health potion object', () => {
    const potion = new Potion('health'); //use the new keyword to create a new Potion object

    expect(potion.name).toBe('health'); //should have a name property equal to health
    expect(potion.value).toEqual(expect.any(Number)); //should have a value property that is a number of some kind
});

//If the Potion() constructor is called without any arguments, we will have it create a new potion with a random type and value.
test('creates a random potion object', () => {
    const potion = new Potion();

    expect(potion.name).toEqual(expect.any(String)); // should be equal to anything thats a string
    expect(potion.name.length).toBeGreaterThan(0); // length of string should be greater then 0
    expect(potion.value).toEqual(expect.any(Number)); // should be equal to anything thats a number
});


