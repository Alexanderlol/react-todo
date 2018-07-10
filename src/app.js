class ReactToDoApp extends React.Component {
	render() {
		const title = 'React ToDo';
		const subtitle = 'Put your life in the hands of a computer';
		const options = ['Thing one', 'Thing two', 'Thing four'];
		return (
			<div>
				<Header title = {title} subtitle = {subtitle} />
				<Action />
				<Options options = {options}/>
				<AddOptions />
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
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
				{
					this.props.options.map((option) => <Option key={option} optionText={option}/>)
				}
				<Option />
			</div>
		);
	}
}

class Option extends React.Component {
	render() {
		return (
			<div>
				{this.props.optionText}
			</div>
		);
	}
}

class AddOptions extends React.Component {
	render() {
		return (
			<div>
				AddOptions Component here
			</div>
		);
	}
}


ReactDOM.render(<ReactToDoApp />, document.getElementById('app'));