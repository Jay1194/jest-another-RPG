
class Potion {

/// The constructor() is necessary here, because we want to be able to supply an argument to the class (e.g., new Potion('health')  - (If the class wasn't intended to receive arguments, the constructor() could be omitted.)
constructor(name) {     //Potion() constructor should take in a name parameter
    this.types = ['strength', 'agility', 'health'];

    //This expression will be evaluated so that if name is truthy—that is to say, it can be coerced to true—then this.name = name
    this.name = name
    || 
    // If name is not truthy, then this.name = this.types[Math.floor(Math.random() * this.types.length)] or a random type of potion.
    this.types[Math.floor(Math.random() * this.types.length)];

    if (this.name === 'health') {
        this.value = Math.floor(Math.random() * 10 + 30); //if the potion is a health potion, its value is a number between 30 and 40
    } else {
        this.value = Math.floor(Math.random() * 5 + 7);  // assign the value property to be a random number between 7 and 12.
    }
}
}

 module.exports = Potion; // set module.exports to be the Potion() constructor so that our tests can create new potions .