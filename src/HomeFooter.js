import React, { Component } from 'react';
import './HomeFooter.css';

class HomeFooter extends Component {

  render() {
    return (
		<footer>
			<div className="Footer">
				<div className="Footer-Social">
            	<p>social icons</p>
			</div>
				<p className="Footer-Copyright">
				Copyright Kim JeongHyun 2017
				</p>
			</div>
		</footer>
    );
  }
}

export default HomeFooter;
