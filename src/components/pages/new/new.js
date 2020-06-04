import React, { useEffect } from 'react';
import { useMutation, gql } from '@apollo/client'

import NoteForm from '../../forms/noteForm'
import { GET_NOTES } from '../../../gql/query'

const NEW_NOTE = gql`
	mutation newNote($content: String!){
		newNote(content: $content) {
			id
			content
			createdAt
			favoriteCount
			favoriteBy {
				id
				username
			}
			author {
				id
				username
			}
		}
	}
`;

const NewNote = props => {
	useEffect(() => {
		//Update the document title
		document.title = 'New Note - Notedly'
	})

	const [newNote, { loading, error }] = useMutation(NEW_NOTE, {
		refetchQueries: [{ query: GET_NOTES }],
		onCompleted: data => {
			//When finished, redirect the user to notes page
			props.history.push(`note/${data.newNote.id}`);
		}
	})
    return (
      	<React.Fragment>
			{ loading  &&  <p>Loading...</p> }

			{ error  && <p> ${error.message}</p> }

			<NoteForm action={newNote}/>

		</React.Fragment>  
    );
};

NewNote.displayName = 'NewNote';

export default NewNote;
