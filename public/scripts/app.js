'use strict';

//arguements object no longer bound with arrow functions
var add = function add(a, b) {
	//console.log(arguements);
	return a + b;
};

console.log(add(55, 1));

//this keyword no longer bound 

var user = {
	name: 'Alex',
	cities: ['Ottawa', 'Toronto', 'Montreal'],
	printPlacesLived: function printPlacesLived() {
		var _this = this;

		return this.cities.map(function (city) {
			return _this.name + ' has lived in ' + city;
		});
	}
};

console.log(user.printPlacesLived());

//challenge
var multiplier = {
	//numbers - array
	numbers: [1, 2, 3, 4],
	//multiplyBy - integer
	multiplyBy: 2,
	//multiply - return new array where the numbers have been multiplied
	multiply: function multiply() {
		var _this2 = this;

		return this.numbers.map(function (number) {
			return number * _this2.multiplyBy;
		});
	}
};

console.log(multiplier.multiply());
