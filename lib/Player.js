const Potion = require('../lib/Potion')

function Player(name = '') {//name parameter sets a default empty string if no name is provided
    this.name = name;
    //will always generate two health potions with a value of 20
    this.inventory = [new Potion('health'), new Potion()];

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
} 

module.exports = Player;