import React from 'react';
import Comment from './Comment.jsx';
import App from './App.jsx';

let show = false;
let edit = false;
export default class List extends React.Component {

	handleAdd(){
		let comDetails = {
			name: this.refs.name.value,
		};
		if(comDetails)
		{
			this.props.addComFunc(comDetails);
		}
		else {
			this.refs.name.placeholder = "enter sthg";
		}
    // Clear form again for next add
    this.refs.name.value = "";
}

	toggleShow() {
		this.show = !this.show;
		this.forceUpdate();
	}
	toggleEdit() {
		this.edit = !this.edit;
		this.forceUpdate();
	}

	render() {

		if(this.show){
			var comments = this.props.post.comments.map(function(comment){ return <Comment text={comment}/>
		});}
			if(this.edit){
				var edit = (function(){ return <div><h3>Add a comment</h3><input ref="name" name="name" type="text"></input>
					<button >add</button>
					</div>
				})();}
				return (
					<div>
					Title: {this.props.post.name}
					<button onClick={this.toggleShow.bind(this)}>Comments</button>
					<button onClick={this.toggleEdit.bind(this)}>Add Comment</button>
					<ul>
					{comments}
					{edit}
					</ul>
					</div>
					);
			}
		}