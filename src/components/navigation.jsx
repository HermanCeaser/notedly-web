import React from 'react';
import { Link } from 'react-router-dom'
import './navigation.css'


const Navigation = () => {
    return (
        <nav>
        	<ul>
        		<li>
                    <Link to="/">
                        <span aria-hidden="true" role="img">🏠</span>&nbsp;
                        Home
                    </Link> 
        		</li>
        		<li>
        			<Link to="/mynotes">
                        <span aria-hidden="true" role="img">📓</span>&nbsp;
                        My Notes
                    </Link> 
        		</li>
        		<li>
                    <Link to="/favorites">
                        <span aria-hidden="true" role="img">🌟</span>&nbsp;
                        Favorites
                    </Link> 
        		</li>
                <li>
                    <Link to="/new">
                        <span aria-hidden="true" role="img">➕</span>&nbsp;
                        New Note
                    </Link>
                </li>
        	</ul>
        </nav>
    );
};

//Navigation.displayName = 'Navigation';

export default Navigation;
