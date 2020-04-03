import React, { useEffect } from 'react';

const Favorites = () => {
	useEffect(() => {
		//Update the document title
		document.title = 'My Favorites - Notedly'
	})
    return (
        <div>
        	<h1>Notedly</h1>
        	<p>These are my favorite notes</p>
        </div>
    );
};

Favorites.displayName = 'Favorites';


export default Favorites;
