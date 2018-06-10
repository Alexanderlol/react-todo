'use strict';

console.log('app.js is running');

// JSX - Javascript XML

var app = {
	title: 'React Todo App',
	subtitle: 'This is a todo app',
	options: []
};

var onFormSubmit = function onFormSubmit(e) {
	e.preventDefault();

	var option = e.target.elements.option.value;

	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		renderFormSubmit();
	}
};

var onRemoveAll = function onRemoveAll(e) {
	app.options = [];
	renderFormSubmit();
};

var appRoot = document.getElementById('app');

var renderFormSubmit = function renderFormSubmit() {
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
		React.createElement(
			'p',
			null,
			app.options.length > 0 ? "heres your options" : "no options"
		),
		React.createElement(
			'p',
			null,
			app.options.length
		),
		React.createElement(
			'ol',
			null,
			React.createElement(
				'button',
				{ onClick: onRemoveAll },
				'Remove All'
			),
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
		),
		React.createElement(
			'form',
			{ onSubmit: onFormSubmit },
			React.createElement('input', { type: 'text', name: 'option' }),
			React.createElement(
				'button',
				null,
				'Add Option'
			)
		)
	);
	ReactDOM.render(template, appRoot);
};

renderFormSubmit();
