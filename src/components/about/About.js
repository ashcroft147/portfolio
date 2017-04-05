import React, { Component } from 'react';
import './About.css';
import DoctorStrange from './img/doctor-strange.png';

class About extends Component {
  render() {
    return (
		<main>
			<section id="about">
				<div className="container">
					<div className='col-md-12 margin-top profile'>				
						<img className="my_photo" src={DoctorStrange} alt="Kim Jeong-Hyun"></img>
						<div className="wrapper big-content">
							<h2>Kim JeongHyun Web Developer</h2>
							<p>React, ES6, Saas, Webpack2, npm, Node.js</p>
							<p>Love to development</p>
							<p>Love to Commit at github</p>
						</div>
					</div>
				</div>
			</section>
		</main>
    );
  }
}

export default About;


