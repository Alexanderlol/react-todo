class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>React ToDo</h1>
				<h2>what to do</h2>
			</div>
		);
	}
}

class Action extends React.Component {
	render() {
		return (
			<div>
				<button>What should I do?</button>
			</div>
		);
	}
}

class Options extends React.Component {
	render() {
		return (
			<div>
				<h1>Option1</h1>
			</div>
		);
	}
}

class AddOptions extends React.Component {
	render() {
		return (
			<div>
				<form>Stuff here</form>
			</div>
		);
	}
}

const jsx = (
	<div>
		<h1>Title</h1>
		<Header />
		<Action />
		<Options />
		<AddOptions />
	</div>
);

ReactDOM.render(jsx, document.getElementById('app'));