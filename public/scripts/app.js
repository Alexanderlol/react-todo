'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactToDoApp = function (_React$Component) {
	_inherits(ReactToDoApp, _React$Component);

	function ReactToDoApp() {
		_classCallCheck(this, ReactToDoApp);

		return _possibleConstructorReturn(this, (ReactToDoApp.__proto__ || Object.getPrototypeOf(ReactToDoApp)).apply(this, arguments));
	}

	_createClass(ReactToDoApp, [{
		key: 'render',
		value: function render() {
			var title = 'React ToDo';
			var subtitle = 'Put your life in the hands of a computer';
			var options = ['Thing one', 'Thing two', 'Thing four'];
			return React.createElement(
				'div',
				null,
				React.createElement(Header, { title: title, subtitle: subtitle }),
				React.createElement(Action, null),
				React.createElement(Options, { options: options }),
				React.createElement(AddOptions, null)
			);
		}
	}]);

	return ReactToDoApp;
}(React.Component);

var Header = function (_React$Component2) {
	_inherits(Header, _React$Component2);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	}

	_createClass(Header, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h1',
					null,
					this.props.title
				),
				React.createElement(
					'h2',
					null,
					this.props.subtitle
				)
			);
		}
	}]);

	return Header;
}(React.Component);

var Action = function (_React$Component3) {
	_inherits(Action, _React$Component3);

	function Action() {
		_classCallCheck(this, Action);

		return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
	}

	_createClass(Action, [{
		key: 'handlePick',
		value: function handlePick() {
			alert('handlePick');
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'button',
					{ onClick: this.handlePick },
					'What should I do?'
				)
			);
		}
	}]);

	return Action;
}(React.Component);

var Options = function (_React$Component4) {
	_inherits(Options, _React$Component4);

	function Options() {
		_classCallCheck(this, Options);

		return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
	}

	_createClass(Options, [{
		key: 'handleRemoveAll',
		value: function handleRemoveAll() {
			alert('removeAll');
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'button',
					{ onClick: this.handleRemoveAll },
					'Remove All'
				),
				this.props.options.map(function (option) {
					return React.createElement(Option, { key: option, optionText: option });
				}),
				React.createElement(Option, null)
			);
		}
	}]);

	return Options;
}(React.Component);

var Option = function (_React$Component5) {
	_inherits(Option, _React$Component5);

	function Option() {
		_classCallCheck(this, Option);

		return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
	}

	_createClass(Option, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				this.props.optionText
			);
		}
	}]);

	return Option;
}(React.Component);

var AddOptions = function (_React$Component6) {
	_inherits(AddOptions, _React$Component6);

	function AddOptions() {
		_classCallCheck(this, AddOptions);

		return _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).apply(this, arguments));
	}

	_createClass(AddOptions, [{
		key: 'handleAddOption',
		value: function handleAddOption(e) {
			e.preventDefault();

			var option = e.target.elements.option.value.trim();

			if (option) {
				alert('add option');
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'form',
					{ onSubmit: this.handleAddOption },
					React.createElement('input', { type: 'text', name: 'option' }),
					React.createElement(
						'button',
						null,
						'Add Option'
					)
				)
			);
		}
	}]);

	return AddOptions;
}(React.Component);

ReactDOM.render(React.createElement(ReactToDoApp, null), document.getElementById('app'));
