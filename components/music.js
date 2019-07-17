import React from 'react';
import{ Link } from 'react-router-dom';

const Music = () => (
	<div className="main-content">
		<div className="music-row">
			<div className="music-col">
				<i class="fab fa-cc-apple-pay">iTunes</i>
				<p>50 million songs. 3 months on us. Transform the way you work, learn, play, and connect with almost everything around you.<br/>Start your free tria</p>
				<Link to="ipads" className="music-link">BUY</Link>
			</div>
			<div className="music-image"></div>
		</div>
	</div>
);

export default Music;