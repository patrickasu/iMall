import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = (props) => (
	<div className="navigation">
		<li><Link className="navigation-link" to="/"><i class="fas fa-pallet"></i></Link></li>
		<ul className="navigation-menu">
			<li><NavLink className="navigation-link" exact to="/">Home</NavLink></li>
			<li><NavLink className="navigation-link" to="/ipads">iPad</NavLink></li>
			<li><NavLink className="navigation-link" exact to="/mac">Mac</NavLink></li>
			<li><NavLink className="navigation-link" to="/wheretobuy">Where to Buy</NavLink></li>
		</ul>
	</div>
);

export default Navbar;