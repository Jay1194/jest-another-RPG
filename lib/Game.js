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

    //placeholder for starting a new round.
    this.startNewBattle()
})
}



module.exports = Game;