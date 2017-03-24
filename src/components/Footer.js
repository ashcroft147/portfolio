import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
		
	render() {
		return (
			<footer id="footer">
				<div className="footer">
					<div className="col-md-12 social row">
						<a className="bg-facebook" href={this.props.urlList.facebook} target="_blank" title="facebook">
							<i className="fa fa-facebook-square fa-5x"></i> 
						</a>
						<a className="bg-github" href={this.props.urlList.github} target="_blank" title="workpress">
							<i className="fa fa-github fa-5x"></i> 
						</a>
						<a className="bg-tumblr" href={this.props.urlList.tumblr} target="_blank" title="tumblr">
							<i className="fa fa-tumblr-square fa-5x"></i> 
						</a>	
						<a className="bg-pinterest" href={this.props.urlList.pinterest} target="_blank" title="pinterest">
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

export default Footer;
