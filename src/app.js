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
	count++;
	renderCounterApp();
}
const minusOne = () => {
	count--;
	renderCounterApp();
}
const reset = () => {
	count = 0;
	renderCounterApp();
}

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
	const templateTwo = (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={addOne}>+1</button>
			<button onClick={minusOne}>-1</button>
			<button onClick={reset}>reset</button>
		</div>
	);

	ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();





