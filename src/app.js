console.log('app.js is running');

// JSX - Javascript XML

const app = {
	title: 'React Todo App',
	subtitle: 'This is a todo app',
	options: []
};

const onFormSubmit = (e) => {
	e.preventDefault();

	const option = e.target.elements.option.value;

	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		renderFormSubmit();
	}

};

const onRemoveAll = (e) => {
	app.options = [];
	renderFormSubmit();
};



const appRoot = document.getElementById('app');

const renderFormSubmit = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			{/* {(app.options && app.options.length > 0) && <p>here are are your options {app.options}</p>} */}
			<p>{app.options.length > 0 ? "heres your options" : "no options"}</p>
			<p>{app.options.length}</p>
			<ol>
				<button onClick={onRemoveAll}>Remove All</button>
				<li>list one</li>
				<li>list two</li>
			</ol>

			<form onSubmit={onFormSubmit}>
				<input type="text" name="option"/>
				<button>Add Option</button>
			</form>
		</div>
	);
	ReactDOM.render(template, appRoot);
};

renderFormSubmit();




