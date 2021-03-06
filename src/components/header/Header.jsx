import React from 'react';

import './Header.scss';

// Stateless component
const Header = () => {
	return(
		<header>
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" href="#">Todo App</a>
					</div>
					<ul className="nav navbar-nav">
						<li className="active"><a href="#">Home</a></li>
					</ul>
				</div>
			</nav>
	    </header>
	);
};

export default Header;