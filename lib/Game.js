const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');

// the Game object's properties
function Game() {
    this.roundNumber = 0;
    this.isPlayerturn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;
}


Game.prototype.startNewBattle = function() {
    if (this.player.agility > this.currentEnemy.agility) {
        this.isPlayerTurn = true;
    } else {
        this.isPLayerTurn = false;
    }
    console.log('Your stats are as follows:');

    // formatted table of data
    console.table(this.player.getStats());

    //console-log the Enemy object's description
    console.log(this.currentEnemy.getDescription());

//Method responsible for each individual turn in the round
    this.battle();
};
    
// battle logic
Game.prototype.battle = function() {

    if (this.isPlayerTurn) {

    } else {
          const damage = this.currentEnemy.getAttackValue();
          this.player.reduceHealth(damage);

          console.log(`You were attacked by the ${this.currentEnemy.name}`);
          console.log(this.player.getHealth());
        }

    if (this.isPlayerTurn) {
    //Player prompts will go here
    inquirer
        .prompt({
            type: 'list',
            message: 'What would you like to do?',
            name: 'action',
            choices: ['Attack', 'use potion']
        })

        .then(({ action }) => {

            //If the user selects 'Use potion'
            if (action === 'use potion') {

                // inventory is empty, immediately return to end the Player turn (getInventory() method that returns false if the inventory is empty.)
                if (!this.player.getInventory()) {
                    console.log("You don't have any potions!");
                    return;
                }

                // If they have a potion available
                inquirer.prompt({
                    type: 'list',
                    message: 'Which potion would you like to use?',
                    name: 'action',
                    //callback has a second optional parameter to capture the index of the item. We're using that index to create a human-readable number for the user.
                    choices: this.player.getInventory().map((item, index) => `${index + 1}: ${item.name}`)
                })
                //Subtracting 1 from the number will put us back at the original array index using .split
                .then(({ action }) => {
                
                    const potionDetails = action.split(': ');

                    this.player.usePotion(potionDetails[0] -1);
                    console.log(`You used a ${potionDetails[1]} potion.`);
                });
                
            //If the user selects 'Attack'
            } else {
                const damage = this.player.getAttackValue();
                this.currentEnemy.reduceHealth(damage);

                console.log(`You attacked the ${this.currentEnemy.name}`);
                console.log(this.currentEnemy.getHealth());
            }
        })
    }
    



//If Player turn:

    /*
   - Prompt user to attack or use a Potion

   - If using a Potion:

   - Display list of Potion objects to user

   - Apply selected Potion effect to Player

   - If attacking:

    Subtract health from the Enemy based on Player attack value

//If Enemy turn:

   - Subtract health from the Player based on Enemy attack value

*/
};

// set up the Enemy and Player objects
Game.prototype.initializeGame = function() {

    //populate the enemies array
    this.enemies.push(new Enemy('goblin', 'sword'));
    this.enemies.push(new Enemy('orc', 'baseball bat'));
    this.enemies.push(new Enemy('skeleton', 'axe'));

     // keep track of which Enemy object is currently fighting the Player
     this.currentEnemy = this.enemies[0];

//prompt the user for their name, which will become the Player name
inquirer 
.prompt({
    type: 'text',
    name: 'name',
    message: 'What is your name?'
})

// destructure name from the prompt object
.then(({ name }) => {
    this.player = new Player(name);

    // test the object creation
    //console.log(this.currentEnemy, this.player);

    //method will be called to kick off the first battle and then called again anytime a new round starts
    this.startNewBattle()
})
}




module.exports = Game;