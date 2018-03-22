import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import News from '../components/news/News'
import * as newsActions from '../actions/NewsActions'

import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
      const { news, comments } = this.props;
      const { getNews } = this.props.newsActions;
    
      return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <News news={news.newsArr} fetching={news.fetching} getNews={getNews}/>
      </div>
    );
  }
}


function mapStateToProps(state) {
    return {
        news: state.news,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch) {
    return {
        newsActions: bindActionCreators(newsActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);