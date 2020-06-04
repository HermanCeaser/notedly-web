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
	const { data, loading, error, fetchMore} = useQuery(GET_NOTES);

	//if loading, display loading message
	if(loading) return (<p> Loading ... </p>);
	
	//If error show error message
	if(error) return (<p> ${error.message}</p>);

	//if data loaded successfully
	return (
		<React.Fragment>
			<NoteFeed notes={data.noteFeed.notes} />

			{/*Only display the button when hasNextPage is true*/}
			{data.noteFeed.hasNextPage && (
				<button
					onClick={
						()=> fetchMore({
						variables: { cursor: data.noteFeed.cursor},
						updateQuery: (previousResult, { fetchMoreResult }) => {
							return {
								noteFeed: {
									cursor: fetchMoreResult.noteFeed.cursor,
									hasNextPage: fetchMoreResult.noteFeed.hasNextPage,
									notes: [
										...previousResult.noteFeed.notes,
										...fetchMoreResult.noteFeed.notes
									],
									__typename: 'noteFeed'
								}
							}
						}
					})
				}
				>&#8594;
				</button>
			)}
		</React.Fragment>
	)
}
Home.displayName = 'Home';

export default Home;