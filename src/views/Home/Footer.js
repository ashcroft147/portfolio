import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {

  render() {
    return (
		<footer>
			<div className="footer">
				<div className="col-md-12 social row">
					<a className="bg-facebook" href="https://www.facebook.com/ashcroft147" target="_blank" title="facebook">
						<i className="fa fa-facebook-square fa-5x"></i> 
					</a>
					<a className="bg-wordpress" href="https://www.facebook.com/ashcroft147" target="_blank" title="workpress">
						<i className="fa fa-wordpress fa-5x"></i> 
					</a>
					<a className="bg-tumblr" href="https://www.facebook.com/ashcroft147" target="_blank" title="tumblr">
						<i className="fa fa-tumblr-square fa-5x"></i> 
					</a>	
					<a className="bg-pinterest" href="https://www.facebook.com/ashcroft147" target="_blank" title="pinterest">
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
