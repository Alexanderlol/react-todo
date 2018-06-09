console.log('app.js is running');

// JSX - Javascript XML

const app = {
	title: 'React Todo App',
	subtitle: 'This is a todo app',
	options: ['One', 'Two']
};

const template = (
	<div>
		<h1>{app.title}</h1>
		{app.subtitle && <p>{app.subtitle}</p>}
		{/* {(app.options && app.options.length > 0) && <p>here are are your options {app.options}</p>} */}
		{app.options.length > 0 ? "heres your options" : "no options"}
		<ol>
			<li>list one</li>
			<li>list two</li>
		</ol>
	</div>
);

let count = 0;
const addOne = () => {
	console.log('addOne');
}
const minusOne = () => {
	console.log('minusOne');
}
const reset = () => {
	console.log('reset');
}
const templateTwo = (
	<div>
		<h1>Count: {count}</h1>
		<button onClick={addOne}>+1</button>
		<button onClick={minusOne}>-1</button>
		<button onClick={reset}>reset</button>
	</div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);