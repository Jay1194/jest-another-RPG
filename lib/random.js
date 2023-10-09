 function randomNumber () {
   return Math.floor(Math.random() * 9 + 1);
};

// example of a constructor function 
function Car(make, model) {
    this.make = make;
    this.model = model;
  }

//to actually create the new car object, we need to invoke the Car() constructor by calling it with the new keyword.
const car = new Car('Honda', 'Civic');
console.log(car);


module.exports = randomNumber;