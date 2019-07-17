import React from 'react';
import { Link } from 'react-router-dom';

const Compare = (props) => (
	<div className="main-content">
		<h3 className="wheretobuy-header">{props.header}</h3>
		<div className="iphone-col">
			<div className="iphone-image"></div>
			<div className="compare-text">
				<h1>{props.title}</h1>
				<p>{props.discription}</p>
				<div className="compare-btn">
					<div className="compare-area">
						<div class="my-front-side">
	        				<p><Link to="/icloud" className="icloud-link">Learn More</Link></p>
		      			</div>
		      			<div className="my-back-side">
		        		<p><Link to="/icloud" className="icloud-link">Learn More</Link></p>
		      		</div>
	      		</div>
      		</div>
			</div>
		</div>
	</div>
);

export default Compare;