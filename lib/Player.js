const Potion = require('../lib/Potion')
const Character = require('./Character');

//ES6 inherritance
class Player extends Character {
    constructor(name = '') { //name parameter sets a default empty string if no name is provided

    // call parent constructor here: ( passes the name argument to the constructor() of the Character class, where name and other properties like health are officially defined)
    super(name);

    //will always generate two health potions with a value of 20
    this.inventory = [new Potion('health'), new Potion()];
}

   
    // returns object with various player properties
    getStats() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    };

    // returns the inventory array or false if empty
    getInventory() {
        if (this.inventory.length) {
            return this.inventory;
        }
        return false;
    };

    //potion increases array of player.inventory 
    addPotion(potion) {
        this.inventory.push(potion);
    }

    //keeping track of the old inventory length so that we can make sure the length decreases and doesn't go below zero
    usePotion(index) {
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
        }
    };
    
module.exports = Player;