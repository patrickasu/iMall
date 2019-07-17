import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => (
	<div className="main-content">
		<div className="intro-row">
			<div className="intro-content">
				<div className="my-intro">
					<div className="wrapper">Use iPhones</div>
					<span className="wrapper-span">with  Smiles</span>
				</div>
				<p className="intro-text">Get more out of your iPhone millions of people use iPhone <br /> Transform the way you learn and connect with everything around you <br/>join our community</p>
				<div className="buy-btn">
					<div className="btn-area">
						<div class="front-side">
	        				<p><Link to="ipads">BUY</Link></p>
		      			</div>
		      			<div className="back-side">
		        			<p><Link to="ipads">BUY</Link></p>
		      			</div>
		      		</div>
	      		</div>
			</div>
		</div>
	</div>
);

export default Intro;