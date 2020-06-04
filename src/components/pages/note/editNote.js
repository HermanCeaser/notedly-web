import React from 'react';
import { useQuery, useMutation } from '@apollo/client'

import { GET_NOTE, GET_ME } from '../../../gql/query';
import NoteForm from '../../forms/noteForm';
import { EDIT_NOTE } from '../../../gql/mutation';

const EditNote = props => {
	const id = props.match.params.id;
    //Define Our note Query
	const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });
    //Fetch current user's data
    const  { data: userdata } = useQuery(GET_ME);

    //Define Our Mutation
    const [ editNote ] =  useMutation(
        EDIT_NOTE, 
        { 
            variables: { id },
            onCompleted: () => {
                props.history.push(`note/${id}`);
            }
        }
    )
    
	if(loading) return <p> Loading...</p>

	if(error) return <p> Error: Note not found! </p>

    if( userdata.me.id !== data.note.author.id ){
        return <p>You do not have Permission to Edit this Note</p>
    }
    //pass the Data to the form component
    return <NoteForm content={data.note.content}/>
};

export default EditNote;
