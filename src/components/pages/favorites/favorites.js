import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import NoteFeed from '../../notes/noteFeed';
import { GET_MY_FAVORITES } from '../../../gql/query';

const Favorites = () => {
	useEffect(() => {
		//Update the document title
		document.title = 'My Favorites - Notedly'
	})
    const { loading, error, data } = useQuery(GET_MY_FAVORITES);
	//If data is loading, our app will display  a loading message
	if(loading) return 'Loading ...';
	//if there is an error in fetching the data, display an error message
	if(error) return `Error! ${error.message}`;
	//If query is successfull and there are notes, return a notefeed
	//else display a message
	if(data.me.favorites.length !== 0){
		return <NoteFeed notes={data.me.favorites} />;
	}else {
		return <p> No Favorites yet</p>
	}

};

Favorites.displayName = 'Favorites';


export default Favorites;
