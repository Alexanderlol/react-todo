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

const user = {
	name: 'Alex',
	age: 26,
	location: 'Nepean'
};

function getLocation(location) {
	if (location) {
		return <p>Location: {location}</p>;
	}
}

const templateTwo = (
	<div>
		<h1>{user.name ? user.name : 'Anonymous'}</h1>
		{(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
		{getLocation(user.location)}
	</div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);