import React, { Component } from 'react';

class NewsItem extends Component {
    render() {
        let post = this.props.newItem;
        return (
            <div className="post">
                <a className="post-link post-header">{post.title}</a>
                <div className="post-content">{post.body}</div>
            </div>
        )
    }
}

export default NewsItem;