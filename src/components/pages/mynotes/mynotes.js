import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import NoteFeed from '../../notes/noteFeed';
import { GET_MY_NOTES } from '../../../gql/query';

const MyNotes = () => {
	useEffect(() => {
		//Update the document title
		document.title = 'My Notes - Notedly'
	})

	const { loading, error, data } = useQuery(GET_MY_NOTES);
	//If data is loading, our app will display  a loading message
	if(loading) return 'Loading ...';
	//if there is an error in fetching the data, display an error message
	if(error) return `Error! ${error.message}`;
	//If query is successfull and there are notes, return a notefeed
	//else display a message
	if(data.me.notes.length !== 0){
		return <NoteFeed notes={data.me.notes} />;
	}else {
		return <p> No notes yet</p>
	}

};

MyNotes.displayName = 'MyNotes';


export default MyNotes;
