const Potion = require('../lib/Potion')

function Player(name = '') { //name parameter sets a default empty string if no name is provided
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);

    //will always generate two health potions with a value of 20
    this.inventory = [new Potion('health'), new Potion()];
}

    // returns object with various player properties
    Player.prototype.getStats = function() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    };

    // returns the inventory array or false if empty
    Player.prototype.getInventory = function() {
        if (this.inventory.length) {
            return this.inventory;
        }
        return false;
    };
    
    // returns players health
    Player.prototype.getHealth = function() {
        return `${this.name}'s health is now ${this.health}!`;
    }

    // returns if player's alive or not
    Player.prototype.isAlive = function() {
        if (this.health === 0) {
            return false;
        }
        return true;
    };

    //  make sure health = 0 if below 0
    Player.prototype.reduceHealth = function(health) {
        this.health -= health;

        if (this.health < 0) {
            this.health = 0;
        }
    };

    // attack values
    Player.prototype.getAttackValue = function() {
        //easier to maintain if you decide to increase the range of attacks later on
        const min = this.strength - 5;
        const max = this.strength + 5;

        return Math.floor(Math.random() * (max - min) + min);
    };

    //potion increases array of player.inventory 
    Player.prototype.addPotion = function(potion) {
        this.inventory.push(potion);
    }

    //keeping track of the old inventory length so that we can make sure the length decreases and doesn't go below zero
    Player.prototype.usePotion = function(index) {
        /*original inventory array has a single Potion removed at the specified index value and put into a new "removed items" array,
        then the Potion at index [0] of this "removed items" array is saved in a potion variable */
        const potion = this.getInventory().splice(index, 1)[0];

        switch (potion.name) {
            case 'agility':
                this.agility += potion.value;
                    break;
                case 'health':
                    this.health += potion.value;
                    break;
                case 'strength':
                        this.strength += potion.value;
                    break;
        }
    };
    
module.exports = Player;