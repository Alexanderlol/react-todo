//arguements object no longer bound with arrow functions
const add = (a, b) => {
	//console.log(arguements);
	return a + b;
};

console.log(add(55,1));

//this keyword no longer bound 

const user = {
	name: 'Alex',
	cities: ['Ottawa', 'Toronto', 'Montreal'],
	printPlacesLived() {
		return this.cities.map((city) => this.name + ' has lived in ' + city);
	}
};

console.log(user.printPlacesLived());

//challenge
const multiplier = {
	//numbers - array
	numbers: [1,2,3,4],
	//multiplyBy - integer
	multiplyBy: 2,
	//multiply - return new array where the numbers have been multiplied
	multiply() {
		return this.numbers.map((number) => number * this.multiplyBy);
	}
};

console.log(multiplier.multiply());

