import React from 'react';
import Note from './Note.jsx';
import Post from './Post.jsx';
import Comment from './Comment.jsx';
import List from './List.jsx';
import InputForm from './InputForm.jsx';



let posts = [{
	name: "The world is a vampire",
	comments: ["cool","great"]
},
{
	name: "React is more interesting the more I play with it",
	comments: ["fine","nice"]
},]

let showComments = false;

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			posts,
		};
	}

	addPost(newPost) {
		this.setState({
			posts: this.state.posts.concat(newPost),
		});
		this.forceUpdate();
	}

	render() {
		return (
			<div>
			<Note/>
			<InputForm addPostFunc={this.addPost.bind(this)}/>
			<br/>
			<List posts={this.state.posts}/>
			</div>
			)
	}
}
