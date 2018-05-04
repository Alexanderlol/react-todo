var nameVar = "Alex";
console.log('nameVar', nameVar);

let nameLet =  "Jen";
console.log('nameLet', nameLet);

const nameConst = "Frank";
console.log('nameConst', nameConst);

function getPetName() {
	var petName = 'Hal';
	return petName;
}

// Block scoping
var fullName = 'Alex Afeltra';

if(fullName) {
	let firstName = fullName.split(' ')[0];
	console.log(firstName);
}

console.log(firstName);