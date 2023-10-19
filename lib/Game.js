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


Game.prototype.startNewBattle = function() {
    if (this.player.agility > this.currentEnemy.agility) {
        this.isPlayerTurn = true;
    } else {
        this.isPlayerTurn = false;
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

                    return this.checkEndOfBattle();
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

                    this.checkEndOfBattle();
                });
                
            //If the user selects 'Attack'
            } else {
                const damage = this.player.getAttackValue();
                this.currentEnemy.reduceHealth(damage);

                console.log(`You attacked the ${this.currentEnemy.name}`);
                console.log(this.currentEnemy.getHealth());

                this.checkEndOfBattle();
            }
        })
    } else {
        const damage = this.currentEnemy.getAttackValue();
        this.player.reduceHealth(damage);
    
        console.log(`You were attacked by the ${this.currentEnemy.name}`);
        console.log(this.player.getHealth());
    
        this.checkEndOfBattle();
    }
};
//checking for win/lose conditions 
    Game.prototype.checkEndOfBattle = function() {

        //verify if both characters are alive and can continue fighting
        if (this.player.isAlive() && this.currentEnemy.isAlive()) {

            //switch the turn order and run battle() again
            this.isPlayerTurn = !this.isPlayerTurn;
            this.battle();
        }

            //Player is still alive but the Enemy has been defeated
            else if (this.player.isAlive() && !this.currentEnemy.isAlive()) {
                console.log(`You've defeated the ${this.currentEnemy.name}`);

            //Player is awarded a Potion
            this.player.addPotion(this.currentEnemy.potion);
            console.log(`${this.player.name} found a ${this.currentEnemy.potion.name} potion`);

            this.roundNumber++;

        //a new battle should start
        if (this.roundNumber < this.enemies.length) {
            this.currentEnemy = this.enemies[this.roundNumber];
            this.startNewBattle();

        //no more enemies to fight, in which case the Player has won the overall game.
        } else {
            console.log('You win!');
          }

        } else {
            console.log("You've been defeated!");
          }
    };



module.exports = Game;