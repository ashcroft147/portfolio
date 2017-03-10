import React, { Component } from 'react';
import logo from './logo.svg';
import './HomeHeader.css';
import * as firebase from 'firebase';

class HomeHeader extends Component {

  constructor() {
    super();
    this.state = {
      speed: 20
    };
  }
 
  componentDidMount() {   
    const rootRef = firebase.database().ref().child('react');
    const speedRef = rootRef.child('speed');
    speedRef.on('value', snap => {
        this.setState({
          speed: snap.val()
      });
    });
  }

  render() {
    return (
		<header>
			<div className="Header">
					<img src={logo} className="Header-logo" alt="logo" />
					<h2>Welcome to Kim's Portfolio</h2>
				{/*
				<h1>{this.state.speed}</h1-->
				*/}
			</div>
		</header>
    );
  }
}

export default HomeHeader;
