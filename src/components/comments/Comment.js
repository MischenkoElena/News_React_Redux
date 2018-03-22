import React, { Component } from 'react';

class Comment extends Component {
    render() {
        let comment = this.props.content;
        return (
            <div className="comment">
                <div className="comment-header">{comment.name}</div>
                <div className="comment-body">{comment.body}</div>
                <div className="comment-author">Author: {comment.email}</div>
            </div>
        )
    }
}

export default Comment;