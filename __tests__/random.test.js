const randomNumber = require('../lib/random.js');

test('check random nuumber between 1 and 10',() => {
    expect(randomNumber()).toBeGreaterThanOrEqual(1); 
    expect(randomNumber()).toBeLessThanOrEqual(10); 
});