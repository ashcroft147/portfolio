import React, { Component } from 'react';
import gjstamp from './GJstamp_star.svg';
import './Header.css';
import * as firebase from 'firebase';

class Header extends Component {

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
		<header id="header">
			<div className="header">
          		<img src={gjstamp} className="header-logo col-md-2" alt="logo" />
				<nav id="nav" className="menu">
					<ul id="menu-nav">
						<li id="menu-item-home">
							<a title="Home" href="/">HOME</a>
						</li>
						<li id="menu-item-about">
							<a title="About" href="/about">ABOUT</a>
						</li>
						<li id="menu-item-portfolio">
							<a title="Portfolio" href="/portfolio">PORTFOLIO</a>
						</li>	
						<li id="menu-item-blog">
							<a title="Blog" href="/blog">BLOG</a>
						</li>	
						<li id="menu-item-github">
							<a title="Github" href="/github">GITHUB</a>
						</li>	
						<li id="menu-item-contact">
							<a title="Contact" href="/contact">CONTACT</a>
						</li>																									
					</ul>
				</nav>
			</div>
			<HeaderMsg />
		</header>
    );
  }
}

const HeaderMsg = () => {
	return (
			<div>
				<h2>Header Msg</h2>
			</div>
	);
};


export default Header;
