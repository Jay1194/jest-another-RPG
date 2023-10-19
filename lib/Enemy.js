const Potion = require('./Potion')

function Enemy(name, weapon) { 
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 85);
    this.strength = Math.floor(Math.random() * 5 + 5);
    this.agility = Math.floor(Math.random() * 5 + 5);
    this.weapon = weapon;

    //will give enemy a potion
    this.potion = new Potion();
}

// returns enemy health
Enemy.prototype.getHealth = function() {
    return `${this.name}'s health is now ${this.health}!`;
}

 // attack values
Enemy.prototype.getAttackValue = function() {
    //easier to maintain if you decide to increase the range of attacks later on
    const min = this.strength - 5;
    const max = this.strength + 5;

    return Math.floor(Math.random() * (max - min) + min);
};

// returns if enemy's alive or not
Enemy.prototype.isAlive = function() {
    if (this.health === 0) {
        return false;
    }
    return true;
};

 //  make sure health = 0 if below 0
Enemy.prototype.reduceHealth = function(health) {
    this.health -= health;

    if (this.health < 0) {
        this.health = 0;
    }
};

Enemy.prototype.getDescription = function() {
    return `A ${this.name} is holding a ${this.weapon} has appeared!`;
}

module.exports = Enemy;