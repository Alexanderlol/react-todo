let visibility = false;

const toggleVisibility = () => {
	visibility = !visibility;
	render();
};

const render = () => {
	const jsx = (
		<div>
			<h1>Visibility Toggle</h1>
			<button onClick={toggleVisibility}>
				{visibility ? 'hide details' : 'show details'}
			</button>
			{visibility && (
				<div>
					<p>These are the details</p>
				</div>
			)}
		</div>
	);

	ReactDOM.render(jsx, document.getElementById('app'));
};

render();