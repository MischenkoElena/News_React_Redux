import React, { Component } from 'react';
import Comment from './comment';
import './comments.css';

class Comments extends Component {
    constructor(props) {
        super(props);
        this.comments= [];
        fetch('https://jsonplaceholder.typicode.com/comments?postId=' + this.props.postId)
            .then(response => response.json())
            .then(json => {
                this.comments = json;
                this.setState(this.comments);
            });
    }
    render() {
        return (
            <div className='comments-wrapper'>
                Commented: {this.props.postId}
                {
                    this.comments.length ?
                        <div className='comments-list'>{
                            this.comments.map(comment =>
                                <Comment content={comment} key={comment.id} />
                            )
                        }</div> :
                        <div className='empty-comments'>No comments yet</div>
                }
            </div>
        )
    }
}

export default Comments;