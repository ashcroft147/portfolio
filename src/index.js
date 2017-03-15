import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import HomeContainer from './container/HomeContainer';
import AboutContainer from './container/AboutContainer';
import PortfolioContainer from './container/PortfolioContainer';
import BlogContainer from './container/BlogContainer';
import GithubContainer from './container/GithubContainer';
import ContactContainer from './container/ContactContainer';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './index.css';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBh95mLLrG7CCD5Ts810guFuP-HMXVwuss",
    authDomain: "portpolio-16967.firebaseapp.com",
    databaseURL: "https://portpolio-16967.firebaseio.com",
    storageBucket: "portpolio-16967.appspot.com",
    messagingSenderId: "54643699999"
};

firebase.initializeApp(config);

ReactDOM.render(
  <Router history={browserHistory}>
	  <Route path="/" component={App}>
	  	<IndexRoute component={HomeContainer}/>
		<Route path="about" component={AboutContainer}/>
		<Route path="portfolio" component={PortfolioContainer}/>
		<Route path="blog" component={BlogContainer}/>
		<Route path="github" component={GithubContainer}/>
		<Route path="contact" component={ContactContainer}/>
	  </Route>
  </Router>
  ,
  document.getElementById('root')
);
