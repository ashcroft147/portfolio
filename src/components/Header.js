import React, { Component } from 'react';
import { Link } from 'react-router';
import gjstamp from './GJstamp_star.svg';

import './Header.css';


class Header extends Component {

  render() {
    return (
		<header id="header">
			<div className="header">
          		<img src={gjstamp} className="header-logo col-md-2" alt="logo" />
				<nav id="nav" className="menu">
					<ul id="menu-nav">
						<li id="menu-item-home">
							<Link title="Home" href="/">HOME</Link>
						</li>
						<li id="menu-item-about">
							<Link title="About" href="/about">ABOUT</Link>
						</li>
						<li id="menu-item-portfolio">
							<Link title="Portfolio" href="/portfolio">PORTFOLIO</Link>
						</li>	
						<li id="menu-item-contact">
							<Link title="Contact" href="/contact">CONTACT</Link>
						</li>																									
					</ul>
				</nav>
			</div>
			<HeaderMsg intro1stRow={this.props.intro1stRow} intro2ndRow={this.props.intro2ndRow}/>
		</header>
    );
  }
}

const HeaderMsg = ({intro1stRow, intro2ndRow}) => {
	return (
			<div className="intro">
				<h2>{intro1stRow}</h2>
				<br/>
				<h2>{intro2ndRow}</h2>
			</div>
	);
};

HeaderMsg.propTypes = {
	intro1stRow: React.PropTypes.string.isRequired,
	intro2ndRow: React.PropTypes.string
}

Header.defaultProps = {
	intro1stRow: "Hi, my name is Kim JeongHyun.",
	intro2ndRow: "I am a Front-End Developer Who wants to upgrade myself everyday!"

}

export default Header;
