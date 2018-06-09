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

var count = 0;
var addOne = function addOne() {
	count++;
	renderCounterApp();
};
var minusOne = function minusOne() {
	count--;
	renderCounterApp();
};
var reset = function reset() {
	count = 0;
	renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
	var templateTwo = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			'Count: ',
			count
		),
		React.createElement(
			'button',
			{ onClick: addOne },
			'+1'
		),
		React.createElement(
			'button',
			{ onClick: minusOne },
			'-1'
		),
		React.createElement(
			'button',
			{ onClick: reset },
			'reset'
		)
	);

	ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
