import React from 'react';


export default class InputForm extends React.Component {
	handleAdd(){
		let postDetails = {
			name: this.refs.name.value,
		};
		if(postDetails.name)
		{
			this.props.addPostFunc(postDetails);
		}
		else {
			this.refs.name.placeholder = "enter something dimwit";
		}
    // Clear form again for next add
    this.refs.name.value = "";
}
render() {

	return (
		<div>
		<h3>Create a new post</h3>
		<table>
		<tbody>
		<tr>
		<th>
		Content:
		</th>
		<td>
		<textarea ref="name" name="name" type="text" value={this.props.name}/>
		</td>
		<td>
		<button type="submit" onClick={this.handleAdd.bind(this)}>Create!</button>
		</td>
		</tr>
		</tbody>
		</table>
		</div>
		)
}
}

