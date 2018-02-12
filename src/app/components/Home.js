import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {
	constructor(props) {
		super();
		this.state = {
			age : props.age,
			homeLink : props.homeLink,
			mounted : true,
			status : 1
		}
		// this only timeouts once
		setTimeout(() => {
			this.setState({
				status : this.state.status + 1
			});
		}, 2000)

		console.log("constructor!")
	}

	componentWillMount() {
		console.log("componentWillMount!");
	}
	componentDidMount() {
		console.log("componentDidMount!");
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log("shouldComponentUpdate!", nextProps, nextState)
		return true;
	}

	componentWillReceiveProps(nextProps) {
		console.log("componentWillReceiveProps!", nextProps);
	}
	
	componentWillUpdate(nextProps, nextState) {
		console.log("componentWillUpdate!", nextProps, nextState)
		return true;
	}
	componentDidUpdate(prevProps, prevState) {
		console.log("componentDidUpdate!", prevProps, prevState)
		return true;
	}
	componentWillUnmount() {
		console.log("componentWillUnmount!")
	}

	onMakeOlder() {
		this.setState({
			age : this.state.age + 1
		});
	}
	onChangeHomeLink() {
		this.props.changeHomeLink(this.state.homeLink)
	}

	onHandleChange(event) {	
		this.setState({
			homeLink : event.target.value,
		})
	}
	//called by React framework
	render() {
		console.log(this.props);
		var content = "Hello!"
		return (
			//only one section of <div> can be here
			<div>
				<p>In Home Component!</p>
				{ content }
				<p>{this.props.name}</p>
				<p>{this.state.age}</p>
				<p>{this.state.status}</p>
				<div>
					<ul>
					{this.props.hobbies.map((h, i) => <li key={i}>{h}</li>)}
					</ul>
				</div>
				{this.props.children}

				<hr/>
				<button onClick={this.onMakeOlder.bind(this)}>Make me older!</button>
				<button onClick={() => this.onMakeOlder()}>Make me older v2!</button>
				<button onClick={this.props.greet}>Greet</button>
				
				<input type="text" value={this.state.homeLink} onChange={(event) => this.onHandleChange(event)}/>
				<button onClick={this.onChangeHomeLink.bind(this)}>Change Home Link</button>
				
			</div>
		);
	}
}

Home.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number,
	hobbies: PropTypes.array,
	children: PropTypes.element.isRequired
};