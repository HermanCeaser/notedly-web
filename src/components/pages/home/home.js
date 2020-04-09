import React, { useEffect } from 'react'
import NoteFeed from '../../notes/noteFeed'
//import UseQuery and gql libraries
import { useQuery, gql } from '@apollo/client'


//the graphQL query stored as a variable
const GET_NOTES = gql`
	query noteFeed($cursor: String){
	  noteFeed(cursor: $cursor) {
	    cursor
	    hasNextPage
	    notes {
	      id
	      createdAt
	      content
	      favoriteCount
	      author {
	        username
	        id
	        avatar
	      }
	    }
	  }
	}
`;

const Home = () => {
	useEffect(() => {
		//Update the document title
		document.title = 'Home - Notedly'
	})

	//Our useQuery react Hook
	const { data, loading, error} = useQuery(GET_NOTES);

	//if loading, display loading message
	if(loading) return (<p> Loading ... </p>);
	
	//If error show error message
	if(error) return (<p> Error in fetching data due to: ${error.message}</p>);

	return (
		<NoteFeed notes={data.noteFeed.notes} />
	)
}
Home.displayName = 'Home';

export default Home;