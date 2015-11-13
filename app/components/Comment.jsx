import React from 'react';


export default class Comment extends React.Component {
	render() {

		return (
			<div>
			<li>{this.props.text}</li>
			</div>
			)
	}
}

