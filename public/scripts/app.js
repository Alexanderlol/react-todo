'use strict';

var visibility = false;

var toggleVisibility = function toggleVisibility() {
	visibility = !visibility;
	render();
};

var render = function render() {
	var jsx = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			'Visibility Toggle'
		),
		React.createElement(
			'button',
			{ onClick: toggleVisibility },
			visibility ? 'hide details' : 'show details'
		),
		visibility && React.createElement(
			'div',
			null,
			React.createElement(
				'p',
				null,
				'These are the details'
			)
		)
	);

	ReactDOM.render(jsx, document.getElementById('app'));
};

render();
