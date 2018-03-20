import React, { Component } from 'react';
import NewsItem from './news-item';
import './news.scss'
import Comments from '../comments/comments';

class News extends Component {
    constructor() {
        super();
        this.news = [];
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                this.news = json;
                this.setState(this.news);
            });
    }
    render() {
        return (
            <div className="news-wrapper" key='1nw'>
                {
                    (this.news.length) ?
                        this.news.map(
                            newItem =>
                                <div className="news-item-wrapper" key={newItem.id}>
                                    <NewsItem newItem={newItem} />
                                    <Comments postId={newItem.id} />
                                </div>
                        ) : <div className="news-empty-wrapper">No news</div>
                }
            </div>
        )
    }
}

export default News;