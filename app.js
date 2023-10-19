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

// Array destructuring
const [first, second] = ['first item', 'second item];

// rest operator
const {name, ...details} = {name: 'Diane', occupation: 'Developer', location: 'USA'};

// asynchronous promises
new Promise((resolve, reject) => {
 setTimeout(() => {
   resolve('success');
 }, 2000);
});

//====================================================================================

//constructor functions can be written using the class keyword

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  honk() {
    console.log('beep beep');
  }
}

// car objects are still created and used the same way
const car = new Car('Honda', 'Civic');
car.honk();

SAME AS: -----------------------------------------------------

function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.honk = function() {
  console.log('beep beep');
};

const car = new Car('Honda', 'Civic');
car.honk();

//====================================================================================

//ES5 - (This works because Car() was hoisted into memory before new Car() was called.)

const car = new Car('Honda', 'Civic');

function Car(make, model) {
 this.make = make;
 this.model = model;
}

// ES6 - not hoisted (this will not work)

// Uncaught ReferenceError: Cannot access 'Car' before initialization
const car = new Car('Honda', 'Civic');

class Car {
 constructor(make, model) {
   this.make = make;
   this.model = model;
 }
}
=================================================



*/


