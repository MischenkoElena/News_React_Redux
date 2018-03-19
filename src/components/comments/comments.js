import React, { Component } from 'react';

class Comments extends Component {
    render() {
        return (
            <div className="comments-wrapper">Commented: {this.props.postId}</div>
        )
    }
}

export default Comments;