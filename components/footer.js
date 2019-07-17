import React from 'react';

const Footer = () => (
	<div className="main-content">
		<div className="footer-row">
			<div className="footer-col">
				<div className="explore-col">
					<h1>Explore</h1>
					<i class="fas fa-arrow-right"> Mac</i><br/>
					<i class="fas fa-arrow-right"> iPad</i><br/>
					<i class="fas fa-arrow-right"> iPhone</i><br/>
					<i class="fas fa-arrow-right"> Music</i><br/>
					<i class="fas fa-arrow-right"> iPod touch</i><br/>
				</div>
			</div>
			<div className="footer-col">
				<div className="explore-col">
					<h1>Account</h1>
					<i class="fas fa-arrow-right"> Manage your Id</i><br/>
					<i class="fas fa-arrow-right"> iCloud.com</i><br/>
					<i class="fas fa-arrow-right"> Find a Reseller</i><br/>
					<i class="fas fa-arrow-right"> Business Policy</i><br/>
					<i class="fas fa-arrow-right"> Investment Trade</i><br/>
				</div>
			</div>
			<div className="footer-col">
				<div className="explore-col">
					<h1>About Us</h1>
					<i class="fas fa-arrow-right"> Mac</i><br/>
					<i class="fas fa-arrow-right"> iPad</i><br/>
					<i class="fas fa-arrow-right"> iPhone</i><br/>
					<i class="fas fa-arrow-right"> Music</i><br/>
					<i class="fas fa-arrow-right"> iPod touch</i><br/>
				</div>
			</div>
			<div className="footer-col">
				<div className="explore-col">
					<h1>NEWSLETTER</h1>
					<input placeholder="enter your email" type="email" className="footer-email" /><br/>
					<a href="/" className="subscribetion-btn">SUBSCRIBE</a>
				</div>
			</div>
		</div>
		<div className="copyright">
			<p>&copy; Copyright iMall Develop by <span className="copyright-name">Patrick Asu</span></p>
		</div>	
	</div>
);

export default Footer;