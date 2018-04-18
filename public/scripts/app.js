'use strict';

console.log('app.js is running');

// JSX - Javascript XML
var template = React.createElement(
  'p',
  null,
  'hello'
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
