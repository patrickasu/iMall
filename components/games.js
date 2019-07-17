import React from 'react';
import { Link } from 'react-router-dom';

const Games = () => (
	<div className="main-content">
		<div className="games">
			<div className="games-col">
				<i class="fab fa-apple">Arcade</i>
				<p>Games that redefine games. <br/> Coming to the App Store later this year.</p>
				<div className="games-btn">
					<div className="games-area">
						<div className="games-front-side">
	        				<p><Link to="/mac">BUY</Link></p>
		      			</div>
		      			<div className="games-back-side">
		        		<p><Link to="/mac">BUY</Link></p>
		      		</div>
	      		</div>
			</div>	
		</div>
	</div>
	</div>
);

export default Games;