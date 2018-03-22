import React, { Component } from 'react';
import NewsItem from './News-item';
import './news.scss'
import Comments from '../comments/Comments';

class News extends Component {
    componentDidMount() {
        this.props.getNews();
    }
    
    render() {
        const { news, fetching } = this.props;
        return (
            <div className="news-wrapper">
                {
                    (!fetching) ?
                        news.map(
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