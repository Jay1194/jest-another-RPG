const Potion = require('./Potion')
const Character = require('./Character');

class Enemy extends Character {
    constructor(name, weapon) { 

    // call parent constructor here: ( passes the name argument to the constructor() of the Character class, where name and other properties like health are officially defined)
    super(name);

    this.weapon = weapon;

    //will give enemy a potion
    this.potion = new Potion();
}


getDescription = function() {
    return `A ${this.name} is holding a ${this.weapon} has appeared!`;
}
}
module.exports = Enemy;