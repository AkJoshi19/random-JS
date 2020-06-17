// Car constructor
const Car = function() {};

// Set Car's prototype
Car.prototype = {
  print() {
    return 'this is a Car';
  }
};

// ToyCar constructor
const ToyCar = function() {};

// Set ToyCar's prototype to be Car's prototype
ToyCar.prototype = Object.create(Car.prototype);

// Adding ToyCar's own prototype print method
ToyCar.prototype.print = function(){
	return 'this is a ToyCar';
}
// Creating LegoCar object from ToyCar constructor
const legoCar = new ToyCar();

console.log(legoCar.print());
