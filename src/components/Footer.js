import React, { Component } from 'react';
import './Footer.css';
import * as firebase from 'firebase';

class Footer extends Component {

	constructor(props){
		super(props);
		
		/*
		props.socialUrl.on('value', snap => {
			debugger;
			this.facebookUrl = "";
		}, function (e) {
			console.log("The read failed: " + e.code);
		});
		*/
	}

render() {


	return (
		<footer id="footer">
			<div className="footer">
				<div className="col-md-12 social row">
					<a className="bg-facebook" href={this.props.facebookUrl} target="_blank" title="facebook">
						<i className="fa fa-facebook-square fa-5x"></i> 
					</a>
					<a className="bg-github" href={this.props.github} target="_blank" title="workpress">
						<i className="fa fa-github fa-5x"></i> 
					</a>
					<a className="bg-tumblr" href={this.props.tumblr} target="_blank" title="tumblr">
						<i className="fa fa-tumblr-square fa-5x"></i> 
					</a>	
					<a className="bg-pinterest" href={this.props.pinterestUrl} target="_blank" title="pinterest">
						<i className="fa fa-pinterest-square fa-5x"></i> 
					</a>																
				</div>
				<div className="col-md-12 row">
					<p className="footer-copyright">Copyright Kim JeongHyun 2017</p>
				</div>
			</div>
		</footer>
		);
	}
}

/*
Footer.defaultProps = {
	facebookUrl: "https://www.facebook.com/ashcroft147",
	github: "https://github.com/ashcroft147",
	tumblr: "https://www.tumblr.com/login",
	pinterestUrl: "https://kr.pinterest.com/"
}
*/

export default Footer;
