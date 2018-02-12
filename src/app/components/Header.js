import React from "react";
import PropTypes from 'prop-types';

//this is a stateless component
export const Header = (props) => {
	//called by React framework
	return (
		//only one section of <div> can be here
		<div>
			<h1>In {props.name} Component! </h1>
		</div>
	);
}


Header.propTypes = {
	name: PropTypes.string,
};