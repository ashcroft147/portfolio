import React, { Component } from 'react';
import gjstamp from './GJstamp_star.svg';
import './Header.css';
//import * as firebase from 'firebase';

class Header extends Component {

/*
  constructor() {
    super();
    this.state = {
      introduction: ""
    };
  }
 
  componentWillMount() {   
    const homeRef = firebase.database().ref().child('home');	
    const introductionRef = homeRef.child('introduction');
    introductionRef.on('value', snap => {
        this.setState({
          introduction: snap.val()
      });
    });
  }
*/
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
						<li id="menu-item-contact">
							<a title="Contact" href="/contact">CONTACT</a>
						</li>																									
					</ul>
				</nav>
			</div>
			<HeaderMsg intro={this.props.introduction}/>
		</header>
    );
  }
}

const HeaderMsg = ({intro}) => {
	return (
			<div>
				<h2>{intro}</h2>
			</div>
	);
};

HeaderMsg.propTypes = {
	intro: React.PropTypes.string.isRequired
}

Header.defaultProps = {
	introduction: "Hi, my name is Kim JeongHyun. I am a Front-End Developer Who wants to upgrade myself everyday!"
}

export default Header;
