import React from 'react';
import { Link } from 'react-router-dom'


const Navigation = () => {
    return (
        <nav>
        	<ul>
        		<li>
        			<Link to="./pages/mynotes">My Notes</Link> 
        		</li>
        		<li>
        			<Link to="./pages/favorites">Favorites</Link> 
        		</li>
        	</ul>
        </nav>
    );
};

Navigation.displayName = 'Navigation';

export default Navigation;
