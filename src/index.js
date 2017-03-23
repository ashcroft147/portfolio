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
    apiKey: "AIzaSyDDSfJaCqK10MaBHPIMqQ5yyQ8kWEJD4rE",
    authDomain: "portfolio-2a4e2.firebaseapp.com",
    databaseURL: "https://portfolio-2a4e2.firebaseio.com",
    storageBucket: "portfolio-2a4e2.appspot.com",
    messagingSenderId: "667002217775"
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
