'use strict';

console.log('app.js is running');

// JSX - Javascript XML

var app = {
	title: 'React Todo App',
	subtitle: 'This is a todo app',
	options: ['One', 'Two']
};

var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		app.title
	),
	app.subtitle && React.createElement(
		'p',
		null,
		app.subtitle
	),
	app.options.length > 0 ? "heres your options" : "no options",
	React.createElement(
		'ol',
		null,
		React.createElement(
			'li',
			null,
			'list one'
		),
		React.createElement(
			'li',
			null,
			'list two'
		)
	)
);

var user = {
	name: 'Alex',
	age: 26,
	location: 'Nepean'
};

function getLocation(location) {
	if (location) {
		return React.createElement(
			'p',
			null,
			'Location: ',
			location
		);
	}
}

var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		user.name ? user.name : 'Anonymous'
	),
	user.age && user.age >= 18 && React.createElement(
		'p',
		null,
		'Age: ',
		user.age
	),
	getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
