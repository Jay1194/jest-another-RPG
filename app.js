const Game = require('./lib/Game');

new Game().initializeGame();



















// example of a constructor function 
/*
function Car(make, model) {
    this.make = make;
    this.model = model;
  }

//to actually create the new car object, we need to invoke the Car() constructor by calling it with the new keyword.
const car = new Car('Honda', 'Civic');
console.log(car);
*/

//========================================================================================================================

/*
// good for one car but the (car dealership is selling 500 cars) 
var car1 = {
  make: 'toyota',
  model: 'prius',
  year: '2007',
  color: 'grey',
};

// (need constructor for 500 cars)  will use car1 object as a blue print - we will create constructor
function Car(make, model, year, color) {

  // this keyword represents the object thats created when the constructor is called (what ever value is passed as an argument is going to have the value of the object as a property)
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
}

// making anouther car object (instance object)
var car2 = new Car('ford', 'mustang-e', '2020', 'midnight-blue');

// To see new object
//console.log(car2)

// THE DIFFERENCES WITH PROTOTYPES ==========================================

//start with name of constructor (car) then add .prototype then use (.) the asign the prototype method
Car.prototype.printInfo = function(){

  //using template litterals pass propertys and using [this] as a reference to whatever object is being used to call this prototype method
  console.log(`${this.make} ${this.model} ${this.year} ${this.color}`);
};
  car2.printInfo();



//=================================================================================================

*/

