import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			homeLink : "Joe's Header",
			mounted : true,
		};
	}

	onChangeHomeLink(newHomeLink) {
		console.log("index.js onChangeHomeLink")
		this.setState({
			homeLink : newHomeLink,
		})
	}

	onGreet() {
		alert("Hi");
	}

	onHandleChange(event) {
		this.setState({
			homeLink : event.target.value,
		})
	}

	onMountHome() {
		this.setState({
			mounted : !this.state.mounted,
		})
	}

	//called by React framework
	render() {
		let homeComp = "";
		if (this.state.mounted) {
			homeComp = (
				<Home name={"Joe"} age={28} hobbies={["h1", "h2", "h3"]} 
						  homeLink={this.state.homeLink}
						  handleChange={this.onHandleChange.bind(this)}
						  greet={this.onGreet} 
					      changeHomeLink={this.onChangeHomeLink.bind(this)}
					      mountHome={this.onMountHome.bind(this)}
					      >
					<p>This is will be passed in as props.children</p>
				</Home>
			);
		}
		return (
			//only one section of <div> can be here
			<div className='1'>
				<Header name={this.state.homeLink}/>
				{homeComp}
				<button onClick={this.onMountHome.bind(this)}>(Un)Mount Home!</button>
			</div>
		);
	}
}

render(<App/>, window.document.getElementById("app"));