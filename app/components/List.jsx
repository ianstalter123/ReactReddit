import React from 'react';
import Post from './Post.jsx';

export default class List extends React.Component {
	render() {

		let posts = this.props.posts.map(function(post){
			return <Post post={post} />
		});
		return <div>{posts}</div>;
	}
}
